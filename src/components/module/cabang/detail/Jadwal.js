'use client'
import Image from 'next/image'
import 'aos/dist/aos.css'
import React, { useEffect } from 'react';
import AOS from 'aos';
import {Card} from '../../../element/cabang/detail/Card'

export function Jadwal() {

    const basePath = `${process.env.NEXT_PUBLIC_BASE_PATH}`

    useEffect(() => {
    AOS.init()
    }, [])
  return (
    <div className=''>
        <main
        className="min-h-screen">
            <Card/>
        </main>
    </div>
  )
}

export default Jadwal
