'use client'
import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import JadwalCard from './components/JadwalCard'
import axios from 'axios'
import { format, isWithinInterval, addDays, subDays } from 'date-fns'
import Image from 'next/image'

export function Pertandingan() {
  useEffect(() => {
    AOS.init()
  }, [])

  const apiUrl = 'https://ppsmb.ugm.ac.id/2022/strapi/api/psgjadwals'
  const token = `Bearer ${process.env.NEXT_PUBLIC_AUTH}`

  const [jadwalData, setJadwalData] = useState([])

  useEffect(() => {
    const axiosInstance = axios.create({
      baseURL: 'https://ppsmb.ugm.ac.id/2022/strapi/api/psgjadwals',
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
    })

    axiosInstance
      .get(apiUrl)
      .then((response) => {
        setJadwalData(response.data.data)
      })
      .catch((error) => {
        console.error('Terjadi kesalahan:', error)
      })
  }, [])

  const backgroundStyle = {
    backgroundImage: `url(${process.env.NEXT_PUBLIC_BASE_PATH}/assets/jadwal/BackgroundPertandingan.png)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center top',
  }

  const today = new Date()

  const tomorrow = addDays(today, 1)
  const dayAfterTomorrow = addDays(today, 2)

  const datesToShow = [today, tomorrow, dayAfterTomorrow]

  const jadwalFiltered = jadwalData
    .filter((jadwal) =>
      datesToShow.some((date) =>
        isWithinInterval(new Date(jadwal.attributes.datetime), {
          start: subDays(date, 1),
          end: date,
        }),
      ),
    )
    .sort((a, b) => {
      return new Date(a.attributes.datetime) - new Date(b.attributes.datetime)
    })

  if (jadwalFiltered.length === 0) {
    return (
      <div>
        <div className="overflow-hidden">
          <main
            className="flex min-h-screen flex-col items-center justify-center pb-64 pt-[5%] "
            style={backgroundStyle}
          >
            <Image
              data-aos="zoom-in"
              data-aos-duration="1000"
              className="w-full"
              src="/assets/jadwal/BannerSegeraHadir.png"
              alt="Banner coming soon"
              width={1000}
              height={1000}
            />
          </main>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="overflow-hidden">
        <main
          className="flex min-h-screen flex-col items-center justify-center pb-64 pt-[5%] "
          style={backgroundStyle}
        >
          {jadwalFiltered.map((jadwal, index) => (
            <div key={index} className="mb-8">
              <JadwalCard
                team1={jadwal.attributes.tim1}
                team2={jadwal.attributes.tim2}
                date={format(new Date(jadwal.attributes.datetime), 'dd MMMM')}
                time={new Date(jadwal.attributes.datetime).toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                  hour12: false,
                })}
                location={jadwal.attributes.tempat}
                cabor={jadwal.attributes.olahraga}
                kategori={jadwal.attributes.kategori}
                linktempat={jadwal.attributes.linktempat}
              />
            </div>
          ))}
        </main>
      </div>
    </div>
  )
}

export default Pertandingan
