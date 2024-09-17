'use client'
import Image from 'next/image'
import 'aos/dist/aos.css'
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import data from './Cabang.json'
import dataKategori from "./Kategori.json"

export function Kontingen({olahraga,fakultas,kategori}) {
    const namaOlahraga = olahraga
    const dataKontingen = data[namaOlahraga]
    const optionData = dataKategori[namaOlahraga]

    const [selectedFakultas, setSelectedFakultas] = useState('');
    const [selectedKategori, setSelectedKategori] = useState('');

    const handleFakultasChange = (event) => {
        setSelectedFakultas(event.target.value);
    };
    const handleKategoriChange = (event) => {
        setSelectedKategori(event.target.value);
    };


    
    const filteredData = dataKontingen.filter((item) => {
        // if(dataKontingen != null){
        // }
        return (selectedFakultas === '' || item.fakultas === selectedFakultas) && (selectedKategori == '' || item.kategori == selectedKategori);
    });
    


    const basePath = `${process.env.NEXT_PUBLIC_BASE_PATH}`

    const backgroundStyle = {
        backgroundImage:`url('${basePath}/assets/cabang/detail/calendar/bg_texture.png')`,
        backgroundSize: 'contain',   
    };

    useEffect(() => {
    AOS.init()
    }, [])
  return (
    <main
     className='min-h-screen flex flex-col justify-center items-center py-26 pb-24 lg:pb-48 bg-blue_calendar-500'
     style={backgroundStyle}>
        <div className='relative overflow-hidden flex w-full justify-center items-center flex-col p-8 text-center'>
            <p
             className="text-2xl lg:text-4xl font-normal font-masterofbreak text-white"
             data-aos="fade-right"
             data-aos-duration="1000">Daftar Atlet</p>
            <p
             className=" text-4xl lg:text-5xl font-bold font-rockwell text-white"
             data-aos="fade-left"
             data-aos-duration="1000">PORSENIGAMA 2023</p>
        </div>
        <div className='flex flex-col md:flex-row'>
            <select
            id="fakultas"
            className='text-gray-600 p-4 rounded-lg border-none m-2 md:m-4 max-w-[80vw]'
            value={selectedFakultas}
            onChange={handleFakultasChange}>
                <option value="">Pilih Fakultas</option>
                <option value="Biologi">Fakultas Biologi</option>
                <option value="FEB">Fakultas Ekonomi dan Bisnis</option>
                <option value="Farmasi">Fakultas Farmasi</option>
                <option value="Filsafat">Fakultas Filsafat</option>
                <option value="Geografi">Fakultas Geografi</option>
                <option value="Hukum">Fakultas Hukum</option>
                <option value="Ilmu Budaya">Fakultas Ilmu Budaya</option>
                <option value="ISIPOL">Fakultas Ilmu Sosial dan Ilmu Politik</option>
                <option value="FKG">Fakultas Kedokteran Gigi</option>
                <option value="FKH">Fakultas Kedokteran Hewan</option>
                <option value="Kehutanan">Fakultas Kehutanan</option>
                <option value="KKMK">Fakultas Kesehatan Masyarakat</option>
                <option value="MIPA">Fakultas Matematika dan Ilmu Pengetahuan Alam</option>
                <option value="Pertanian">Fakultas Pertanian</option>
                <option value="Peternakan">Fakultas Peternakan</option>
                <option value="Psikologi">Fakultas Psikologi</option>
                <option value="Pascasarjana">Fakultas Pascasarjana</option>
                <option value="Vokasi">Sekolah Vokasi</option>
                <option value="Teknik">Fakultas Teknik</option>
                <option value="FTP">Fakultas Teknologi Pertanian</option>

            </select>
            <select
            id="kategori"
            className='text-gray-600 p-4 rounded-lg border-none m-2 md:m-4 max-w-[80vw]'
            value={selectedKategori}
            onChange={handleKategoriChange}>
                <option value="">Pilih Kategori</option>
                {optionData.map(({ option }) => (
                <option value={option}>{option}</option>
                ))}
            </select>
        </div>
        <div
         className='flex flex-col min-h-full px-4'>

            <div className='w-full py-2 grid grid-cols-12 border-y-2'>
                <div className='px-8 md:px-16 lg:px-20 py-3 border-y'>
                    <p className='col-span-2 font-rockwell text-white'>No</p>
                </div>
                <div className='col-span-6 px-8 md:px-16 lg:px-20 py-3 border-y'>
                    <p className='font-rockwell mx-4 text-white'>Nama</p>
                </div>
                <div className='col-span-5 px-8 md:px-16 lg:px-20 py-3 border-y'>
                    <p className='font-rockwell mx-4 text-white'>Fakultas</p>
                </div>
            </div>
            
            {filteredData.map(({ id,nama, fakultas,kategori }, index) => (
            <div
             key={index}
             className='w-full py-4 grid grid-cols-12'>
                <div className='px-8 md:px-16 lg:px-20'>
                    <p className='col-span-2 font-rockwell text-white'>{index+1}</p>
                </div>
                <div className='col-span-6 px-8 md:px-16 lg:px-20'>
                    <p className='font-rockwell mx-4 text-white'>{nama}</p>
                </div>
                <div className='col-span-5 px-8 md:px-16 lg:px-20'>
                    <p className='font-rockwell mx-4 text-white'>{fakultas}</p>
                </div>
            </div>
            ))}

        </div>
    </main>
  )
}

export default Kontingen
