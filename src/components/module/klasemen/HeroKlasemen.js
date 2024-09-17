'use client'
import Image from 'next/image'
import 'aos/dist/aos.css'
import AOS from 'aos'
import { useEffect } from 'react'

export function HeroKlasemen() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div>
      <div className="absolute z-30 w-1/3  overflow-hidden md:w-1/5">
        <Image
          alt="banner"
          className=" left-0 top-0 "
          src="/assets/klasemen/awan1_kiriatas-min.png"
          data-aos="fade-down-right"
          data-aos-duration="1000"
          width={1000}
          height={1000}
        />
      </div>
      <div className="absolute z-20 overflow-hidden">
        <Image
          alt="banner"
          className=" left-0 top-0 h-full w-10 md:w-16 lg:w-20"
          src="/assets/klasemen/awan2_kiriatas-min.png"
          width={1000}
          height={1000}
          data-aos="fade-right"
          data-aos-duration="1000"
        />
      </div>

      <div className="absolute right-0 top-0 z-20 overflow-hidden">
        <Image
          alt="banner"
          className="  h-full w-10  md:w-16 lg:w-20"
          src="/assets/klasemen/awan2_kananatas-min.png"
          width={1000}
          height={1000}
          data-aos="fade-left"
          data-aos-duration="1000"
        />
      </div>

      <div className="absolute right-0 top-0 z-30 w-1/3 overflow-hidden md:w-1/5">
        <Image
          alt="banner"
          className=" right-0 top-0 "
          src="/assets/klasemen/awan1_kananatas-min.png"
          data-aos="fade-down-left"
          data-aos-duration="1000"
          width={1000}
          height={1000}
        />
      </div>


      <div className=" flex h-[100vh] w-full scale-y-[100%]  justify-center bg-[url('/2023/porsenigama/assets/klasemen/bg_mobile_klasemen.png')]  bg-cover  bg-center  bg-no-repeat md:scale-y-[100%]  md:bg-[url('/2023/porsenigama/assets/klasemen/bg_desktop_klasemen.png')] lg:h-[160vh]">
        <Image
          alt="banner"
          className=" lg:ml-40% mt-[30%] h-[30%] w-full object-contain md:ml-[30%] md:mt-[10%]"
          src="/assets/klasemen/banner_klasemen.png"
          width={1000}
          height={1000}
          data-aos="fade-up"
          data-aos-duration="1000"
        />
      </div>
    </div>
  )
}

export default HeroKlasemen
