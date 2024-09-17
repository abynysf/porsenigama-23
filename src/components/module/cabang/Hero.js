'use client'
import Image from 'next/image'
import 'aos/dist/aos.css'
import React, { useEffect, useState } from 'react'
import AOS from 'aos'

export function Hero() {
  const basePath = `${process.env.NEXT_PUBLIC_BASE_PATH}`

  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const md_width = 768
  const lg_width = 1024

  const isDeviceGreaterThanLg = windowWidth >= lg_width
  const isDeviceGreaterThanMd = windowWidth >= md_width

  const yellowLeftCloudPath = '/assets/cabang/detail/hero/yellowCloud_lt.png'
  const redLeftCloudPath = '/assets/cabang/detail/hero/redCloud_lt.png'
  const yellowRightCloudPath = '/assets/cabang/detail/hero/yellowCloud_rt.png'
  const redtRightCloudPath = '/assets/cabang/detail/hero/redCloud_rt.png'

  const leftCloudPath = isDeviceGreaterThanLg
    ? redLeftCloudPath
    : '/assets/cabang/hero/awan_kiri_mobile.png'

  const rightCloudPath = isDeviceGreaterThanLg
    ? redtRightCloudPath
    : '/assets/cabang/hero/awan_kanan_mobile.png'

  const banner = isDeviceGreaterThanMd
    ? '/assets/cabang/hero/bg_titel.png'
    : '/assets/cabang/hero/bg_titel_mobile.png'

  const backgroundStyle = {
    backgroundImage: `url('${basePath}/assets/cabang/hero/bg_hero.png')`,
    backgroundSize: 'cover',
  }

  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div className="relative overflow-hidden">
      {/* <Image
             src={leftCloudPath}
             className='flex absolute top-0 left-0 h-40 md:h-60 lg:h-40 2xl:h-72 w-auto'
             width={0}
             height={0}
             data-aos="fade-down"
             data-aos-duration="1000"/>

            <Image
             src={rightCloudPath}
             className='flex absolute top-0 right-0 h-40 md:h-60 lg:h-40 2xl:h-72 w-auto'
             width={0}
             height={0}
             data-aos="fade-down"
             data-aos-duration="1000"/> */}

            <Image
             src={yellowLeftCloudPath}
             className='absolute top-0 left-0 h-auto w-[130px] md:w-[200px] lg:w-[302px]'
             width={0}
             height={0}
             data-aos="fade-right"
             data-aos-duration="1500"
             data-aos-delay={2500}/>
            <Image
             src={leftCloudPath}
             className='absolute top-0 left-0 w-auto h-[150px] md:w-[96px] lg:w-[130px]'
             width={0}
             height={0}
             data-aos="fade-down-right"
             data-aos-duration="1000"/>

      <Image
        src={yellowRightCloudPath}
        className="absolute right-0 top-0 h-auto w-[100px] md:w-[181px] lg:w-[302px]"
        width={0}
        height={0}
        data-aos="fade-left"
        data-aos-duration="1500"
        data-aos-delay={2500}
      />
      <Image
        src={rightCloudPath}
        className="absolute right-0 top-0 h-[124px] w-auto md:w-[96px] lg:w-[130px]"
        width={0}
        height={0}
        data-aos="fade-down-left"
        data-aos-duration="1000"
      />

            <Image
             src={yellowRightCloudPath}
             className='absolute top-0 right-0 h-auto w-[130px] md:w-[200px] lg:w-[302px]'
             width={0}
             height={0}
             data-aos="fade-left"
             data-aos-duration="1500"
             data-aos-delay={2500}/>
            <Image
             src={rightCloudPath}
             className='absolute top-0 right-0 w-auto h-[150px] md:w-[96px] lg:w-[130px]'
             width={0}
             height={0}
             data-aos="fade-down-left"
             data-aos-duration="1000"/>

        <main
        className="min-h-screen flex justify-center items-center lg:items-start lg:justify-end p-8 md:p-24 md:bg-left-bottom bg-[25%]" 
        style={backgroundStyle}>
            <div
             className='flex justify-center items-center mb-12'
             data-aos="fade-up"
             data-aos-duration="1000"
             data-aos-anchor-placement="top-bottom"
             data-aos-delay={1000}>
                <Image
                src={banner}
                width={0}
                height={0}
                alt='banner'
                className='w-auto h-[250px] lg:h-[250px]'/>
                <div className='absolute text-center pb-12 text-red-500'>
                    <h1
                     className='font-masterofbreak text-2xl md:text-3xl font-semibold'
                     data-aos="zoom-out-down"
                     data-aos-duration="1000"
                     data-aos-anchor-placement="top-bottom"
                     data-aos-delay={1500}>Cabang</h1>
                    <p
                     className='font-rockwell text-3xl md:text-4xl font-bold'
                     data-aos="zoom-out-down"
                     data-aos-duration="1000"
                     data-aos-anchor-placement="top-bottom"
                     data-aos-delay={2000}>PERTANDINGAN</p>
                </div>
            </div>
        </main>
    </div>
  )
}

export default Hero
