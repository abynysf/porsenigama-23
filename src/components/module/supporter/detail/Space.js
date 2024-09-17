'use client'
import 'aos/dist/aos.css'

import Image from 'next/image'
import AOS from 'aos'
import { useEffect } from 'react'

export function Space() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      <section
        style={{
          backgroundImage: `url("${basePath}/assets/supporter/detail/all/bgProfil.png")`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
        }}
      >
        <div className="h-24 lg:h-28 xl:h-48"></div>
      </section>
    </>
  )
}

export default Space
