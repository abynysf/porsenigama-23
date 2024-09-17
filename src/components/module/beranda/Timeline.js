'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const getPosts = async () => {
  const headers = {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTH}`,
  }

  const response = await fetch('https://ppsmb.ugm.ac.id/2022/strapi/api/psgcalendars', {
    headers,
  })
  const data = await response.json()
  return data.data
}

export function Timeline() {
  const [index, setIndex] = useState(0)
  const [dataTimeline, setDataTimeline] = useState([])
  const [browserWidth, setBrowserWidth] = useState(0)

  useEffect(() => {
    getPosts().then((data) => {
      setDataTimeline(data)
    })

    setBrowserWidth(window.innerWidth)
  })

  const nextButton = () => {
    index === dataTimeline.length - 1 ? setIndex(index + 0) : setIndex(index + 1)
  }

  const prevButton = () => {
    setIndex(index - 1)
  }

  return (
    <section>
      <div className="relative h-[87vw] bg-navyblue-500 pt-[18vw] md:h-[170px] md:p-0 lg:h-[195px] xl:h-[240px] 2xl:h-[270px]">
        <div className="relative flex h-full flex-col md:flex-row md:items-center md:justify-center md:gap-x-14 lg:gap-x-20 lg:px-10 xl:gap-x-24">
          <div className="md:w-1/4 lg:w-fit">
            <Image
              src="/assets/beranda/timeline/timeline-title-mobile.png"
              width={0}
              height={0}
              className="h-auto max-h-[135px] w-full md:hidden"
            ></Image>
            <Image
              src="/assets/beranda/timeline/timeline-title.svg"
              width={0}
              height={0}
              className="mx-auto hidden w-full max-w-[180px] md:block lg:max-w-[200px] xl:max-w-[270px]"
            ></Image>
          </div>
          <div className="relative z-[201] flex w-[90vw] flex-grow items-center gap-x-6 self-center sm:w-[60vw] sm:scale-[1.4] md:max-w-[60%] md:scale-100 lg:max-w-[100%] xl:max-w-[980px]">
            <Image
              src="/assets/beranda/timeline/timeline-cover.png"
              width={0}
              height={0}
              className="relative z-10 h-auto w-auto -scale-100"
              alt=""
            ></Image>
            <Image
              src="/assets/beranda/timeline/arrow.svg"
              width={0}
              height={0}
              className={`relative z-[201] h-auto w-auto -scale-100 ${
                dataTimeline.length > 3 ? '' : 'lg:hidden'
              } ${
                index === 0
                  ? `pointer-events-none cursor-none opacity-25`
                  : `pointer-events-auto cursor-pointer opacity-100`
              }`}
              alt="arrow"
              onClick={() => {
                prevButton()
              }}
            ></Image>
            <div className="relative w-full overflow-x-hidden">
              <div
                className={`flex duration-500 lg:w-full lg:translate-x-[0%]`}
                style={{ transform: `translateX(-${index > 0 ? index * 100 : 0}%)` }}
              >
                {dataTimeline.map((event) => {
                  return (
                    <div className="h-full min-w-full flex-col justify-center text-center lg:min-w-[33.3%]">
                      <h3 className="font-bold text-white lg:font-semibold xl:text-2xl">
                        {event.attributes.namaevent}
                      </h3>
                      <p className="text-sm text-white lg:text-base">{event.attributes.tanggal}</p>
                    </div>
                  )
                })}
              </div>
            </div>
            <Image
              src="/assets/beranda/timeline/arrow.svg"
              width={0}
              height={0}
              className={`relative z-[300] h-auto w-auto ${
                dataTimeline.length > 3 ? '' : 'lg:hidden'
              } ${
                browserWidth < 768
                  ? index === dataTimeline.length - 1
                    ? `pointer-events-none cursor-none opacity-25`
                    : 'pointer-events-auto cursor-pointer opacity-100'
                  : index === Math.ceil(dataTimeline.length / 3 - 1)
                  ? `pointer-events-none cursor-none opacity-25`
                  : 'pointer-events-auto cursor-pointer opacity-100'
              }`}
              alt="arrow"
              onClick={() => {
                nextButton()
              }}
            ></Image>
            <Image
              src="/assets/beranda/timeline/timeline-cover.png"
              width={0}
              height={0}
              className="relative z-10 h-auto w-auto scale-x-100"
              alt=""
            ></Image>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline
