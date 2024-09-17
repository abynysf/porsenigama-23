'use client'
import 'aos/dist/aos.css'

import Image from 'next/image'
import Link from 'next/link'
import AOS from 'aos'
import { useEffect } from 'react'

function Card({ href, nama, logo }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      <Link href={href}>
        <div className="transform flex-col p-5 duration-1000 ease-in-out hover:scale-110 lg:p-10">
          <Image
            width={4000}
            height={4000}
            src={logo}
            // data-aos="zoom-in"
            // data-aos-duration="600"
            // data-aos-easing="ease-in-out"
            // data-aos-once="true"
          />
          <div className="mt-5 flex items-center justify-center lg:mt-3 ">
            <p className="absolute w-auto max-w-[50%] items-center justify-center text-center font-rockwell text-[11px] text-navyblue-500 md:text-[24px] lg:text-[15.5px] xl:text-[20px]">
              {nama}
            </p>
            <Image width={4000} height={4000} src={'/assets/supporter/barisan/papan.png'} />
          </div>
        </div>
      </Link>
    </>
  )
}

export default Card
