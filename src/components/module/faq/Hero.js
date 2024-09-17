'use client'
import React from 'react'
import Image from 'next/image'

export function Hero() {
  return (
    <>
      <div className="relative flex h-auto w-full flex-col items-center justify-center">
        {/* --- Cloud --- */}
        <div>
          {/* Cloud left */}
          <div className="cloudFaqLeft absolute left-0 top-0 w-[40%] lg:w-[25%]">
            <Image
              src="/assets/faq/cloud.png"
              alt="Cloud"
              width={0}
              height={0}
              style={{
                height: '100%',
                width: '100%',
                objectFit: 'cover',
                objectPosition: 'bottom',
              }}
              className=""
            />
          </div>
          {/* Cloud right */}
          <div className="cloudFaqRight absolute right-0 top-0 w-[40%] lg:w-[25%]">
            <Image
              src="/assets/faq/cloud.png"
              alt="Cloud"
              width={0}
              height={0}
              style={{
                height: '100%',
                width: '100%',
                objectFit: 'cover',
                objectPosition: 'bottom',
              }}
              className="-scale-x-100"
            />
          </div>
        </div>
        <div className="relative flex h-auto w-full max-w-[1100px] items-center justify-center">
          <div className="relative mt-20 flex h-auto w-[90%] flex-col items-center justify-center lg:w-[80%] lg:flex-row-reverse lg:items-end">
            {/* --- Header --- */}
            <div className="relative flex h-fit w-full max-w-[280px] items-center justify-center lg:mb-7 lg:ml-5">
              <Image
                src="/assets/faq/headerFAQ.png"
                alt="Header FAQ"
                width={0}
                height={0}
                style={{
                  height: '100%',
                  width: '100%',
                  objectFit: 'cover',
                  objectPosition: 'bottom',
                }}
                className="w-[50vw]"
              />
            </div>
            {/* --- Porchi --- */}
            <div className="relative flex h-[60vw] max-h-[400px] min-h-[150px] w-full items-end justify-center lg:justify-end">
              <div className="relative flex h-[13.3rem] min-h-[180px] w-[13.3rem] min-w-[200px] items-center justify-center xxs:h-[15rem] xxs:w-[15rem] xs:h-[18rem] xs:w-[18rem] s:h-[25rem] s:w-[25rem] md:h-[400px] md:w-[400px] lg:h-full lg:w-[500px] ">
                <Image
                  src="/assets/faq/Porchi-Body-testing.svg"
                  alt="Badan Porchi"
                  width={0}
                  height={0}
                  className="absolute -z-10 h-full w-full translate-x-10 translate-y-[22%] scale-[150%] xxs:translate-y-[24%] lg:translate-y-[20%]"
                />
                <Image
                  src="/assets/faq/Porchi-L_Hand.svg"
                  alt="Kepala Porchi"
                  width={100}
                  height={100}
                  className="z-30 h-full w-full -translate-x-[6.8%] translate-y-[42.3%] scale-50 xxs:-translate-x-[8.8%] xxs:translate-y-[44.5%] xs:-translate-x-[11.8%] s:-translate-x-[15.8%] lg:-translate-x-[13.2%] lg:translate-y-[40%]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero

/*
<Image
  src="/assets/faq/Porchi-Body.svg"
  alt="Badan Porchi"
  width={0}
  height={0}
  className="xxs:-translate-x-[15%] xxs:translate-y-[20%] xxs:scale-[115%] xs:-translate-x-[12%] xs:scale-105 s:-translate-x-[12%] s:translate-y-[18%] absolute z-10 h-full w-full -translate-x-[13.5%] translate-y-[18%] scale-110 md:-translate-x-[15%] lg:-translate-x-[10%] lg:scale-95"
/>
<Image
  src="/assets/faq/Porchi-Head.svg"
  alt="Kepala Porchi"
  width={0}
  height={0}
  className="xxs:translate-y-[20%] xs:scale-100 s:translate-y-[18%] relative z-10 h-full w-full translate-x-[20%] translate-y-[18.3%] max-md:scale-110 md:translate-x-[16.5%] lg:translate-x-[15%] lg:scale-100"
/>
*/
