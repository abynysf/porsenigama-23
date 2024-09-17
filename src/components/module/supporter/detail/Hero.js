'use client'
import 'aos/dist/aos.css'

import Image from 'next/image'
import AOS from 'aos'
import { useEffect } from 'react'

export function Hero({ path, nama, foto }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      <section
        className="relative flex select-none overflow-hidden"
        style={{
          backgroundImage: `url("${basePath}/assets/supporter/detail/all/bgHero.png")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div>
          <Image
            width={4000}
            height={4000}
            src={'/assets/supporter/detail/all/awanKiriAtas.png'}
            className="absolute left-0 top-0 w-1/2 lg:w-1/3"
            data-aos="fade-down-right"
            data-aos-duration="1000"
          />
          <Image
            width={4000}
            height={4000}
            src={'/assets/supporter/detail/all/awanKananAtas.png'}
            className="absolute right-0 top-0 w-1/2 lg:w-1/3"
            data-aos="fade-down-left"
            data-aos-duration="1000"
          />
        </div>

        <div className="mt-[30%] lg:mt-[11%] lg:flex">
          {/* <div className="mt-[30%] border border-white md:mt-[15%] md:scale-[60%] lg:mt-[11%] lg:flex lg:scale-100"> */}
          <div data-aos="fade-up-right" data-aos-duration="800" data-aos-delay="1200">
            <div className="relative lg:scale-[80%]">
              <div className="absolute -mt-[40%] scale-50">
                <Image width={4000} height={4000} src={path} className="absolute scale-[90%]" />
                <Image
                  width={4000}
                  height={4000}
                  src={'/assets/supporter/detail/all/legendFoto.png'}
                />
              </div>
              <div className="flex items-center justify-center">
                <h1 className="absolute font-rockwell text-2xl font-bold text-red-500 md:text-4xl">
                  {nama}
                </h1>
                <Image width={4000} height={4000} src={'/assets/supporter/detail/all/legend.png'} />
              </div>
            </div>
          </div>
          <div
            className="flex items-center justify-center p-3 lg:p-8"
            data-aos="fade-up-left"
            data-aos-duration="800"
            data-aos-delay="1200"
          >
            <div className="relative flex items-center justify-center lg:-mt-[10%]">
              <Image width={4000} height={4000} src={'/assets/supporter/detail/all/foto.png'} />
              <div className="absolute ml-[0.9%] mt-[5.2%] flex h-[80.5%] w-[83.5%] items-center justify-center">
                <Image
                  width={4000}
                  height={4000}
                  src={foto}
                  className="h-full w-full object-fill"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
