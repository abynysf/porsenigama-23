'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Card from '../../element/cabang/Card'

export function Olahraga() {
  // const aku = {
  //   aku:{

  //   }
  //   aku-kamu:{

  //   }
  // }

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
      id: 'basket',
      nama: 'BASKET',
      alt: 'Maskot Olahraga Basket',
    },
    {
      id: 'voli',
      nama: 'VOLI',
      alt: 'Maskot Olahraga Voli',
    },
    {
      id: 'softball',
      nama: 'SOFTBALL',
      alt: 'Maskot Olahraga Softball',
    },
    {
      id: 'tenis-meja',
      nama: 'TENIS MEJA',
      alt: 'Maskot Olahraga Tenis Meja',
    },
    {
      id: 'atletik',
      nama: 'ATLETIK',
      alt: 'Maskot Olahraga Atletik',
    },
    {
      id: 'panjat-tebing',
      nama: 'PANJAT TEBING',
      alt: 'Maskot Olahraga Panjat Tebing',
    },
    {
      id: 'renang',
      nama: 'RENANG',
      alt: 'Maskot Olahraga Renang',
    },
    {
      id: 'berkuda',
      nama: 'BERKUDA',
      alt: 'Maskot Olahraga Berkuda',
    },
    {
      id: 'hockey',
      nama: 'HOCKEY',
      alt: 'Maskot Olahraga Hockey',
    },
    {
      id: 'catur',
      nama: 'CATUR',
      alt: 'Maskot Olahraga Catur',
    },
    {
      id: 'bridge',
      nama: 'BRIDGE',
      alt: 'Maskot Olahraga Bridge',
    },
    {
      id: 'tenis-lapangan',
      nama: 'TENIS LAPANGAN',
      alt: 'Maskot Olahraga Tenis Lapangan',
    },
    {
      id: 'selam',
      nama: 'SELAM',
      alt: 'Maskot Olahraga Selam',
    },
    {
      id: 'e-sport',
      nama: 'E-SPORT',
      alt: 'Maskot Olahraga E-Sport',
    },
    {
      id: 'sepak-bola',
      nama: 'SEPAK BOLA',
      alt: 'Maskot Olahraga Sepak Bola',
    },
    {
      id: 'futsal',
      nama: 'FUTSAL',
      alt: 'Maskot Olahraga Futsal',
    },
    {
      id: 'bulu-tangkis',
      nama: 'BULU TANGKIS',
      alt: 'Maskot Olahraga Bulu Tangkis',
    },
    {
      id: 'judo',
      nama: 'JUDO',
      alt: 'Maskot Olahraga Judo',
    },
    {
      id: 'taekwondo',
      nama: 'TAEKWONDO',
      alt: 'Maskot Olahraga Taekwondo',
    },
    {
      id: 'panahan',
      nama: 'PANAHAN',
      alt: 'Maskot Olahraga Panahan',
    },
    {
      id: 'kempo',
      nama: 'KEMPO',
      alt: 'Maskot Olahraga Kempo',
    },
    {
      id: 'karate',
      nama: 'KARATE',
      alt: 'Maskot Olahraga Karate',
    },
    {
      id: 'pencak-silat',
      nama: 'PENCAK SILAT',
      alt: 'Maskot Olahraga Pencak Silat',
    },
  ]

  const gridItem = isDeviceGreaterThanLg ? 5 : isDeviceGreaterThanMd ? 6 : 4

  const gridDelay = isDeviceGreaterThanLg ? 5 : isDeviceGreaterThanMd ? 3 : 2

  const jumlahOddsData = data.length % gridDelay

  const firstFiveData = data.slice(0, gridItem)
  const evensData = data.slice(0, data.length - jumlahOddsData)
  const oddsData = data.slice(data.length - (data.length % gridDelay))

  const [active, setActive] = useState(false)

  function ToggleMore() {
    setActive(!active)
  }

  const border = isDeviceGreaterThanMd
    ? '/assets/cabang/hero/border_hero.png'
    : '/assets/cabang/hero/border_hero_mobile.png'

  const isMoreActive = active ? evensData : firstFiveData
  const isHidden = active ? '' : 'hidden'

  const lebihBanyak = active ? 'Lebih Sedikit' : 'Lebih Banyak'
  const lebihBanyakArrow = active ? 'angle_up' : 'angle_down'

  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-x-clip py-48">
      <Image
        src={border}
        width={0}
        height={0}
        alt="ornamen"
        data-aos="fade-down"
        data-aos-duration="1000"
        className="absolute -mt-[90%] h-auto w-full tanggung:-mt-[81%] mepet:-mt-[72%] sm:-mt-[65%] md:-mt-[47%] lg:-mt-[43%] nanggung:-mt-[45%] xl:-mt-[39%] 2xl:-mt-[37%] 3xl:-mt-[33%]"
      />

      <div className="mx-4 flex flex-col items-center md:mx-8 lg:mx-16">
        <div className="flex flex-col py-9 text-center">
          <p
            className="font-masterofbreak text-2xl font-normal text-white lg:text-4xl"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            Cabang Pertandingan
          </p>
          <p
            className=" font-rockwell text-4xl font-bold text-white lg:text-5xl"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            PORSENIGAMA
          </p>
        </div>
        <Image
          src={'/assets/cabang/olahraga/ornamen_header.png'}
          height={0}
          width={0}
          alt={'Ornamen'}
          className="flex h-auto w-full"
        />
        <p className="py-14 font-rockwell text-5xl text-white">OLAHRAGA</p>
        <div className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {isMoreActive.map(({ id, nama, alt }, index) => (
            <Card
              key={id}
              title={nama}
              href={`${id}/`}
              alt={alt}
              image={`/assets/cabang/maskot/olahraga/${id}.png`}
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
              image={`/assets/cabang/maskot/olahraga/${id}.png`}
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

export default Olahraga
