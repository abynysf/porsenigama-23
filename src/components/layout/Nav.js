'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Nav() {
  const [isVisible, setIsVisible] = useState(true)
  const [isImageEnlarged, setIsImageEnlarged] = useState(false)
  const [isFirstLoad, setIsFirstLoad] = useState(true)

  useEffect(() => {
    let prevScrollPos = window.scrollY
    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos < 100)
      prevScrollPos = currentScrollPos
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const activeSegment = useSelectedLayoutSegment()
  const links = [
    { label: 'Home', path: '/', targetSegment: null },
    { label: 'Cabang', path: '/cabang', targetSegment: 'cabang' },
    { label: 'Jadwal', path: '/jadwal', targetSegment: 'jadwal' },
    { label: 'Klasemen', path: '/klasemen', targetSegment: 'klasemen' },
    { label: 'Galeri', path: '/galeri', targetSegment: 'galeri' },
    { label: 'Suporter', path: '/supporter', targetSegment: 'supporter' },
    { label: 'FAQ', path: '/faq', targetSegment: 'faq' },
  ]

  const toggleNavMobileClicked = () => {
    setIsImageEnlarged((prevIsEnlarged) => !prevIsEnlarged)
  }

  const toggleFirstLoad = () => {
    setIsFirstLoad(false)
  }

  const handleHamburgerClick = () => {
    toggleNavMobileClicked()
    toggleFirstLoad()
  }

  return (
    <>
      {/* <div className="Navbar fixed z-10 mt-2 flex justify-between"> */}
      <div
        className={` z-[9999] mt-2 hidden justify-between transition-transform  lg:fixed lg:flex ${
          isVisible ? 'transition-transform' : '-translate-y-[300%] transition-transform'
        }`}
      >
        <div className="absolute -z-10">
          <Image
            className="h-24 w-[900px]"
            src="/assets/navbar/nav-bg.png"
            alt="navbar"
            height={1000}
            width={1000}
          />
        </div>

        <div className="Main mt-4 pl-16 pr-16 font-montserrat font-bold text-russet-500">
          <nav>
            <ul>
              {links.map((l, i) => (
                <Link
                  key={l.path}
                  href={l.path}
                  className={` p-2 ${
                    activeSegment === l.targetSegment ? ' underline decoration-2' : ''
                  }`}
                >
                  {l.label}
                </Link>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div className="z-[9999] lg:hidden">
        <Image
          src="/assets/navbar/nav_bg_mobile.png"
          alt="bg"
          width={1000}
          height={1000}
          className={`fixed right-2 top-2 z-30 h-[65px] w-[65px] drop-shadow-lg transition-transform duration-300  ${
            isImageEnlarged ? ' scale-125' : ''
          }`}
          onClick={handleHamburgerClick}
        />

        <motion.div
          className={`right-5 top-5 z-20 h-[40px] w-[230px] overflow-hidden ${
            isFirstLoad ? 'hidden ' : 'fixed'
          }`}
        >
          <motion.div
            initial={isImageEnlarged ? { x: '100%' } : { x: 0 }} // Initial position, slide in from the right
            animate={isImageEnlarged ? { x: 0 } : { x: '100%' }} // Final position, slide to the center
            transition={isImageEnlarged ? { duration: 0.5 } : { duration: 0.5, delay: 0.4 }} // Animation duration
          >
            <Image
              src="/assets/navbar/nav_leaf_mobile.png"
              alt="leaf"
              width={1000}
              height={1000}
              className={` h-[40px] w-[230px] drop-shadow-lg   ${
                isImageEnlarged
                  ? ' left-0 origin-right transform transition-transform duration-300 ease-in-out'
                  : ''
              }`}
            />
          </motion.div>
        </motion.div>

        <motion.div
          className={`right-5 top-5 w-[200px] overflow-hidden ${isFirstLoad ? 'hidden ' : 'fixed'}`}
        >
          <motion.div
            initial={isImageEnlarged ? { y: '-200%' } : { y: '0%' }} // Initial position, slide in from the right
            animate={isImageEnlarged ? { y: '0%' } : { y: '-200%' }} // Final position, slide to the center
            transition={isImageEnlarged ? { duration: 1 } : { duration: 1 }}
            className="  rounded-bl-[32px] border-4 border-cream-500 bg-red-500"
          >
            <nav className="mb-5 mt-16 px-[8px] md:px-[8px]">
              <ul>
                {links.map((l, i) => (
                  <li key={i} className="mb-1 mt-1 pr-2 text-right">
                    <div className="flex items-center justify-start ">
                      <div className="absolute h-[8px] w-[8px] rounded-full bg-cream-500"></div>
                      <div className="ml-1 h-[3px] w-full bg-cream-500"></div>
                    </div>

                    <Link
                      key={l.path}
                      href={l.path}
                      className=" font-rockwell text-cream-500"
                      onClick={toggleNavMobileClicked}
                    >
                      {l.label}
                    </Link>

                    {links.length == i + 1 ? (
                      <div className="flex items-center justify-start ">
                        <div className="absolute h-[8px] w-[8px] rounded-full bg-cream-500"></div>
                        <div className="ml-1 h-[3px] w-full bg-cream-500"></div>
                      </div>
                    ) : (
                      ''
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}
