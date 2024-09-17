'use client'
import 'aos/dist/aos.css'
import React, { useEffect } from 'react'
import AOS from 'aos'

export default function Landing() {
  const backgroundStyle = {
    backgroundImage: `url('/2023/porsenigama/assets/landing/background_landing.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
  }
  const btnNormal = '#911002'
  const btnHover = '#A80720'
  const text = '#762B00'

  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <main className="absolute min-h-screen w-full overflow-hidden">
      <div class="absolute flex h-screen w-full flex-row justify-between">
        <div class="flex flex-col justify-between">
          <img
            alt=" "
            data-aos="fade-down-right"
            data-aos-duration="1000"
            class="h-[150px] w-auto lg:h-[250px]"
            src="/2023/porsenigama/assets/landing/Kiri atas.png"
          />
          <img
            alt=" "
            data-aos="fade-up-right"
            data-aos-duration="1000"
            class="h-[150px] w-auto lg:h-[250px]"
            src="/2023/porsenigama/assets/landing/Kiri Bawah.png"
          />
        </div>

        <div class="flex flex-col justify-between">
          <img
            alt=" "
            data-aos="fade-down-left"
            data-aos-duration="1000"
            class="h-[150px] w-auto lg:h-[250px]"
            src="/2023/porsenigama/assets/landing/Kanan Atas.png"
          />
          <img
            alt=" "
            data-aos="fade-up-left"
            data-aos-duration="1000"
            class="h-[150px] w-auto lg:h-[250px]"
            src="/2023/porsenigama/assets/landing/kanan bawah asset.png"
          />
        </div>
      </div>

      <div className="flex min-h-screen w-full items-center justify-center" style={backgroundStyle}>
        <div data-aos="zoom-in" data-aos-duration="1000">
          <div className="absolute my-40 ms-[400px] hidden w-[440px] items-center justify-center text-center lg:flex lg:flex-col lg:flex-wrap">
            <p className="text-brown font-rockwell text-3xl font-bold text-red-500">
              DAFTARKAN ATLET DAN SENIMAN TERBAIKMU
            </p>
            <a href="https://ukm.ugm.ac.id/2023/porsenigama/registrasi/">
              <button className="btn-cust mt-5 flex h-14 w-60 items-center justify-center font-rockwell text-base font-bold text-red-500 hover:text-sm">
                DAFTAR SEKARANG!
              </button>
            </a>
          </div>
          <img
            alt=" "
            className="hidden h-[450px] lg:flex"
            src={'/2023/porsenigama/assets/landing/Frame Desktop.png'}
          />
        </div>

        <div
          className="flex items-center justify-center"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <div className="absolute mt-52 w-48 text-center lg:hidden">
            <p className="font-rockwell font-bold text-red-500">
              DAFTARKAN ATLET DAN SENIMAN TERBAIKMU
            </p>
            <a href="https://ukm.ugm.ac.id/2023/porsenigama/registrasi/">
              <button className="btn-cust mt-4 h-7 w-36 font-rockwell text-xs font-semibold text-red-500 hover:text-[10px]">
                DAFTAR SEKARANG
              </button>
            </a>
          </div>
          <img
            alt=" "
            className="-mt-10 h-[450px] lg:hidden"
            src={'/2023/porsenigama/assets/landing/Frame mobile.png'}
          />
        </div>
      </div>
    </main>
  )
}
