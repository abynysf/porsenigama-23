'use client'
import Image from 'next/image'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export function Porchi() {
  useEffect(() => {
    AOS.init()
  })
  return (
    <section>
      <div className="relative h-[185.5vw] w-full overflow-hidden sm:h-[190vw] md:h-[470px] lg:h-[620px] xl:h-[745px] 2xl:h-[800px]">
        <div className="h-full w-full bg-[url('/2023/porsenigama/assets/beranda/porchi/porchi-bg.png')] bg-cover bg-no-repeat pt-[5vw] md:bg-[url('/2023/porsenigama/assets/beranda/porchi/porchi-bg-desktop.png')] md:bg-right md:pt-32 lg:bg-center lg:pt-40 xl:h-[110%] xl:bg-center ">
          <div className="relative flex h-full w-full flex-col md:ml-auto md:w-[77%] md:min-w-[680px] md:flex-row lg:w-[76%]">
            <div
              className="relative z-[205] mx-auto ml-[1px] w-[90%] md:ml-0 md:mr-auto md:w-[240px] lg:w-[300px] xl:w-[370px] 2xl:ml-[-20px] 2xl:w-[450px]"
              data-aos="fade-up"
              data-aos-once="true"
            >
              <Image
                src="/assets/beranda/porchi/porchi-text-bg.png"
                width={1000}
                height={1000}
                className=" w-full "
              />
              <Image
                src="/assets/beranda/porchi/porchi-temui-porchi.svg"
                width={1000}
                height={1000}
                className=" absolute left-[50%] top-[8vw] w-[90%] translate-x-[-50%] md:top-8"
              />
              <p className="custom-shadow-porchi absolute left-[52%] top-[40vw] w-[80%] translate-x-[-50%] leading-5 md:top-[110px] md:text-sm md:leading-4 lg:top-36 xl:top-40 xl:text-base xl:leading-5 2xl:top-44">
                Maskot Porsenigama, Porchi, kembali hadir menyapa Porsenimate!
              </p>
            </div>
            <div className="relative md:w-[50%]" data-aos="fade-left" data-aos-once="true">
              <Image
                src="/assets/beranda/porchi/porchi-maskot.svg"
                width={1000}
                height={1000}
                className="absolute right-[15vw] top-[15vw] w-1/2 md:left-[-60px] md:top-[-5px] md:h-[270px] md:w-auto lg:h-[420px] xl:left-[-120px] xl:h-[530px] 2xl:h-[570px]"
              />
            </div>
          </div>

          <div data-aos="fade-up-left" className="scale-[-1]" data-aos-once="true">
            <Image
              src="/assets/beranda/porchi/porchi-cloud-deskop.svg"
              height={0}
              width={0}
              className="cloudPorchiRight absolute left-0 top-0 hidden w-[15vw] md:block lg:w-[17vw] lg:max-w-[150px] xl:max-w-[200px] 2xl:max-w-[220px]"
            ></Image>
          </div>

          <div data-aos="fade-up-left" className="scale-[-1]" data-aos-once="true">
            <Image
              src="/assets/beranda/porchi/porchi-cloud-deskop-right.svg"
              height={0}
              width={0}
              className="cloudPorchiLeft absolute bottom-0 right-0 hidden w-[15vw] md:block lg:w-[17vw] lg:max-w-[150px] xl:max-w-[200px] 2xl:max-w-[220px]"
            ></Image>
          </div>
        </div>

        {/* <Image
          src="/assets/beranda/separate-component.png"
          width={1000}
          height={1000}
          className=" absolute top-[-30px] z-50 hidden h-auto w-full object-contain md:bottom-[-30px] md:left-[50%] md:block md:h-[60px] md:w-[70%] md:translate-x-[-50%]"
        /> */}
      </div>
    </section>
  )
}

export default Porchi
