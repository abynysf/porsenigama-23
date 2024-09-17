'use client'
import 'aos/dist/aos.css'

import Image from 'next/image'
import AOS from 'aos'
import { useEffect } from 'react'

export function Hero() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      <section
        className="relative -z-10 h-[350px] select-none overflow-hidden sm:h-[500px] lg:h-[125vh]"
        style={{
          backgroundImage: `url("${basePath}/assets/supporter/all/background.png")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="lg:hidden">
          <Image
            width={103}
            height={160}
            src={'/assets/supporter/mobile/awanKiriAtas.png'}
            className="absolute left-0 top-0 w-1/3 sm:w-1/4"
            data-aos="fade-down-right"
            data-aos-duration="1000"
          />
          <Image
            width={103}
            height={160}
            src={'/assets/supporter/mobile/awanKananAtas.png'}
            className="absolute right-0 top-0 w-1/3 sm:w-1/4"
            data-aos="fade-down-left"
            data-aos-duration="1000"
          />
        </div>
        <div className=" max-lg:hidden">
          <Image
            width={500}
            height={250}
            src={'/assets/supporter/desktop/awanKiriAtas.png'}
            className="absolute left-0 top-0 w-1/3"
            data-aos="fade-down-right"
            data-aos-duration="1000"
          />
          <Image
            width={500}
            height={250}
            src={'/assets/supporter/desktop/awanKananAtas.png'}
            className="absolute right-0 top-0 w-1/3"
            data-aos="fade-down-left"
            data-aos-duration="1000"
          />
        </div>
        <div className=" relative flex h-screen items-center justify-center max-lg:hidden">
          <Image
            width={4000}
            height={4000}
            src={'/assets/supporter/desktop/typo.svg'}
            className="absolute -mt-[14%] scale-[80%]"
          />
        </div>
        <div>
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="1150"
            className="absolute bottom-0"
          >
            <Image
              width={4000}
              height={4000}
              src={'/assets/supporter/all/awanPutih.png'}
              className="scale-[150%] lg:scale-[125%]"
            />
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="1150"
            className="absolute bottom-0"
          >
            <Image
              width={4000}
              height={4000}
              src={'/assets/supporter/all/awanTransparan.png'}
              className="scale-[150%] lg:scale-[125%]"
            />
          </div>
        </div>
      </section>
      <section>
        <Image
          width={4000}
          height={4000}
          src={'/assets/supporter/mobile/porchi.png'}
          className="-mt-[50%] lg:hidden"
        />
      </section>
      <section className="bg-[#D48B40] px-8 pt-8 lg:p-0">
        <Image
          width={4000}
          height={4000}
          src={'/assets/supporter/mobile/typo.svg'}
          className="lg:hidden"
        />
        <div className="max-lg:hidden">
          <div className="absolute -mt-[33%] w-full">
            <Image
              width={4000}
              height={4000}
              src={'/assets/supporter/desktop/porchi.png'}
              data-aos="fade-up"
              data-aos-duration="1000"
            />
          </div>
          <div className="absolute -mt-[19%]">
            <Image width={4000} height={4000} src={'/assets/supporter/desktop/pagar.png'} />
          </div>
          <div className="scale-[30%]">
            <Image
              width={4000}
              height={4000}
              src={'/assets/supporter/desktop/barisan.svg'}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
            />
          </div>
          <div className="-mt-[5%] scale-[75%]">
            <Image width={4000} height={4000} src={'/assets/supporter/desktop/garis.svg'} />
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
