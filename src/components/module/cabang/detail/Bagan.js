'use client'
import Image from 'next/image'
import 'aos/dist/aos.css'
import React, { useEffect } from 'react'
import AOS from 'aos'

export function Bagan() {
  const basePath = `${process.env.NEXT_PUBLIC_BASE_PATH}`
  const backgroundStyle = {
    backgroundImage: `url('${basePath}/assets/cabang/detail/bg_iframe.png')`,
    backgroundSize: 'contain',
  }

  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div className="">
      <main className=" flex min-h-screen items-center justify-center py-10">
        <div
          className="flex h-full w-full items-center justify-center px-4 md:px-10 lg:px-24"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >

          <div
            className="absolute left-12 flex h-[640px] flex-col justify-between md:relative md:left-16 md:h-full lg:left-[4.5rem]"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay={1000}
          >
            <Image
              src={'/assets/cabang/detail/bagan/ornamen_lt.png'}
              width={0}
              height={0}
              alt="ornamen"
              className="h-auto w-[126px] md:w-[240px]"
            />
            <Image
              src={'/assets/cabang/detail/bagan/ornamen_lb.png'}
              width={0}
              height={0}
              alt="ornamen"
              className="h-auto w-[126px] md:w-[240px]"
            />
          </div>

          {/* <iframe
            src="https://challonge.com/id/PORSENIGAMA/module"
            width="0"
            height="0"
            allowFullScreen
            className="z-50 flex h-[451px] w-full rounded-3xl"
            style={{ border: '2px solid brown' }}
          ></iframe> */}
          <div
            className='flex flex-nowrap items-center w-full h-[451px] lg:h-auto rounded-3xl z-20 p-12 bg-white'
            style={{border: '2px solid brown'}}>

                <Image
                 src={'/assets/cabang/detail/coming_soon.png'}
                 width={0}
                 height={0}
                 alt='Coming Soon'
                 className='w-full h-auto'
                 data-aos="zoom-out"
                 data-aos-duration="1000"
                 data-aos-delay={1500}/>

            </div>

          <div
            className="absolute right-12 flex h-[640px] flex-col justify-between md:relative md:right-16 md:h-full lg:right-[4.5rem]"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay={1000}
          >
            <Image
              src={'/assets/cabang/detail/bagan/ornamen_rt.png'}
              width={0}
              height={0}
              alt="ornamen"
              className="h-auto w-[126px] md:w-[240px]"
            />
            <Image
              src={'/assets/cabang/detail/bagan/ornamen_rb.png'}
              width={0}
              height={0}
              alt="ornamen"
              className="h-auto w-[126px] md:w-[240px]"
            />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Bagan
