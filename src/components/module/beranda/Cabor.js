'use client'
import Image from 'next/image'
import Aos from 'aos'
import { useEffect } from 'react'
import Link from 'next/link'

export function Cabor() {
  useEffect(() => {
    Aos.init()
  })
  return (
    <section className="relative">
      <div className="xl :max-h-[620px] relative h-[265vw] bg-navyblue-500 py-[16vw] sm:py-32 md:h-[390px] md:py-10 lg:h-[490px] lg:py-14 xl:h-[600px] xl:py-16 2xl:h-[690px]  2xl:py-20">
        <div className="absolute left-0 top-0 h-full w-full bg-[url('/2023/porsenigama/assets/beranda/cabor/cabor-texture-mobile.png')] bg-cover bg-no-repeat md:bg-[url('/2023/porsenigama/assets/beranda/cabor/cabor-texture-desktop.png')]"></div>
        <div className=" relative flex h-full w-full flex-col justify-center gap-y-[24vw] md:h-fit md:gap-y-8 lg:h-full lg:gap-y-12 2xl:gap-y-6">
          <Image
            src="/assets/beranda/cabor/cabor-title.svg"
            width={0}
            height={0}
            className="relative z-[205] mx-auto h-auto w-[85%] md:w-[300px] lg:w-[380px] xl:w-[420px] 2xl:w-[500px]"
          ></Image>
          <div className="relative z-[999] mx-auto flex h-full w-[80%] flex-1 grow flex-col gap-y-[4vw] sm:w-full md:h-auto md:flex-row md:justify-center md:gap-x-16 lg:gap-x-28 xl:gap-x-24">
            <div className="flex flex-col items-center gap-y-3 sm:gap-y-6 md:gap-y-4 lg:justify-center">
              <Link href="/cabang">
                <div
                  data-aos="flip-down"
                  data-aos-delay="100"
                  data-aos-once="true"
                  data-aos-duration="500"
                >
                  <Image
                    src="/assets/beranda/cabor/cabor-maskot.png"
                    width={0}
                    height={0}
                    className=" w-auto sm:max-w-[550px] md:w-[180px] lg:w-[210px] xl:w-[270px] 2xl:w-[330px]"
                  ></Image>
                </div>
                <div
                  data-aos="fade-down"
                  data-aos-delay="100"
                  data-aos-once="tru xe"
                  data-aos-duration="500"
                >
                  <Image
                    src="/assets/beranda/cabor/cabor-olahraga.png"
                    width={0}
                    height={0}
                    className=" mx-auto w-[75%] cursor-pointer hover:scale-105 md:w-[170px] lg:w-[190px] 2xl:w-[270px] "
                  ></Image>
                </div>
              </Link>
            </div>
            <div className="flex flex-col items-center gap-y-3 sm:gap-y-6 md:gap-y-4 lg:justify-center ">
              <Link href="/cabang">
                <div
                  data-aos="flip-down"
                  data-aos-delay="300"
                  data-aos-once="true"
                  data-aos-duration="500"
                >
                  <Image
                    src="/assets/beranda/cabor/cabor-maskot.png"
                    width={0}
                    height={0}
                    className="w-auto sm:max-w-[550px] md:w-[180px] lg:w-[210px] xl:w-[270px] 2xl:w-[330px] "
                  ></Image>
                </div>
                <div
                  data-aos="fade-down"
                  data-aos-delay="300"
                  data-aos-once="true"
                  data-aos-duration="300"
                >
                  <Image
                    src="/assets/beranda/cabor/cabor-tangkai-seni.png"
                    width={0}
                    height={0}
                    className=" mx-auto w-[75%] cursor-pointer hover:scale-105 md:w-[170px]  lg:w-[200px] 2xl:w-[270px]"
                  ></Image>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <Image
          src="/assets/beranda/cloud-float.svg"
          height={0}
          width={0}
          className="floatY absolute left-0 top-[-9vw] z-50 w-[8vw] max-w-[55px] lg:max-w-[45px] xl:bottom-[-130px] xl:max-w-[55px]"
        ></Image>
        <Image
          src="/assets/beranda/separate-component.png"
          width={0}
          height={0}
          className="absolute bottom-[-9vw] z-50 hidden h-auto w-full object-contain md:bottom-[-30px] md:left-[50%] md:block md:h-[60px] md:w-[70%] md:translate-x-[-50%]"
        ></Image>
        <div className="absolute bottom-[-8vw] right-0 z-50 -scale-x-100">
          <Image
            src="/assets/beranda/cloud-float.svg"
            height={0}
            width={0}
            className=" floatY w-[8vw]  max-w-[55px] lg:max-w-[45px] xl:bottom-[-110px] xl:max-w-[55px] "
          ></Image>
        </div>
      </div>
      <Image
        src="/assets/beranda/separate-component.svg"
        width={1000}
        height={1000}
        className=" absolute bottom-[-33px] left-[50%] z-50 w-full translate-x-[-50%] md:hidden"
      />
      <Image
        src="/assets/beranda/separate-component.svg"
        width={1000}
        height={1000}
        className=" absolute left-[50%] top-[-30px] z-50 w-full translate-x-[-50%] md:hidden"
      />
      <Image
        src="/assets/beranda/separate-component.png"
        width={1000}
        height={1000}
        className="absolute top-[-30px] z-50 hidden h-auto w-full object-contain md:bottom-[-30px] md:left-[50%] md:block md:h-[60px] md:w-[70%] md:translate-x-[-50%]"
      />
    </section>
  )
}

export default Cabor
