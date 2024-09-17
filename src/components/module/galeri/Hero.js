'use client'
import Image from 'next/image'
import { useRef } from 'react'
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { Power4 } from 'gsap/all'
import { useLayoutEffect, useState } from 'react'
gsap.registerPlugin(ScrollTrigger)

export function Hero() {
  const main = useRef()
  const cloudGreenTop = useRef()
  const cloudGreenBottom = useRef()
  const cloudRedBottom = useRef()
  const cloudGreenBottomDesk = useRef()
  const cloudRedTop = useRef()
  const cloudGreenTopDesk = useRef()
  const [scrollY, setScrollY] = useState(0)

  useLayoutEffect(() => {

    window.addEventListener('scroll', () => {
      setScrollY(window.scrollY)
    })
  
    const isMobile = window.innerWidth

    const finalY = isMobile < 768 ? -1300 : isMobile < 1024 ? -2550 : isMobile < 1280 ? -1990 : isMobile <= 1440 ? -2920 : -4020

    const finalX = isMobile < 768 ? -650 : isMobile < 1024 ? -1100 : isMobile < 1280 ? -880: isMobile <= 1440 ? -1200 : -1600
  


    const triggerY = isMobile < 768 ? -1100 : isMobile < 1024 ? -2480 : isMobile < 1280 ? -1220 : isMobile <= 1440 ? -1590 : -6100
  
    const triggerX = isMobile < 768 ? -650 : isMobile < 1024 ? -1100 : isMobile < 1280 ? -680: isMobile <= 1440 ? -800 : -2400

    const ctx = gsap.context((self) => {
      const galeri = self.selector('.bgGaleri')
      const tlGaleri = gsap.timeline()
      tlGaleri.fromTo(
        galeri,
        {
          y: 2000,
          x: 800,
          opacity: 0,
        },
        {
          y: finalY,
          x: finalX,
          duration: 5,
          opacity: 1,
          ease: Power4.easeOut,
        },
      )
      tlGaleri.to(galeri, {
        y: triggerY - scrollY,
        x: triggerX - scrollY,
        duration: 5,
        scrollTrigger: {
          trigger: main.current,
          start: 'top 100%',
          end: 'bottom top',
          toggleActions: 'restart none reverse none',
          scrub: 1,
        },
      })

      // cloud loading animate
      // mobile
      gsap.from(cloudGreenTop.current, { x: 100, y: -100, duration: 3, delay: 2 })
      gsap.from(cloudGreenBottom.current, { x: -100, y: 100, duration: 3, delay: 2.5 })
      // desktop
      gsap.from(cloudRedBottom.current, { x: -100, y: 100, duration: 3, delay: 1.5 })
      gsap.from(cloudGreenBottomDesk.current, { x: -100, y: 100, duration: 1.6, delay: 3 })
      gsap.from(cloudRedTop.current, { x: 100, y: -100, duration: 3, delay: 1.5 })
      gsap.from(cloudGreenTopDesk.current, { x: 100, y: -100, duration: 1.6, delay: 3 })

      // cloud parallax animate
      // const tlCloud = gsap.timeline()
      // tlCloud.to(cloudRedBottom.current, {
      //   y: -(scrollY * 0.2),
      //   duration: 4,
      //   scrollTrigger: {
      //     trigger: main.current,
      //     start: 'top 100%',
      //     end: 'bottom top',
      //     toggleActions: 'restart pause none none',
      //     scrub: 1,
      //     markers: true,
      //   },
      // })
      // tlCloud.to(cloudGreenBottomDesk.current, {
      //   y: scrollY * -0.4,
      //   x: scrollY * -0.2,
      //   scrollTrigger: {
      //     trigger: main.current,
      //     start: 'top 100%',
      //     end: 'bottom top',
      //     toggleActions: 'restart none none none',
      //     scrub: 1,
      //     markers: true,
      //   },
      // })
    }, main)

    return () => ctx.revert()
  }, [])
  return (
    <section>
      <div className="relative h-screen overflow-hidden bg-[#478F7E]" ref={main}>
        <Image
          src="/assets/galeri/galeri-hero-bg-extra.png"
          width={1000}
          height={1000}
          className="bgGaleri absolute z-[10] w-[100vw] origin-top -rotate-[20deg]"
          alt="galeri-hero-bg"
        />
        <Image
          src="/assets/galeri/galeri-hero-bg-texture.png"
          width={0}
          v
          height={0}
          className="absolute z-[0] h-screen w-full object-cover"
          alt="galeri-hero-bg-texture"
        />

        {/* Cloud Mobile */}
        <Image
          src="/assets/galeri/galeri-cloud-green.svg"
          width={1000}
          height={1000}
          className="absolute bottom-0 z-10 w-1/3 md:hidden md:w-1/6"
          alt="cloud"
          ref={cloudGreenBottom}
        />
        <Image
          src="/assets/galeri/galeri-cloud-green.svg"
          width={1000}
          height={1000}
          className=" absolute right-0 z-10 w-1/3 -scale-100 md:hidden md:w-1/6"
          alt="cloud"
          ref={cloudGreenTop}
        />

        {/* Cloud dekstop */}
        <Image
          src="/assets/beranda/hero/hero-cloud-red-right-top.png"
          width={1000}
          height={1000}
          className=" absolute right-0 z-20 hidden md:block md:w-[100px] lg:w-[160px]"
          alt="cloud"
          ref={cloudRedTop}
        />
        <Image
          src="/assets/beranda/hero/hero-cloud-green-right-top.png"
          width={1000}
          height={1000}
          className=" absolute right-0 z-10 hidden md:top-16 md:block md:w-[35px] lg:top-28 lg:w-[50px]"
          alt="cloud"
          ref={cloudGreenTopDesk}
        />
        <Image
          src="/assets/beranda/hero/hero-cloud-red-right-top.png"
          width={1000}
          height={1000}
          className=" absolute bottom-0 z-20 hidden -scale-100 md:block md:w-[100px] lg:w-[160px]"
          alt="cloud"
          ref={cloudRedBottom}
        />
        <Image
          src="/assets/beranda/hero/hero-cloud-green-right-top.png"
          width={1000}
          height={1000}
          className=" absolute z-10 hidden -scale-100 md:bottom-16 md:block md:w-[35px] lg:bottom-28 lg:w-[50px]"
          alt="cloud"
          ref={cloudGreenBottomDesk}
        />
      </div>
    </section>
  )
}

export default Hero