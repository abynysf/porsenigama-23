'use client'
import Image from 'next/image'
import 'aos/dist/aos.css'
import React, { useEffect } from 'react';
import AOS from 'aos';

export function Calendar() {

    const basePath = `${process.env.NEXT_PUBLIC_BASE_PATH}`

    const backgroundStyle = {
        backgroundImage:`url('${basePath}/assets/cabang/detail/calendar/bg_texture.png')`,
        backgroundSize: 'cover',   
    };

    useEffect(() => {
    AOS.init()
    }, [])
  return (
    <main
     className='flex justify-center items-center min-h-[332px] lg:min-h-[481px] bg-blue_calendar-500'
     style={backgroundStyle}>
        <div className='flex flex-col justify-center items-center py-9 text-center w-[50vw]'>
            <p
             className="text-2xl lg:text-4xl font-normal font-masterofbreak"
             data-aos="fade-right"
             data-aos-duration="1000">Jadwal Pertandingan</p>
            <p
             className=" text-4xl lg:text-5xl font-bold font-rockwell"
             data-aos="fade-left"
             data-aos-duration="1000">PORSENIGAMA</p>
        </div>
    </main>
  )
}

export default Calendar
