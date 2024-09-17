'use client'
import Image from 'next/image'

export function Sponsor() {
  const sponsor = ['/assets/beranda/sponsor/logo sponsor/colmitra-m.jpg']
  return (
    <section>
      <div className="relative flex h-[230vw] w-full items-center justify-center bg-beige-500 pb-[10vw] pt-[20vw] md:h-[630px] md:pt-0 lg:h-[720px] xl:h-[1000px] 2xl:h-[1100px] 2xl:pb-44">
        <div className="absolute left-0 top-0 h-full w-full bg-[url('/2023/porsenigama/assets/beranda/sponsor/sponsor-texture.png')] bg-cover"></div>
        <div className="relative flex h-[100%] w-full items-center justify-center md:items-start md:pt-8 lg:pt-12 2xl:h-[90%] 2xl:pb-12 2xl:pt-0">
          <Image
            src="/assets/beranda/sponsor/sponsor-component.png"
            width={1000}
            height={1000}
            className="absolute left-[50%] top-[50%] w-[99%] -translate-x-[50%] -translate-y-[50%] md:hidden"
          ></Image>
          {/* items-center justify-center */}
          <div className="relative flex h-[70%] w-[80%] md:w-[90%] md:pt-24 lg:w-[95%] lg:max-w-[1200px] lg:pt-32 2xl:max-w-[1400px] ">
            <Image
              src="/assets/beranda/sponsor/sponsor-component-desktop.png"
              width={1000}
              height={1000}
              className="absolute left-0 top-9 hidden h-[100%] w-[100%] md:block md:h-auto lg:left-[50%] lg:translate-x-[-50%] xl:h-auto"
            ></Image>
            <div className="relative flex w-full flex-wrap justify-center gap-2 md:w-[80%] lg:gap-4">
              {sponsor.map((item) => {
                return (
                  <Image
                    src={item}
                    width={1000}
                    height={1000}
                    className="h-min w-[28vw] md:w-[14vw] xl:w-[11vw] 2xl:w-[8vw]"
                  />

                  // S = W-[24vw], M = W-[28vw], L = W-[32vw]
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sponsor
