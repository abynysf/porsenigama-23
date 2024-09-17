'use client'
import Image from 'next/image'
import 'aos/dist/aos.css'
import React, { useEffect, useState } from 'react';
import AOS from 'aos';

export function Hero({path,nama,desc,alt}) {

    const basePath = `${process.env.NEXT_PUBLIC_BASE_PATH}`

    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const md_width = 768;
    const lg_width = 1024;

    const isDeviceGreaterThanLg = windowWidth >= lg_width;
    const isDeviceGreaterThanMd = windowWidth >= md_width;

    const banner = isDeviceGreaterThanLg
        ? '/assets/cabang/detail/hero/bg_titel.png'
        : '/assets/cabang/detail/hero/bg_titel_mobile.png';

    const backgroundStyle = {
        backgroundImage:`url('${basePath}/assets/cabang/detail/hero/bg_hero.png')`,
        backgroundSize: 'cover',   
  };
      
    useEffect(() => {
    AOS.init()
    }, [])
  return (
    <div
     className='relative select-none overflow-hidden flex flex-wrap justify-center items-center overflow-x-hidden' 
     style={backgroundStyle}>

            <Image
             src={'/assets/cabang/detail/hero/yellowCloud_lt.png'}
             className='absolute top-0 left-0 h-auto w-[180px] md:w-[220px] lg:w-[302px]'
             width={0}
             height={0}
             data-aos="fade-right"
             data-aos-duration="1500"
             data-aos-delay={1500}/>
            <Image
             src={'/assets/cabang/detail/hero/redCloud_lt.png'}
             className='absolute top-0 left-0 h-auto w-[72px] md:w-[150px] lg:w-[130px]'
             width={0}
             height={0}
             data-aos="fade-down-right"
             data-aos-duration="1000"/>


            <Image
             src={'/assets/cabang/detail/hero/yellowCloud_rt.png'}
             className='absolute top-0 right-0 h-auto w-[180px] md:w-[220px] lg:w-[302px]'
             width={0}
             height={0}
             data-aos="fade-left"
             data-aos-duration="1500"
             data-aos-delay={1500}/>
            <Image
             src={'/assets/cabang/detail/hero/redCloud_rt.png'}
             className='absolute top-0 right-0 h-auto w-[72px] md:w-[150px] lg:w-[130px]'
             width={0}
             height={0}
             data-aos="fade-down-left"
             data-aos-duration="1000"/>


        <main
         className="min-h-screen flex flex-wrap flex-col lg:flex-row items-center justify-center lg:p-24 md:mt-8 bg-top">
            
            <div
             className='flex lg:flex-row justify-center items-center p-4'
             data-aos="fade-down"
             data-aos-duration="1000"
             data-aos-delay={1000}>
                <Image
                src={banner}
                width={0}
                height={0}
                alt='banner'
                className='h-auto w-full lg:w-[714px]'/>
                <div className='w-[310px] lg:w-[395px] absolute text-center text-red-500 p-2 mb-2'>
                    <h1 className='font-rockwell text-3xl lg:text-4xl font-bold'>{nama}</h1>
                    <p className='text-[10px] lg:text-xs font-semibold'>{desc}</p>
                </div>
            </div>

            <Image
            src={path}
             width={0}
             height={0}
             alt={alt}
             className='h-[264px] lg:h-[394px] w-auto'
             data-aos="zoom-in"
             data-aos-duration="3000"
             data-aos-delay={1500}/>

        </main>
    </div>
  )
}

export default Hero
