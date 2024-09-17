'use client'
import 'aos/dist/aos.css'

import AOS from 'aos'
import { useEffect } from 'react'
import Card from '../../element/supporter/Card'
import Image from 'next/image'

export function Barisan() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH
  useEffect(() => {
    AOS.init()
  }, [])

  const supporter = [
    {
      id: 'feb',
      nama: 'FEB',
    },
    {
      id: 'biologi',
      nama: 'BIOLOGI',
    },
    {
      id: 'ftp',
      nama: 'FTP',
    },
    {
      id: 'fisipol',
      nama: 'FISIPOL',
    },
    {
      id: 'fib',
      nama: 'FIB',
    },
    {
      id: 'hukum',
      nama: 'HUKUM',
    },
    {
      id: 'geografi',
      nama: 'GEOGRAFI',
    },
    {
      id: 'filsafat',
      nama: 'FILSAFAT',
    },
    {
      id: 'farmasi',
      nama: 'FARMASI',
    },
    {
      id: 'fkg',
      nama: 'FKG',
    },
    {
      id: 'fkh',
      nama: 'FKH',
    },
    {
      id: 'teknik',
      nama: 'TEKNIK',
    },
    {
      id: 'sv',
      nama: 'SV',
    },
    {
      id: 'pasca',
      nama: 'PASCA SARJANA',
    },
    {
      id: 'psikologi',
      nama: 'PSIKOLOGI',
    },
    {
      id: 'peternakan',
      nama: 'PETERNAKAN',
    },
    {
      id: 'pertanian',
      nama: 'PERTANIAN',
    },
    {
      id: 'mipa',
      nama: 'MIPA',
    },
    {
      id: 'kehutanan',
      nama: 'KEHUTANAN',
    },
    {
      id: 'fkkmk',
      nama: 'FKKMK',
    },
  ]

  return (
    <div
      className="relative flex flex-wrap overflow-hidden bg-[#D48B40] py-[15%]"
      style={{
        backgroundImage: `url("${basePath}/assets/supporter/all/supporter.png")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="lg:hidden">
        <Image
          width={4000}
          height={4000}
          src={'/assets/supporter/mobile/garis.png'}
          className="z-10"
        />
        <Image
          width={4000}
          height={4000}
          src={'/assets/supporter/mobile/gradient.svg'}
          className="absolute top-0"
        />
      </div>
      <div className="max-lg:hidden">
        <Image
          width={4000}
          height={4000}
          src={'/assets/supporter/desktop/gradient.svg'}
          className="absolute top-0"
        />
      </div>
      {supporter.map(({ id, nama }) => (
        <div className="w-1/2 lg:w-1/4 xl:p-[3%]">
          <Card key={id} href={`${id}/`} nama={nama} logo={`/assets/supporter/barisan/${id}.png`} />
        </div>
      ))}
    </div>
  )
}

export default Barisan
