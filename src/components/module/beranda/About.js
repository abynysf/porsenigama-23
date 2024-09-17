'use client'
import Image from 'next/image'
import Link from 'next/link'
import Aos from 'aos'
import { useEffect, useRef } from 'react'

export function About() {
  const thumbnailVideo = useRef()
  const video = useRef()
  useEffect(() => {
    Aos.init()
  })
  return (
    <section>
      <div
        className="relative flex h-[285vw] flex-col justify-center overflow-hidden  md:h-[680px] lg:h-[940px] xl:h-[1200px] 2xl:h-[1300px]"
        id="about"
      >
        <div className="absolute h-full w-full  bg-[url('/2023/porsenigama/assets/beranda/about/about-bg.webp')] bg-cover bg-no-repeat sm:bg-center md:bg-[url('/2023/porsenigama/assets/beranda/about/about-bg-desktop.webp')] md:bg-center lg:bg-center xl:bg-right-bottom 2xl:bg-center"></div>
        <div className=" xl relative z-[300] mx-auto flex h-[60%] w-[90%] flex-col justify-center overflow-hidden pb-40 md:w-[85%] md:justify-end md:pb-0 md:pt-[0] lg:w-[85%] xl:scale-[1.20] xl:justify-center xl:pb-[5vw] xl:pt-24  2xl:scale-[1.15] 2xl:pb-0 2xl:pt-[7vw]">
          <Image
            src="/assets/beranda/about/about-title.svg"
            width={1000}
            height={1000}
            className="mx-auto mb-5 h-auto w-[90%] max-w-[320px] md:mb-2 lg:min-w-[390px] 2xl:mb-7 2xl:scale-125"
          ></Image>
          <div
            data-aos="zoom-out"
            data-aos-once="true"
            data-aos-duration="700"
            className="mx-auto rounded-xl border-[5px] border-slate-50   shadow-xl md:w-[60%] md:max-w-[425px] lg:min-w-[620px] xl:min-w-[650px] 2xl:w-[750px] 2xl:max-w-[750px]"
            onClick={() => {
              video.current.src = 'https://www.youtube.com/embed/PQY_YsqTnzQ?autoplay=1'
              thumbnailVideo.current.style.display = 'none'
            }}
          >
            <iframe
              src="about:blank"
              className=" aspect-video w-full rounded-lg"
              allow="autoplay;"
              ref={video}
            ></iframe>
            <div
              className="absolute left-[50%] top-0 h-full w-full translate-x-[-50%] cursor-pointer rounded-lg"
              ref={thumbnailVideo}
            >
              <Image
                src="/assets/beranda/about/thumbnail-video.jpg"
                width={1000}
                height={1000}
                className="h-auto w-full rounded-lg"
              />
              <Image
                src="/assets/beranda/about/play-button.svg"
                width={1000}
                height={1000}
                className="absolute left-[50%] top-[50%] h-auto w-24 translate-x-[-50%] translate-y-[-50%]"
              />
            </div>
          </div>
        </div>
        <div className="relative z-[300] h-[48%] pt-4 lg:pt-12 xl:mt-[-80px] xl:h-[40%] 2xl:mt-[0vh] 2xl:scale-[1.15] ">
          <div
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-once="true"
            data-aos-anchor-placement="top-center"
            className="mx-auto md:relative md:pt-[70px] xl:mt-2 xl:w-[80%] 2xl:mt-[4vh] "
          >
            <Image
              width={0}
              height={0}
              src="/assets/beranda/about/about-description.webp"
              className="mx-auto w-[90%] md:hidden"
            ></Image>
            <Image
              width={0}
              height={0}
              src="/assets/beranda/about/about-description-desktop.webp"
              className="mx-auto hidden h-min w-[80%] md:block md:w-[650px] lg:w-[850px] xl:w-[900px] 2xl:w-[950px]"
            ></Image>
            <div className="absolute left-[50%] top-[44%] w-[70%] translate-x-[-50%] translate-y-[-50%] text-center font-medium text-darkbrown-500 sm:w-[60%] md:top-[71%] md:w-[70%] md:max-w-[550px] lg:top-[67%] lg:w-[65%] lg:max-w-[800px]">
              <p className="mb-[7vw] text-justify font-montserrat text-xs sm:text-base md:mb-2 md:text-xs lg:text-base">
                Pekan Olahraga dan Seni Universitas Gadjah Mada (Porsenigama) adalah ajang olahraga
                dan seni tahunan yang melibatkan kontingen dari berbagai Fakultas dan Sekolah di
                UGM. Acara ini diselenggarakan berdasarkan RKAT atau program FORKOM UKM UGM. Tahun
                ini, Porsenigama mengusung tema "Kembara Jagaddhita" dan tagline "Genggam Gemerlap
                Talenta Gadjah Mada.
              </p>
              <ul className="flex items-center justify-center gap-x-2">
                <Link href="/jadwal" className="cursor-pointer ">
                  <li className="text-xs underline">Jadwal</li>
                </Link>
                <li className="h-[6px] w-[6px] rounded-full bg-darkbrown-500"></li>
                <Link href="/galeri" className="cursor-pointer ">
                  <li className="text-xs underline">Galeri</li>
                </Link>
                <li className="h-[6px] w-[6px] rounded-full bg-darkbrown-500"></li>
                <Link href="/supporter" className="cursor-pointer ">
                  <li className="text-xs underline">Supporter</li>
                </Link>
                <li className="h-[6px] w-[6px] rounded-full bg-darkbrown-500"></li>
                <Link href="/faq" className="cursor-pointer ">
                  <li className="text-xs underline">FAQ</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>

        <Image
          src="/assets/beranda/separate-component.svg"
          width={1000}
          height={1000}
          className="absolute bottom-0 left-[50%] z-50 h-[60px] w-full translate-x-[-50%] object-contain md:hidden"
        />
        {/* <Image
          src="/assets/beranda/separate-component.png"
          width={1000}
          height={1000}
          className="absolute bottom-[-30px] z-50 hidden h-auto w-full object-contain md:bottom-[-30px] md:left-[50%] md:block md:h-[60px] md:w-[70%] md:translate-x-[-50%]"
        /> */}
      </div>
    </section>
  )
}

export default About
