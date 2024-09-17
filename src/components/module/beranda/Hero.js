'use client'
import Image from 'next/image'
import Link from 'next/link'
import { gsap, Expo } from 'gsap'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { easeOut } from 'framer-motion'
import Porchi from './Porchi'

const getPosts = async () => {
  const headers = {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTH}`,
  }

  const response = await fetch('https://ppsmb.ugm.ac.id/2022/strapi/api/psgklasemens', {
    headers,
  })
  const data = await response.json()
  return data.data // Access the "data" property of the response
}
const getSchedule = async () => {
  const headers = {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTH}`,
  }

  const response = await fetch('https://ppsmb.ugm.ac.id/2022/strapi/api/psgjadwals', {
    headers,
  })
  const data = await response.json()
  return data.data // Access the "data" property of the response
}

export function Hero() {
  const tl = gsap.timeline()
  const tlCloud = gsap.timeline()
  const bunderanLogo = useRef()
  const container = useRef()
  const awanmerahkiri = useRef()
  const awanijokiri = useRef()
  const awanmerahkanan = useRef()
  const awanijokanan = useRef()
  const awanijobawah = useRef()
  const awanmerahbawah = useRef()
  const awankananmerahbawah = useRef()
  const awankananijobawah = useRef()
  const awanmerahbawahMain = useRef()
  const awankananmerahbawahMain = useRef()

  const parentLogo = useRef()
  const logoTitle = useRef()
  const logoTheme = useRef()
  const parentCircle = useRef()
  const logoTali = useRef()
  const Porchi = useRef()

  const [posts, setPosts] = useState([])
  const [schedule, setSchedule] = useState([])
  useLayoutEffect(() => {
    const isMobile = window.innerWidth
    const ctx = gsap.context((self) => {
      const logo = self.selector('.logo')
      const ctaAbout = self.selector('.cta-about')
      const tabelHero = self.selector('.tabel-hero')

      const tl = gsap.timeline()
      tl.to(parentLogo.current, { scale: 1.15, duration: 1.5, ease: Expo.easeOut })
        .to(logoTitle.current, { yPercent: -10, duration: 1, ease: Expo.easeOut }, '-=1')
        .to(logoTheme.current, { yPercent: 15, duration: 1, ease: Expo.easeOut }, '-=1')
        .to(parentCircle.current, { rotate: -0, duration: 2, ease: Expo.easeOut })
        // awan kiri atas
        .fromTo(
          awanmerahkiri.current,
          { opacity: 0, duration: 1 },
          { opacity: 1, delay: isMobile < 768 ? 2.5 : 5 },
          isMobile < 768 ? '-=4.45' : '-=6.9',
        )
        .fromTo(
          awanijokiri.current,
          { opacity: 0, duration: 1 },
          { opacity: 1, delay: isMobile < 768 ? 2.7 : 5.2 },
          isMobile < 768 ? '-=4.45' : '-=6.9',
        )
        // awan kanan atas
        .fromTo(
          awanmerahkanan.current,
          { opacity: 0, duration: 1 },
          { opacity: 1, delay: isMobile < 768 ? 2.5 : 5.1 },
          isMobile < 768 ? '-=4.45' : '-=6.9',
        )
        .fromTo(
          awanijokanan.current,
          { opacity: 0, duration: 1 },
          { opacity: 1, delay: isMobile < 768 ? 2.7 : 5.3 },
          isMobile < 768 ? '-=4.45' : '-=6.9',
        )

        // awan kiri bawah
        .fromTo(
          awanmerahbawahMain.current,
          { opacity: 0, duration: 5 },
          { opacity: 1, delay: isMobile < 768 ? 2.5 : 5 },
          isMobile < 768 ? '-=4.45' : '-=6.9',
        )
        .fromTo(
          awanmerahbawah.current,
          { opacity: 0, duration: 5 },
          { opacity: 1, delay: isMobile < 768 ? 2.7 : 5.2 },
          isMobile < 768 ? '-=4.45' : '-=6.9',
        )
        .fromTo(
          awanijobawah.current,
          { opacity: 0, duration: 1 },
          { opacity: 1, delay: isMobile < 768 ? 2.6 : 5.1 },
          isMobile < 768 ? '-=4.45' : '-=6.9',
        )

        // awan kanan bawah
        .fromTo(
          awankananmerahbawahMain.current,
          { opacity: 0, duration: 1 },
          { opacity: 1, delay: isMobile < 768 ? 2.5 : 5 },
          isMobile < 768 ? '-=4.45' : '-=6.9',
        )
        .fromTo(
          awankananmerahbawah.current,
          { opacity: 0, duration: 1 },
          { opacity: 1, delay: isMobile < 768 ? 2.7 : 5.2 },
          isMobile < 768 ? '-=4.45' : '-=6.9',
        )
        .fromTo(
          awankananijobawah.current,
          { opacity: 0, duration: 1 },
          { opacity: 1, delay: isMobile < 768 ? 2.6 : 5.1 },
          isMobile < 768 ? '-=4.45' : '-=6.9',
        )
        .to(parentCircle.current, { rotate: 180, duration: 2, ease: Expo.easeOut }, '-=.7')
        .fromTo(
          tabelHero,
          { xPercent: -100, duration: 2, ease: Expo.easeOut },
          { xPercent: 0, duration: 2, opacity: 1, ease: Expo.easeOut },
          '-=2',
        )
        .fromTo(
          Porchi.current,
          { xPercent: 100, duration: 2, ease: Expo.easeOut },
          { xPercent: 0, duration: 2, opacity: 1, ease: Expo.easeOut },
          '-=2',
        )

        .to(logoTitle.current, { yPercent: 0, duration: 1, ease: Expo.easeOut })
        .to(logoTheme.current, { yPercent: 0, duration: 1, ease: Expo.easeOut }, '-=1')
        .to(parentLogo.current, { scale: 1, duration: 1.5, ease: Expo.easeOut }, '-=1')
        .to(ctaAbout, { opacity: 1, yPercent: isMobile < 768 ? 40 : 140, duration: 1 })
        .to(bunderanLogo.current, { rotate: 360, duration: 130, repeat: -1, ease: 'none' })
    }, container)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    getPosts().then((data) => {
      setPosts(data)
    })
  })

  useEffect(() => {
    getSchedule().then((data) => {
      setSchedule(data)
    })
  })

  function convertDate(tanggal) {
    const dateObj = new Date(tanggal)

    const day = dateObj.getUTCDate()
    const month = dateObj.getUTCMonth()
    const year = dateObj.getUTCFullYear()

    const daftarBulan = [
      'Januari',
      'Februari',
      'Maret',
      'April',
      'Mei',
      'Juni',
      'Juli',
      'Agustus',
      'September',
      'Oktober',
      'November',
      'Desember',
    ]

    if (month >= 0 && month <= 11) {
      return `${day} ${daftarBulan[month]} ${year}`
    }
  }

  const rearrangedData = posts
    .map((item) => {
      // Set the attributes to 0 if they are null
      const gold = item.attributes.gold || 0
      const silver = item.attributes.silver || 0
      const bronze = item.attributes.bronze || 0
      const fakultas = item.attributes.fakultas

      const totalPoints = gold * 100 + silver * 50 + bronze * 25
      return { ...item, attributes: { gold, silver, bronze, fakultas }, totalPoints }
    })
    .sort((a, b) => b.totalPoints - a.totalPoints)
    .slice(0, 5)

  return (
    <section ref={container}>
      <div className="relative h-[368vw] overflow-hidden md:h-screen">
        <div className=" h-[100%] overflow-hidden bg-[url('/2023/porsenigama/assets/beranda/hero/mobile/bg-hero-mobile.jpg')] bg-cover bg-center bg-no-repeat sm:bg-top md:flex md:items-center md:justify-center md:bg-[url('/2023/porsenigama/assets/beranda/hero/hero-bg.png')] md:bg-right-bottom xl:pb-[0]">
          <div className="relative mt-14 flex h-[85%] flex-col gap-y-[75vw] sm:h-[95%] sm:gap-y-[80vw] md:mx-auto md:h-[80vh] md:w-[900px] md:flex-row md:justify-between lg:w-[1000px] xl:w-[1100px] 2xl:w-[70vw]">
            <div className=" w-full flex-grow pt-[30vw] sm:pt-[10vw] md:order-2 md:w-[55%] md:pt-[40px] 2xl:mt-[-1vw] 2xl:w-[55%] 2xl:min-w-[650px]">
              <div className="relative mx-auto w-[80%] scale-0" ref={parentLogo}>
                <Image
                  src="/assets/beranda/hero/logo/logo-title.png"
                  width={1000}
                  height={1000}
                  className="absolute top-[-20px] z-30 w-full scale-x-110 scale-y-125"
                  alt=""
                  ref={logoTitle}
                />
                <div ref={parentCircle} className="rotate-180">
                  <Image
                    src="/assets/beranda/hero/logo/logo-tali.png"
                    width={1000}
                    height={1000}
                    className="relative z-[1] mx-auto w-[80%]"
                    alt=""
                    ref={logoTali}
                  />
                  <Image
                    src="/assets/beranda/hero/logo/logo-bunderan.png"
                    width={1000}
                    height={1000}
                    className="absolute -top-2 left-[50%] z-20 mx-auto w-[79.5%] translate-x-[-50%]"
                    ref={bunderanLogo}
                    alt=""
                  />
                </div>
                <Image
                  src="/assets/beranda/hero/logo/logo-porseni.png"
                  width={1000}
                  height={1000}
                  className="absolute left-[50%] top-[50%] z-30 w-[65%] -translate-x-[50%] -translate-y-[40%]"
                  alt=""
                />
                <Image
                  src="/assets/beranda/hero/logo/logo-tema.png"
                  width={1000}
                  height={1000}
                  className="absolute bottom-[-45px] left-[50%] z-30 mx-auto w-[90%] translate-x-[-50%] scale-x-105 scale-y-110 lg:bottom-[-55px] xl:bottom-[-65px] 2xl:bottom-[-75px]"
                  alt=""
                  ref={logoTheme}
                />
              </div>

              {/* <Image
                src="/assets/beranda/hero/mobile/logo-hero-porsenigama.png"
                width={1000}
                height={1000}
                className="logo mx-auto h-auto w-[70%] scale-0 sm:w-[80%] md:w-[85%] xl:w-[70%]"
              ></Image> */}

              <div className="cta-about relative z-[205] mt-10 flex justify-center gap-x-3 opacity-0 md:mt-4">
                <Image
                  src="/assets/beranda/hero/hero-comp-cta.png"
                  width={40}
                  height={1000}
                  className="componentCtaR h-min self-center"
                ></Image>
                <Link href="#about">
                  <button className="custom-shadow relative z-[51] rounded-lg bg-[#911002] px-5 py-3 font-montserrat font-semibold text-white hover:scale-105 ">
                    Tonton Teaser
                  </button>
                </Link>
                <div className="scale-x-[-1] self-center">
                  <Image
                    src="/assets/beranda/hero/hero-comp-cta.png"
                    width={40}
                    height={1000}
                    className="componentCtaR  h-min self-center "
                  ></Image>
                </div>
              </div>
            </div>

            <div className="z-[201] h-full md:w-[48%] md:overflow-x-hidden xl:grow 2xl:w-[45%] ">
              <div className="tabel-hero tabel-hero flex h-full w-full flex-col gap-y-3 px-3 opacity-0 sm:mx-auto sm:h-[70%] sm:w-[90%] sm:gap-y-6 md:h-full md:w-full md:gap-y-2">
                <div className=" mx-auto flex h-auto min-w-full flex-1 flex-col justify-between gap-y-[3vw] rounded-xl border-4 border-white bg-seafoamgreen-500 px-4 py-3  text-white sm:w-[80%] sm:gap-y-6 md:h-fit md:max-h-[50%] md:px-4 md:py-3 2xl:gap-y-2">
                  <div className="flex items-center justify-center gap-x-1">
                    <Image
                      src="/assets/beranda/hero/hero-comp-title.svg"
                      width={0}
                      height={0}
                      className="h-3/4 w-min scale-x-[-1]"
                      alt=""
                    ></Image>
                    <p className="font-rockwell text-[6vw] font-semibold text-white md:text-xl">
                      TOP KLASEMEN
                    </p>
                    <Image
                      width={0}
                      height={0}
                      src="/assets/beranda/hero/hero-comp-title.svg"
                      className="h-3/4 w-min"
                      alt=""
                    ></Image>
                  </div>
                  <table className="sm:grow ">
                    <thead>
                      <tr>
                        <th className="w-[10%] font-rockwell text-sm font-normal sm:text-lg">
                          Rank
                        </th>
                        <th className="w-[30%] font-rockwell text-sm font-normal sm:text-lg">
                          Fakultas
                        </th>
                        <th className="w-[10%]">
                          <div className=" flex justify-center">
                            <Image
                              width={1000}
                              height={1000}
                              className="w-4 sm:w-6"
                              src={'/assets/klasemen/medals_gold.png'}
                            />
                          </div>
                        </th>
                        <th className="w-[10%] font-rockwell text-lg">
                          <div className=" flex justify-center">
                            <Image
                              width={1000}
                              height={1000}
                              className="w-4 sm:w-6"
                              src={'/assets/klasemen/medals_silver.png'}
                            />
                          </div>
                        </th>
                        <th className="w-[10%] font-rockwell text-lg">
                          <div className=" flex justify-center">
                            <Image
                              width={1000}
                              height={1000}
                              className="w-4 sm:w-6"
                              src={'/assets/klasemen/medals_bronze.png'}
                            />
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {rearrangedData.map((item, i) => (
                        <tr key={item.id}>
                          <td className=" text-center font-montserrat text-[3vw] font-normal sm:text-base md:text-xs 2xl:text-[1vw]">
                            {i + 1}
                          </td>
                          <td className=" font-montserrat  text-[3vw] font-normal sm:text-base md:text-xs xl:text-[1vw]  ">
                            {item.attributes.fakultas}
                          </td>
                          <td className=" text-center font-montserrat text-[3vw] sm:text-base md:text-xs xl:text-[15px] ">
                            {item.attributes.gold}
                          </td>
                          <td className=" text-center font-montserrat text-[3vw] sm:text-base md:text-xs xl:text-[15px] ">
                            {item.attributes.silver}
                          </td>
                          <td className=" text-center font-montserrat text-[3vw] sm:text-base md:text-xs xl:text-[15px] ">
                            {item.attributes.bronze}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="relative flex items-center justify-center gap-x-1">
                    <Image
                      src="/assets/beranda/hero/hero-component-selengkapnya.svg"
                      width={0}
                      height={0}
                      className="h-1/2 w-min scale-x-[-1]"
                    ></Image>
                    <Link
                      href="/klasemen"
                      className="font-rockwell text-[4vw] font-normal text-white md:text-sm"
                    >
                      Selengkapnya
                    </Link>
                    <Image
                      width={0}
                      height={0}
                      src="/assets/beranda/hero/hero-component-selengkapnya.svg"
                      className="h-1/2 w-min"
                    ></Image>
                  </div>
                </div>
                <div className=" mx-auto flex  h-auto min-w-full flex-1 flex-col justify-between gap-y-[3vw] rounded-xl border-4 border-white bg-seafoamgreen-500 px-4 py-3 text-white sm:w-[80%] sm:gap-y-6 md:h-fit md:max-h-[50%] md:px-4 md:py-3 2xl:gap-y-2">
                  <div className="flex items-center justify-center gap-x-1">
                    <Image
                      src="/assets/beranda/hero/hero-comp-title.svg"
                      width={0}
                      height={0}
                      className="h-3/4 w-min scale-x-[-1]"
                    ></Image>
                    <p className="font-rockwell text-[6vw] font-semibold text-white md:text-xl">
                      NEXT MATCH
                    </p>
                    <Image
                      width={0}
                      height={0}
                      src="/assets/beranda/hero/hero-comp-title.svg"
                      className="h-3/4 w-min"
                    ></Image>
                  </div>
                  <table className="ml-[2.2vw] text-center sm:w-[90%] sm:grow sm:self-center md:ml-0 md:w-full lg:ml-[2.5vw]">
                    <thead>
                      <tr>
                        <th className="w-[10%] font-rockwell text-sm font-normal sm:text-lg">
                          Cabor
                        </th>
                        <th className="w-[45%] font-rockwell text-sm font-normal sm:text-lg">
                          Tanggal
                        </th>
                        <th className=" w-[45%] font-rockwell text-sm font-normal sm:text-lg">
                          Match
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {schedule.map((item, i) => (
                        <tr key={item.id}>
                          <td className=" text-center font-montserrat text-[3vw] font-normal sm:text-base md:text-xs xl:text-[15px]">
                            {item.attributes.olahraga}
                          </td>
                          <td className=" text-center font-montserrat text-[3vw] font-normal sm:text-base md:text-xs xl:text-[15px] ">
                            {item.attributes.datetime === null
                              ? 'Soon'
                              : convertDate(item.attributes.datetime)}
                          </td>
                          <td className=" text-center font-montserrat text-[3vw] font-normal sm:text-base md:text-xs xl:text-[15px]">
                            {item.attributes.tim1} vs {item.attributes.tim2}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="relative flex items-center justify-center gap-x-1">
                    <Image
                      src="/assets/beranda/hero/hero-component-selengkapnya.svg"
                      width={0}
                      height={0}
                      className="h-1/2 w-min scale-x-[-1]"
                    ></Image>
                    <Link
                      href="/jadwal"
                      className="font-rockwell text-[4vw] font-normal text-white md:text-sm"
                    >
                      Selengkapnya
                    </Link>
                    <Image
                      width={0}
                      height={0}
                      src="/assets/beranda/hero/hero-component-selengkapnya.svg"
                      className="h-1/2 w-min"
                    ></Image>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-2 right-5 2xl:bottom-0 2xl:right-12">
            <Image
              src="/assets/beranda/hero/porchi.svg"
              width={1000}
              height={1000}
              className="hidden w-[226px] opacity-0 md:block xl:w-[240px] 2xl:w-[16vw] "
              ref={Porchi}
            />
          </div>
        </div>
        <Image
          width={1000}
          height={1000}
          src="/assets/beranda/hero/hero-cloud-red-left-top.png"
          className=" cloudFloatRight absolute left-[-10px] top-[-10px] z-[203] w-[26vw] opacity-0 sm:w-[20vw] md:w-[150px] lg:w-[170px] xl:w-[220px] 2xl:w-[15vw]"
          alt="cloud"
          ref={awanmerahkiri}
        ></Image>
        <Image
          width={1000}
          height={1000}
          src="/assets/beranda/hero/hero-cloud-green-left-top.png"
          alt="cloud"
          className="cloudFloatRightDelay absolute left-[-10px] top-[10vw] z-[202] w-[9vw] opacity-0 sm:top-[9vw] sm:w-[7vw] md:top-[75px] md:w-[47px] lg:w-[60px] xl:top-[100px] xl:w-[72px] 2xl:top-[7.5vw] 2xl:w-[5vw]"
          ref={awanijokiri}
        ></Image>
        <Image
          width={1000}
          height={1000}
          src="/assets/beranda/hero/hero-cloud-red-right-top.png"
          alt="cloud"
          className="cloudFloatLeft absolute right-[-10px] top-[-10px] z-10 w-[26vw] opacity-0 sm:w-[20vw] md:w-[120px] lg:w-[135px] xl:w-[185px] 2xl:w-[12vw]"
          ref={awanmerahkanan}
        ></Image>
        <Image
          width={1000}
          height={1000}
          src="/assets/beranda/hero/hero-cloud-green-right-top.png"
          alt="cloud"
          className="cloudFloatLeftDelay absolute right-[-10px] top-[10vw] z-[9] w-[9vw] opacity-0 sm:top-[9vw] sm:w-[7vw] md:top-[5vw] md:w-[40px] lg:top-16 lg:w-[48px] xl:w-[60px] 2xl:top-[6.5vw] 2xl:w-[4vw]"
          ref={awanijokanan}
        ></Image>
        <div className="absolute bottom-[166vw] z-10 h-[300px] w-[125px] sm:bottom-0 sm:hidden  md:bottom-0 md:z-[206] md:block md:w-[250px] md:overflow-hidden">
          <div className=" relative h-full w-full">
            <div className="absolute bottom-[-40px] left-[-50px] z-[3] rotate-90 md:bottom-[-5px] md:left-[-10px] md:rotate-0">
              <Image
                width={1000}
                height={1000}
                src="/assets/beranda/hero/hero-cloud-bottom.png"
                alt="cloud"
                ref={awanmerahbawahMain}
                className=" cloudHeroBottomMain md:cloudHeroBottomLeft w-[150px] opacity-0 lg:w-[170px] 2xl:w-[10vw] "
              ></Image>
            </div>
            <Image
              src="/assets/beranda/hero/hero-cloud-green-bottom.png"
              width={1000}
              height={1000}
              alt="cloud"
              className="cloudHeroBottomLeft absolute bottom-[-2vw] left-[0]  z-[2] h-auto w-10 opacity-0 md:w-16 lg:w-[72px] 2xl:w-[80px]"
              style={{ animationDelay: '500ms' }}
              ref={awanijobawah}
            ></Image>
            <Image
              src="/assets/beranda/hero/hero-cloud-red-2-bottom.png"
              width={1000}
              height={1000}
              alt="cloud"
              className="cloudHeroBottomLeft absolute bottom-10 left-0 z-[1] h-auto w-8 opacity-0 md:w-10 lg:w-[50px] 2xl:w-[57px]"
              style={{ animationDelay: '800ms' }}
              ref={awanmerahbawah}
            ></Image>
          </div>
        </div>
        <div className="absolute bottom-[166vw] right-0  h-[300px] w-[125px] -scale-x-100 sm:bottom-0 sm:hidden md:bottom-0 md:block md:w-[250px] md:overflow-hidden">
          <div className=" relative h-full w-full">
            <div className="absolute bottom-[-40px] left-[-50px] z-[3] rotate-90 md:bottom-[-5px] md:left-[-10px] md:rotate-0 ">
              <Image
                width={1000}
                height={1000}
                src="/assets/beranda/hero/hero-cloud-bottom.png"
                alt="cloud"
                className="cloudHeroBottomMain md:cloudHeroBottomRight w-[150px] opacity-0 lg:w-[170px] 2xl:w-[11vw]"
                ref={awankananmerahbawahMain}
              ></Image>
            </div>
            <Image
              src="/assets/beranda/hero/hero-cloud-green-bottom.png"
              width={1000}
              height={1000}
              alt="cloud"
              className="cloudHeroBottomRight absolute bottom-[-2vw] left-[0] z-[2] h-auto w-10 opacity-0 md:w-16 lg:w-[72px] 2xl:w-[90px]"
              style={{ animationDelay: '500ms' }}
              ref={awankananijobawah}
            ></Image>
            <Image
              src="/assets/beranda/hero/hero-cloud-red-2-bottom.png"
              width={1000}
              height={1000}
              alt="cloud"
              className="cloudHeroBottomRight absolute bottom-10 left-0 z-[1] h-auto w-8 opacity-0 md:w-10 lg:w-[50px] 2xl:w-[67px]"
              style={{ animationDelay: '800ms' }}
              ref={awankananmerahbawah}
            ></Image>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
