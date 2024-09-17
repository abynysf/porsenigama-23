"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from 'react';
import Aos from "aos";

export function Card({}) {

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

  
  const isDeviceGreaterThanMd = windowWidth >= md_width;

  const bgCard = isDeviceGreaterThanMd
      ? '/assets/cabang/detail/card_jadwal.png'
      : '/assets/cabang/detail/card_jadwal_mobile.png';

  const backgroundStyle = {
    backgroundImage: `url('${basePath}/assets/cabang/olahraga/bg_caborTxt.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  useEffect(() => {
    Aos.init()
    }, [])
  return (
    <div className="flex flex-col items-center justify-center mx-4 md:mx-8 lg:mx-16 py-16">
        <Image
            src={bgCard}
            width={0}
            height={0}
            className="flex w-full h-auto text-white"
            data-aos="zoom-in"
            data-aos-duration="1000"/>
        <p
         className="text-center justify-center absolute font-bold font-rockwell text-6xl text-red-500"
         >
            COMING SOON
        </p>
    </div>
  );
}

export default Card