'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
// import data from './data.json'
import 'aos/dist/aos.css'
import AOS from 'aos'
import axios from 'axios'

export function KlasemenTable() {
  const [screenWidth, setScreenWidth] = useState(0)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    // Function to update screenWidth state
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth)
    }

    // Initial screen width
    updateScreenWidth()

    // Event listener for screen width changes
    window.addEventListener('resize', updateScreenWidth)

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateScreenWidth)
    }
  }, [])

  const apiUrl = 'https://ppsmb.ugm.ac.id/2022/strapi/api/psgklasemens'
  const token = `Bearer ${process.env.NEXT_PUBLIC_AUTH}`

  useEffect(() => {
    const axiosInstance = axios.create({
      baseURL: 'https://ppsmb.ugm.ac.id/2022/strapi/api/psgklasemens',
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
    })

    try {
      axiosInstance.get(apiUrl).then((response) => {
        if (response.status === 200) {
          setPosts(response.data.data)
        } else {
          throw new Error('Network response was not ok')
        }
      })
    } catch (error) {
      console.error('Terjadi kesalahan:', error)
      setPosts([])
    }
  }, [])

  const rearrangedData = posts
    .map((item) => {
      // Set the attributes to 0 if they are null
      const gold = item.attributes.gold || 0
      const silver = item.attributes.silver || 0
      const bronze = item.attributes.bronze || 0
      const fakultas = item.attributes.fakultas

      const totalPoints = gold * 100 + silver * 50 + bronze * 25
      return { ...item, attributes: { gold, silver, bronze, fakultas }, totalPoints }
    })
    .sort((a, b) => b.totalPoints - a.totalPoints)

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div className="lg:-[72px] relative flex items-center justify-center bg-[url('/2023/porsenigama/assets/klasemen/bg_tableklasemen.png')] bg-cover px-[12px] pt-[5%] md:px-[32px] md:pb-64 lg:px-[72px]">
      <Image
        alt="gradien"
        className=" absolute top-0 z-10 w-full"
        width={1000}
        height={1000}
        src={'/assets/klasemen/gradien.png'}
      />
      {/* <div className="w-full  bg-[url('/2023/porsenigama/assets/klasemen/bg_mobile_klasemen.png')]"></div> */}
      <div className="max-w-screen mt-16 overflow-hidden">
        <table className="w-full table-fixed">
          <thead>
            <tr>
              <th className="w-[10%] font-rockwell text-lg text-white md:text-3xl">Rank</th>
              <th className="w-[30%] font-rockwell text-lg text-white md:text-3xl">
                Fakultas / Sekolah
              </th>
              <th className="w-[10%]">
                <div className=" flex justify-center">
                  <Image
                    alt="medals gold"
                    width={1000}
                    height={1000}
                    className="w-6 md:w-8"
                    src={'/assets/klasemen/medals_gold.png'}
                  />
                </div>
              </th>
              <th className="w-[10%] font-rockwell text-lg">
                <div className=" flex justify-center">
                  <Image
                    alt="medals silver"
                    width={1000}
                    height={1000}
                    className="w-6 md:w-8"
                    src={'/assets/klasemen/medals_silver.png'}
                  />
                </div>
              </th>
              <th className="w-[10%] font-rockwell text-lg">
                <div className=" flex justify-center">
                  <Image
                    alt="medals bronze"
                    width={1000}
                    height={1000}
                    className="w-6 md:w-8"
                    src={'/assets/klasemen/medals_bronze.png'}
                  />
                </div>
              </th>
              <th className="w-[10%] font-rockwell text-white md:text-3xl">Total</th>
            </tr>
          </thead>
          <tbody>
            {rearrangedData.map((item, i) => (
              <tr key={item.attributes.id}>
                <td className="whitespace-pre-wrap text-center font-montserrat font-semibold text-white md:text-2xl">
                  {i + 1}
                </td>
                <td className="whitespace-pre-wrap font-montserrat font-semibold text-white md:text-2xl">
                  {item.attributes.fakultas}
                </td>
                <td className="whitespace-pre-wrap text-center font-montserrat text-white md:text-2xl">
                  {item.attributes.gold}
                </td>
                <td className="whitespace-pre-wrap text-center font-montserrat text-white md:text-2xl">
                  {item.attributes.silver}
                </td>
                <td className="whitespace-pre-wrap text-center font-montserrat text-white md:text-2xl">
                  {item.attributes.bronze}
                </td>
                <td className="whitespace-pre-wrap text-center font-montserrat font-semibold text-white md:text-2xl">
                  {item.attributes.gold + item.attributes.silver + item.attributes.bronze}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mb-16 mt-20 flex flex-1 justify-center">
          <Image
            alt="banner"
            className=""
            src={
              screenWidth >= 768
                ? '/assets/klasemen/ornamen_desktop.png'
                : '/assets/klasemen/ornamen_mobile.png'
            }
            width={1000}
            height={1000}
            data-aos="fade-up"
            data-aos-duration="1000"
          />
        </div>
      </div>
    </div>
  )
}

export default KlasemenTable
