'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Card from '../../element/cabang/Card'

export function Seni() {
  const basePath = `${process.env.NEXT_PUBLIC_BASE_PATH}`

  const backgroundCabang = {
    backgroundImage: `url('${basePath}/assets/cabang/olahraga/bg_texture.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'top',
  }

  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const md_width = 768
  const lg_width = 1024

  const isDeviceGreaterThanLg = windowWidth >= lg_width
  const isDeviceGreaterThanMd = windowWidth >= md_width

  const borderHero = isDeviceGreaterThanMd
    ? '/assets/cabang/hero/border_hero.png'
    : '/assets/cabang/hero/border_hero_mobile.png'

  const data = [
    {
      id: 'lukis-tradisional',
      nama: 'LUKIS TRADISIONAL',
      alt: 'Maskot Seni Lukis Tradisional',
    },
    {
      id: 'fotografi',
      nama: 'FOTOGRAFI',
      alt: 'Maskot Seni Fotografi',
    },
    {
      id: 'band',
      nama: 'BAND',
      alt: 'Maskot Seni Band',
    },
    {
      id: 'cipta-puisi',
      nama: 'CIPTA PUISI',
      alt: 'Maskot Seni Cipta Puisi',
    },
    {
      id: 'vokal-group',
      nama: 'VOKAL GROUP',
      alt: 'Maskot Seni Vokal Group',
    },
    {
      id: 'naskah-lakon',
      nama: 'NASKAH LAKON',
      alt: 'Maskot Seni Naskah Lakon',
    },
    {
      id: 'vokal-keroncong',
      nama: 'VOKAL KERONOCNG',
      alt: 'Maskot Seni Vokal Keroncong',
    },
    {
      id: 'vokal-seriosa',
      nama: 'VOKAL SERIOSA',
      alt: 'Maskot Seni Vokal Seriosa',
    },
    {
      id: 'tari-modern',
      nama: 'TARI MODERN',
      alt: 'Maskot Seni Tari Modern',
    },
    {
      id: 'monolog',
      nama: 'MONOLOG',
      alt: 'Maskot Seni Monolog',
    },
    {
      id: 'tari-tradisional',
      nama: 'TARI TRADISIONAL',
      alt: 'Maskot Seni Tari Tradisional',
    },
    {
      id: 'komik-strip',
      nama: 'KOMIK STRIP',
      alt: 'Maskot Seni Komik Strip',
    },
    {
      id: 'poster',
      nama: 'POSTER',
      alt: 'Maskot Seni Poster',
    },
  ]

  const gridItem = isDeviceGreaterThanLg ? 5 : isDeviceGreaterThanMd ? 6 : 4

  const gridDelay = isDeviceGreaterThanLg ? 5 : isDeviceGreaterThanMd ? 3 : 2

  const firstFiveData = data.slice(0, gridItem)
  const [active, setActive] = useState(false)

  const jumlahOddsData = data.length % gridDelay
  const evensData = data.slice(0, data.length - jumlahOddsData)
  const oddsData = data.slice(data.length - (data.length % gridDelay))

  function ToggleMore() {
    setActive(!active)
  }

  const isMoreActive = active ? evensData : firstFiveData
  const isHidden = active ? '' : 'hidden'

  const lebihBanyak = active ? 'Lebih Sedikit' : 'Lebih Banyak'
  const lebihBanyakArrow = active ? 'angle_up' : 'angle_down'

  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-x-clip pb-48">
      <div className="mx-4 flex flex-col items-center md:mx-8 lg:mx-16">
        <Image
          src={'/assets/cabang/olahraga/ornamen_header.png'}
          height={0}
          width={0}
          alt={'ornamen'}
          className="flex h-auto w-full px-6 lg:px-24"
        />
        <p className="py-14 font-rockwell text-5xl text-white">SENI</p>
        <div className="mx-16 grid w-full grid-cols-2 justify-between md:grid-cols-3 lg:grid-cols-5">
          {isMoreActive.map(({ id, nama, alt }, index) => (
            <Card
              key={id}
              title={nama}
              href={`${id}/`}
              alt={alt}
              image={`/assets/cabang/maskot/seni/${id}.png`}
              delay={`${(index % gridDelay) * 200}`}
            />
          ))}
        </div>
        <div className={`grid w-full grid-cols-${jumlahOddsData} px-[15%] ${isHidden}`}>
          {oddsData.map(({ id, nama, alt }, index) => (
            <Card
              key={id}
              title={nama}
              href={`${id}/`}
              alt={alt}
              image={`/assets/cabang/maskot/seni/${id}.png`}
              delay={`${(index % gridDelay) * 200}`}
            />
          ))}
        </div>
        <div className="flex flex-wrap justify-center py-10" onClick={() => ToggleMore(active)}>
          <button className="flex flex-row text-center font-rockwell text-xl text-white lg:text-[32px]">
            {lebihBanyak}
          </button>
          <Image
            src={`/assets/cabang/olahraga/${lebihBanyakArrow}.png`}
            width={0}
            height={0}
            alt={''}
            className="my-auto ms-3 flex h-5 w-auto lg:h-8"
          />
        </div>
      </div>
    </main>
  )
}

export default Seni
