'use client'
import React, { useEffect, useState } from 'react'
import 'aos/dist/aos.css'
import AOS from 'aos'
import Image from 'next/image'

export function ContentKlasemen() {
  const [screenWidth, setScreenWidth] = useState(0)

  useEffect(() => {
    // Function to update screenWidth state
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth)
    }

    // Initial screen width
    updateScreenWidth()

    // Event listener for screen width changes
    window.addEventListener('resize', updateScreenWidth)

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateScreenWidth)
    }
  }, [])

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div className="flex items-center justify-center bg-copper-500 px-[12px] pt-[10%] md:px-[32px] lg:px-[72px] ">
      <div className=" w-full bg-copper-500 pt-16">
        <div data-aos="fade-down" data-aos-duration="1000">
          <p className=" text-center font-masterofbreak text-3xl text-white md:text-[80px] lg:text-[96px]">
            Klasemen
          </p>
          <p className="text-center font-rockwell text-3xl font-bold text-white md:hidden">
            PORSENIGAMA
          </p>
          <p className="text-center font-rockwell text-3xl font-bold text-white md:hidden">2023</p>

          <p className=" hidden text-center font-rockwell font-bold text-white md:block md:text-[80px] lg:text-[96px]">
            PORSENIGAMA 2023
          </p>
        </div>
        <div className="mt-16 flex flex-1 justify-center">
          <Image
            alt="banner"
            className=""
            src={
              screenWidth >= 768
                ? '/assets/klasemen/ornamen_desktop.png'
                : '/assets/klasemen/ornamen_mobile.png'
            }
            width={1000}
            height={1000}
            data-aos="fade-up"
            data-aos-duration="1000"
          />
        </div>
      </div>
    </div>
  )
}

export default ContentKlasemen
