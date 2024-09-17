'use client'
import 'aos/dist/aos.css'

import AOS from 'aos'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export function NotFound() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH
  const [src, setSrc] = useState('/assets/404/button.svg')
  const handleClick = () => {
    setSrc('/assets/404/button1.svg')
  }
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      <div
        className="flex h-screen items-center justify-center overflow-hidden bg-[#BF8B63]"
        style={{
          backgroundImage: `url("${basePath}/assets/404/texture.png")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div>
          <Image
            width={103}
            height={160}
            src={'/assets/404/awanKiriAtas.png'}
            className="absolute left-0 top-0 w-1/3 sm:w-1/4"
          />
          <Image
            width={103}
            height={160}
            src={'/assets/404/awanKananAtas.png'}
            className="absolute right-0 top-0 w-1/3 sm:w-1/4"
          />
          <Image
            width={103}
            height={160}
            src={'/assets/404/awanKiriBawah.png'}
            className="absolute bottom-0 left-0 w-1/3 sm:w-1/4"
          />
          <Image
            width={103}
            height={160}
            src={'/assets/404/awanKananBawah.png'}
            className="absolute bottom-0 right-0 w-1/3 sm:w-1/4"
          />
        </div>
        <div className="absolute flex h-screen items-center justify-center p-[10%] sm:p-[25%] lg:hidden ">
          <div>
            <Image
              width={4000}
              height={4000}
              src={'/assets/404/mobile/porchi.png'}
              className="animate-break-left-right-1"
            />
            <Image width={4000} height={4000} src={'/assets/404/mobile/typo.svg'} />
            <Link href={'/'}>
              <div className="mt-6" onClick={handleClick}>
                <Image width={4000} height={4000} src={src} />
              </div>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 p-[25%] max-lg:hidden">
          <div className="animate-spin-left-right ">
            <Image
              width={4000}
              height={4000}
              src={'/assets/404/desktop/porchi.png'}
              className="mt-[25%] scale-[130%] "
            />
          </div>
          <div>
            <div className="flex justify-center">
              <Image
                width={4000}
                height={4000}
                src={'/assets/404/desktop/tandaTanya.svg'}
                className="mb-5 max-w-[40%] animate-break-left-right-2 "
              />
            </div>
            <div className="">
              <Image width={4000} height={4000} src={'/assets/404/desktop/typo.svg'} />
            </div>
            <Link href={'/'}>
              <div className="mt-6" onClick={handleClick}>
                <Image width={4000} height={4000} src={src} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default NotFound
