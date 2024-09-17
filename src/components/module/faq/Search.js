import React from 'react'
import { useState } from 'react'
import Image from 'next/image'

export default function Search(props) {
  const [search, setSearch] = useState('')

  const onSearchChange = (event) => {
    setSearch(event.target.value)
    props.onSearchChange(event.target.value)
  }
  
  return (
    <>
      <div className="flex w-[90%] max-w-[1100px] items-center justify-center p-5 pt-0">
        <Image
          src="/assets/faq/magnifyingGlass.png"
          alt="Magnifying Glass"
          width={0}
          height={0}
          className="relative z-20 h-[3.13rem] w-[3.15rem] rounded-[8px] rounded-br-none rounded-tr-none border-[3px] border-r-0 border-[#6D3005] bg-white p-2 xxs:h-[52px] s:h-[65px] s:w-[65px] md:h-[67px] md:w-[67px]"
        />
        <input
          type="text"
          placeholder="Punya Pertanyaan? Cari di Sini!"
          className="relative z-20 min-h-[50px] w-[90%] min-w-[250px] rounded-[8px] rounded-bl-none rounded-tl-none border-[3px] border-l-0 border-[#6D3005] pl-2 pr-5 font-montserrat text-[0.9rem] text-black placeholder:text-[#BF8B63] focus:outline-none xxs:h-[52px] s:h-[65px] s:text-[1.15rem] md:h-[67px] md:text-[1.2rem] lg:text-[1.5rem]"
          onChange={onSearchChange}
        />
      </div>
    </>
  )
}

/*  */
