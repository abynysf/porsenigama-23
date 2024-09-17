import React from 'react'
import { Hero, Olahraga, Seni } from '../../components/module/cabang/page'
import Footer from '../../components/layout/Footer'

export const metadata = {
  title: 'Cabang Pertandingan',
  description: 'Daftar cabang pertandingan yang dilombakan',
}

export default function Cabang() {
  const basePath = `${process.env.NEXT_PUBLIC_BASE_PATH}`

  const backgroundCabang = {
    backgroundImage: `url('${basePath}/assets/cabang/olahraga/bg_texture.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'top',
  }

  return (
    <div className=" bg-orange-500">
      <Hero />
      <div className="w-full" style={backgroundCabang}>
        <Olahraga />
        <Seni />
      </div>
      <Footer />
    </div>
  )
}
