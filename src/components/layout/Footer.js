import React from 'react'
import Image from 'next/image'
import PropTypes from 'prop-types'
import { IoChatbubbleEllipses, IoGlobeOutline, IoLogoLinkedin, IoMail } from 'react-icons/io5'
import {
  SiFacebook,
  SiLine,
  SiTiktok,
  SiTwitter,
  SiYoutube,
  SiInstagram,
  SiX,
} from 'react-icons/si'

const medsos = [
  {
    type: 'instagram',
    link: 'https://www.instagram.com/porsenigama/',
    icon1: 'type1_instagram',
    icon: <SiInstagram />,
  },
  {
    type: 'tiktok',
    link: 'https://www.tiktok.com/@porsenigama',
    icon1: 'type1_tiktok',
    icon: <SiTiktok />,
  },
  {
    type: 'youtube',
    link: 'https://www.youtube.com/@porsenigamatv3221',
    icon1: 'type1_youtube',
    icon: <SiYoutube />,
  },

  {
    type: 'twitter',
    link: 'https://twitter.com/porsenigama',
    icon1: 'type1_x',
    icon: <SiX />,
  },
  {
    type: 'line',
    link: 'https://page.line.me/porsenigama?openQrModal=true',
    icon1: 'type1_line',
    icon: <SiLine />,
  },
]

export function Footer({ type }) {
  return (
    <footer
      className={`${
        type === 'type2' ? 'bg-[#E9D0B1]' : 'bg-teal-500'
      } w-full items-center justify-center `}
    >
      <div className="absolute z-50 overflow-x-clip">
        <Image
          width={1000}
          height={1000}
          alt="leaf"
          src={
            type === 'type2'
              ? '/assets/footer/type2/leaf_cream.png'
              : '/assets/footer/type1/leaf_teal_2.png'
          }
          className=" -mt-[10%] h-full w-full scale-[150%] md:-mt-[12%] md:scale-[125%] lg:-mt-[12%] lg:max-w-none lg:scale-100"
        />
      </div>

      <div className="flex justify-between px-[16px] pb-4 md:px-[32px] lg:px-[72px] lg:pb-0">
        <div
          className={`${
            type === 'type2' ? 'border-copper-500' : 'border-cream-500'
          }   md:border-6 rounded-16 w-full rounded-[40px] border-4  p-4 md:p-8 lg:flex lg:justify-between lg:border-8`}
        >
          <div className={`${type === 'type2' ? 'text-copper-500' : 'text-cream-500'} `}>
            <div className="mt-12 font-rockwell text-[16px] font-bold  md:text-[20px]">
              <p>FORUM KOMUNIKASI</p>
              <p>UNIT KEGIATAN MAHASISWA</p>
              <p>UNIVERSITAS GADJAH MADA</p>
            </div>
            <p className="mt-4 max-w-[530px] font-montserrat text-[12px]  md:text-[16px]">
              Gelanggang Mahasiswa Universitas Gadjah Mada Jl. Pancasila No.1, Bulaksumur,
              Caturtunggal, Sleman, Daerah Istimewa Yogyakarta 55281
            </p>

            <div
              className={`${
                type === 'type2' ? 'text-copper-500' : 'text-cream-500'
              } mt-6 flex w-full`}
            >
              <div className="grid grid-cols-6 gap-5  md:gap-9">
                {medsos.map((link, i) => (
                  <a key={i} href={link.link} target="_blank" rel="noopener noreferrer">
                    <div className="hover:bg-green-30 flex w-[24px] items-center justify-center ">
                      {link.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div
            className={`${
              type === 'type2' ? 'text-copper-500' : 'text-cream-500'
            } max-w-[350px] md:mt-12`}
          >
            <p className="mt-6 font-rockwell text-[16px] font-bold  md:text-[20px] lg:text-right">
              DISELENGGARAKAN OLEH
            </p>
            <div className="mt-4 grid grid-cols-3 gap-3">
              <Image
                className="h-32 w-full object-contain"
                alt="logo brown"
                src={
                  type === 'type2'
                    ? '/assets/footer/type2/logo_ugm_brown.png'
                    : '/assets/footer/logo_ugm.png'
                }
                width={1000}
                height={1000}
              />
              <Image
                className="h-32 w-full object-contain"
                src="/assets/footer/logo_forkom.png"
                alt="logo forkom"
                width={1000}
                height={1000}
              />
              <Image
                alt="logo psg"
                className="h-32 w-full object-contain"
                src="/assets/footer/logo_psg.png"
                width={1000}
                height={1000}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={`flex  h-10 w-full items-center justify-center text-center lg:h-16`}>
        <h4 className=" font-montserrat text-[12px]  text-white  md:text-[16px]">
          © PORSENIGAMA 2023. All rights reserved.
        </h4>
      </div>
    </footer>
  )
}
Footer.propTypes = {
  type: PropTypes.string,
}

Footer.defaultProps = {
  type: 'type1',
}

export default Footer
