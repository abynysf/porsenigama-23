'use client'
import 'aos/dist/aos.css'

import Image from 'next/image'
import AOS from 'aos'
import { useEffect } from 'react'

export function Video({ link }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      <section
        className="select-none overflow-x-clip"
        style={{
          backgroundImage: `url("${basePath}/assets/supporter/detail/all/bgHero.png")`,
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
        }}
      >
        <div
          className="px-[70px] py-[50px] lg:px-[40%] lg:pb-0 lg:pt-[5%]"
          data-aos="zoom-in"
          data-aos-duration="800"
          data-aos-once="true"
        >
          <Image width={4000} height={4000} src={'/assets/supporter/detail/all/typoProfil.svg'} />
        </div>
        <div
          className="px-[15px] py-[30px] lg:px-[15%] lg:py-[3%]"
          data-aos="fade-down"
          data-aos-duration="800"
          data-aos-once="true"
        >
          <iframe
            src={link}
            className="mx-auto aspect-video w-full rounded-xl border-[5px] border-slate-50 shadow-xl "
          ></iframe>
        </div>
      </section>
    </>
  )
}

export default Video
