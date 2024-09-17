import Image from 'next/image'
import { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export function Jadwal(props) {
  const md_width = 769

  const [windowWidth, setWindowWidth] = useState()

  useEffect(() => {
    setWindowWidth(window.innerWidth)
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
    })
  }, [])

  const isDeviceGreaterThanMd = windowWidth >= md_width
  const isMobile = !isDeviceGreaterThanMd

  const backgroundStylePath = isDeviceGreaterThanMd
    ? `${process.env.NEXT_PUBLIC_BASE_PATH}/assets/jadwal/BgJadwalDesktop.png`
    : `${process.env.NEXT_PUBLIC_BASE_PATH}/assets/jadwal/BgJadwalMobile.png`

  const backgroundTimPath = isDeviceGreaterThanMd
    ? `${process.env.NEXT_PUBLIC_BASE_PATH}/assets/jadwal/TimDesktop.png`
    : `${process.env.NEXT_PUBLIC_BASE_PATH}/assets/jadwal/TimMobile.png`

  const backgroundDetailPath = isDeviceGreaterThanMd
    ? `${process.env.NEXT_PUBLIC_BASE_PATH}/assets/jadwal/DetailJadwalDesktop.png`
    : `${process.env.NEXT_PUBLIC_BASE_PATH}/assets/jadwal/DetailJadwalMobile.png`

  const backgroundCaborPath = isDeviceGreaterThanMd
    ? `${process.env.NEXT_PUBLIC_BASE_PATH}/assets/jadwal/ContainerCaborDesktop.png`
    : `${process.env.NEXT_PUBLIC_BASE_PATH}/assets/jadwal/ContainerCaborMobile.png`

  const backgroundStyle = {
    backgroundImage: `url(${backgroundStylePath})`,
    backgroundSize: 'cover',
  }

  const backgroundTim = {
    backgroundImage: `url(${backgroundTimPath})`,
  }

  const backgroundDetail = {
    backgroundImage: `url(${backgroundDetailPath})`,
  }

  const backgroundCabor = {
    backgroundImage: `url(${backgroundCaborPath})`,
  }

  return (
    <div>
      {isDeviceGreaterThanMd ? (
        <div data-aos="zoom-in">
          <div
            className="relative top-[45px] z-50 mx-auto flex h-[68px] w-[355px] flex-row flex-wrap items-center justify-center text-center"
            style={backgroundCabor}
          >
            <p className="mr-1 text-center font-rockwell text-2xl font-bold text-white">
              {props.cabor} {props.kategori}
            </p>
          </div>

          <div className="z-30 h-[298px] w-[1127px] overflow-hidden" style={backgroundStyle}>
            <div className="flex w-full justify-between px-16 py-8">
              <div
                data-aos="flip-left"
                data-aos-delay="100"
                className="flex h-[114px] w-[281px] items-center justify-center"
                style={backgroundTim}
              >
                <p className="font-rockwell text-[32px] font-bold text-red-500">{props.team1}</p>
              </div>
              <div
                data-aos="flip-left"
                data-aos-delay="100"
                className="flex h-[114px] w-[281px] items-center justify-center"
                style={backgroundTim}
              >
                <p className="font-rockwell text-[32px] font-bold text-red-500">{props.team2}</p>
              </div>
            </div>
            <div
              className="mx-auto flex h-[80px] w-[736px] items-center justify-center "
              data-aos="flip-left"
              data-aos-delay="100"
              style={backgroundDetail}
            >
              <div className="flex w-full items-center justify-around px-[48px] py-[20px]">
                <p className="font-rockwell text-2xl font-bold text-red-500">{props.date}</p>
                <p className="font-rockwell text-[32px] font-bold text-red-500">{props.time}</p>
                <a
                  className=" font-rockwell text-2xl font-bold text-red-500 underline"
                  target="_blank"
                  href={props.linktempat}
                >
                  {props.location}
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div data-aos="zoom-in">
          <div
            className="relative top-[30px] mx-auto flex h-[62px] w-[258px] flex-wrap items-center justify-center"
            style={backgroundCabor}
          >
            <p className="mr-1 text-center font-rockwell text-xl font-bold text-white">
              {props.cabor} {props.kategori}
            </p>
          </div>
          <div className="flex h-[503px] w-[298px] flex-col items-center " style={backgroundStyle}>
            <div
              data-aos="flip-left"
              data-aos-delay="100"
              className="relative top-[44px] flex h-[65px] w-[218px] items-center justify-center"
              style={backgroundTim}
            >
              <p className="font-rockwell text-2xl font-bold text-red-500">{props.team1}</p>
            </div>

            <div
              data-aos="flip-left"
              data-aos-delay="100"
              className="relative top-[145px] flex h-[65px] w-[218px] items-center justify-center"
              style={backgroundTim}
            >
              <p className="font-rockwell text-2xl font-bold text-red-500">{props.team2}</p>
            </div>
            <div
              data-aos="flip-left"
              data-aos-delay="100"
              className="space-between relative top-[169px] mx-auto  h-[167px] w-[215px] items-center"
              style={backgroundDetail}
            >
              <div className="flex w-full  flex-col items-center justify-evenly  p-[40px]">
                <p className="font-rockwell text-base font-bold text-red-500">{props.date}</p>
                <p className="font-rockwell text-2xl font-bold text-red-500">{props.time}</p>
                <a
                  href={props.linktempat}
                  target="_blank"
                  className="text-center font-rockwell text-base font-bold text-red-500 underline"
                >
                  {props.location}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Jadwal
