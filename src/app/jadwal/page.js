import React from 'react'
import Image from 'next/image'
import { Hero, Pertandingan } from '../../components/module/jadwal/page'
import Footer from '../../components/layout/Footer'

export const metadata = {
  title: 'Jadwal Pertandingan',
  description: 'Jadwal Pertandingan Porsenigama 2023',
}

export default function Jadwal() {
  return (
    <div>
      <div>
        <Hero />
        <Pertandingan />
      </div>
      <div>
        <Footer type="type1" />
      </div>
    </div>
  )
}
