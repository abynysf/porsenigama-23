'use client'
import 'aos/dist/aos.css'

import Image from 'next/image'
import AOS from 'aos'
import { useEffect } from 'react'

export function Profil({ nama, desc }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      <section
        className="select-none overflow-x-clip"
        style={{
          backgroundImage: `url("${basePath}/assets/supporter/detail/all/bgProfil.png")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="scale-[200%] lg:scale-110">
          <Image
            width={4000}
            height={4000}
            src={'/assets/supporter/detail/all/awanTransparan.png'}
          />
        </div>

        {/* Deskripsi Tampilan Desktop */}
        <div
          className="relative -mt-[20%] px-[5%] max-lg:hidden"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-once="true"
        >
          <div className="absolute -mt-[7.5%] flex -translate-x-9 scale-[40%] items-center justify-center">
            <h1 className="absolute font-rockwell text-[84px] text-white">{nama}</h1>
            <Image width={4000} height={4000} src={'/assets/supporter/detail/all/papanJudul.png'} />
          </div>
          <div className="flex items-center justify-center">
            <p className="lg:text-md absolute flex min-h-[55%] max-w-[76%] -translate-x-2.5 items-center justify-center text-center font-montserrat text-red-500 xl:text-2xl">
              {desc}
            </p>
            <Image width={4000} height={4000} src={'/assets/supporter/detail/all/papan.png'} />
          </div>
        </div>

        {/* Deskripsi Tampilan Mobile */}
        <div
          className="relative -mt-[20%] translate-x-2 p-2 lg:hidden"
          data-aos="fade-up"
          data-aos-duration="800"
          // data-aos-delay="1200"
          data-aos-once="true"
        >
          <div className="absolute -mt-[5%] flex -translate-x-3.5 scale-[83%] items-center justify-center">
            <h1 className="absolute font-rockwell text-2xl text-white md:text-4xl">{nama}</h1>
            <Image width={4000} height={4000} src={'/assets/supporter/detail/all/papanJudul.png'} />
          </div>
          <div className="flex items-center justify-center">
            <p className="absolute flex min-h-[70%] max-w-[75%] -translate-x-2.5 items-center justify-center text-center font-montserrat text-[12px] text-red-500 tanggung:text-[14px] md:text-[28px]">
              {desc}
            </p>
            <Image
              width={4000}
              height={4000}
              src={'/assets/supporter/detail/mobile/papanMobile.png'}
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Profil
