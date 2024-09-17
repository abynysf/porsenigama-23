"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect } from 'react';
import Aos from "aos";

export function Card({ title, href, image, delay, alt }) {

  const basePath = `${process.env.NEXT_PUBLIC_BASE_PATH}`

  const backgroundStyle = {
    backgroundImage: `url('${basePath}/assets/cabang/olahraga/bg_caborTxt.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  useEffect(() => {
    Aos.init()
    }, [])
  return (
    <Link
    href={href}
    className={`flex flex-col items-center justify-center gap-[10px] px-[16px] pt-[30px] font-medium lg:gap-[16px] lg:px-[20px] transition duration-500 ease-in-out transform hover:scale-110`}
    >
    <Image
    src={image}
    alt={alt}
    width={148}
    height={235}
    className="flex h-[156px] w-[98px] lg:h-[235px] lg:w-[148px] text-white"
    data-aos="zoom-in"
    data-aos-duration="1000"
    data-aos-delay={delay}
    />
    <div 
    className="flex flex-wrap flex-col justify-center w-[120px] h-[38px] lg:w-[148px] lg:h-[52px] px-6"
    style={backgroundStyle}>
      <h1
          className={`text-center font-rockwell text-[12px] text-red-500 font-medium lg:text-[16px]`}>
          {title}
      </h1>
    </div>
    </Link>
  );
}

export default Card