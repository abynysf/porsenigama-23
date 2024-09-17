'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import 'aos/dist/aos.css'
import AOS from 'aos'
import { motion } from 'framer-motion'

export function Hero() {
  const [windowWidth, setWindowWidth] = useState()
  const [isDeviceGreaterThanLg, setIsDeviceGreaterThanLg] = useState()
  const [isDeviceGreaterThanMd, setIsDeviceGreaterThanMd] = useState()
  const [isMobile, setIsMobile] = useState()
  const [backgroundImage, setBackgroundImage] = useState('')

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth
      setWindowWidth(windowWidth)

      const md_width = 768
      const lg_width = 1024

      if (windowWidth >= md_width) {
        setBackgroundImage(`${process.env.NEXT_PUBLIC_BASE_PATH}/assets/jadwal/Background.png`)
      } else {
        setBackgroundImage(
          `${process.env.NEXT_PUBLIC_BASE_PATH}/assets/jadwal/BackgroundMobile.png`,
        )
      }

      const isDeviceGreaterThanLg = windowWidth >= lg_width
      const isDeviceGreaterThanMd = windowWidth >= md_width
      const isMobile = windowWidth < md_width

      setIsDeviceGreaterThanLg(isDeviceGreaterThanLg)
      setIsDeviceGreaterThanMd(isDeviceGreaterThanMd)
      setIsMobile(isMobile)
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    AOS.init({
      delay: 500,
    })
  }, [])

  return (
    <div>
      <div className="absolute z-30 overflow-hidden">
        <Image
          alt="Awan Kiri Merah"
          className="left-0 top-0 h-16 w-full md:h-24 lg:h-32"
          src={
            isDeviceGreaterThanLg
              ? '/assets/jadwal/KiriMerah.png'
              : '/assets/jadwal/KiriMerahMobile.png'
          }
          data-aos="fade-down-right"
          data-aos-duration="1000"
          width={1000}
          height={1000}
        />
      </div>
      <div className="absolute z-20 overflow-hidden">
        <Image
          alt="Awan Kiri Coklat"
          className="left-0 top-0 h-full w-10 md:w-16 lg:w-20"
          src={
            isDeviceGreaterThanLg
              ? '/assets/jadwal/KiriCoklat.png'
              : '/assets/jadwal/KiriCoklatMobile.png'
          }
          width={1000}
          height={1000}
          data-aos="fade-right"
          data-aos-duration="1000"
        />
      </div>

      <div className=" absolute right-0 top-0 z-30 overflow-hidden">
        <Image
          alt="Awan Kanan Merah"
          className=" h-16 w-full md:h-24 lg:h-32 "
          src={
            isDeviceGreaterThanLg
              ? '/assets/jadwal/KananMerah.png'
              : '/assets/jadwal/KananMerahMobile.png'
          }
          data-aos="fade-down-left"
          data-aos-duration="1000"
          width={1000}
          height={1000}
        />
      </div>
      <div className="absolute right-0 top-0 z-20 overflow-hidden">
        <Image
          alt="Awan Kanan Coklat"
          className="h-full w-10 md:w-16 lg:w-20"
          src={
            isDeviceGreaterThanLg
              ? '/assets/jadwal/KananCoklat.png'
              : '/assets/jadwal/KananCoklatMobile.png'
          }
          width={1000}
          height={1000}
          data-aos="fade-left"
          data-aos-duration="1000"
        />
      </div>
      <div
        className="h-screen w-full overflow-hidden"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'bottom left',
        }}
      >
        <Image
          alt="banner"
          className=" absolute top-[5%] h-[30%] object-contain lg:left-[-2%] lg:top-[7%] lg:h-[40%]"
          src="/assets/jadwal/Banner.png"
          width={1000}
          height={1000}
          data-aos="fade-up"
          data-aos-duration="1000"
        />
        <Image
          alt="pohon kiri"
          src="/assets/jadwal/Pohon Kiri.png"
          data-aos="zoom-in"
          data-aos-duration="1000"
          width={1000}
          height={1000}
          className=" absolute left-0 top-[52%] h-[220px] w-auto md:top-[57%] md:h-[235px] lg:left-[1%] lg:top-[53%] lg:h-[250px] 2xl:top-[60%]"
        />

        {isDeviceGreaterThanLg && (
          <Image
            alt="pohon kanan"
            src="/assets/jadwal/Pohon Kanan.png"
            data-aos="zoom-in"
            data-aos-duration="1000"
            width={1000}
            height={1000}
            className="absolute h-[150px] w-auto lg:right-[1%] lg:top-[53%] lg:h-[250px] 2xl:top-[60%]"
          />
        )}

        {isDeviceGreaterThanLg && (
          <Image
            alt="Kuda Desktop"
            src="/assets/jadwal/KudaDesktop.png"
            data-aos="fade-left"
            data-aos-duration="1000"
            width={1000}
            height={1000}
            className="absolute bottom-0 left-[10%] h-[600px] w-auto 2xl:h-[800px]"
          />
        )}

        {isDeviceGreaterThanMd && !isDeviceGreaterThanLg && (
          <Image
            alt="Kuda Tablet"
            src="/assets/jadwal/KudaMobile.png"
            data-aos="fade-left"
            data-aos-duration="1000"
            width={1000}
            height={1000}
            className="absolute bottom-0 right-0 h-[600px] w-auto"
          />
        )}

        <div className="w-screen overflow-hidden">
          {isMobile && !isDeviceGreaterThanMd && (
            <Image
              alt="Kuda Mobile"
              src="/assets/jadwal/KudaMobile.png"
              data-aos="fade-left"
              data-aos-duration="1000"
              width={1000}
              height={1000}
              className="absolute bottom-0 left-0 h-[450px] w-auto"
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Hero
