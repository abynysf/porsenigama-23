'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import Search from './Search'
import Image from 'next/image'
import dataPost from './data.json'
import AOS from 'aos'
import 'aos/dist/aos.css'

export function Content() {
  // Search bar
  const [posts, setPosts] = useState(dataPost)

  const onSearchChange = (value) => {
    const filteredPosts = dataPost.filter((post) => {
      return post.question.toLowerCase().includes(value.toLowerCase())
    })
    setPosts(filteredPosts)
  }

  // Category
  const [category, setCategory] = useState('semua')

  const filterByCategory = (selectedCategory) => {
    setCategory(selectedCategory)
  }

  // Open-close the answers
  const [openFaqId, setOpenFaqId] = useState(null)

  const toggleDropdown = (faqId) => {
    setOpenFaqId((prevFaqId) => (prevFaqId === faqId ? null : faqId))
  }

  // AOS
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <div className="flex h-auto w-full flex-col items-center justify-center pb-[30vw] md:pb-[20vw]">
        {/* ------ Search bar ------ */}
        <Search onSearchChange={onSearchChange} />

        {/* ------ Filtered button ------ */}
        <div className="flex w-auto max-w-[1100px] flex-wrap items-center justify-around xs:w-[90%]">
          <button
            onClick={() => filterByCategory('semua')}
            className={`duration-200 hover:scale-105`}
          >
            <div className="m-2 w-[128px] xxs:w-[148px] xs:h-[51.4px] md:w-[155px] lg:w-[170px]">
              {/* Semua */}
              <Image
                src="/assets/faq/selectedSemua.png"
                alt="Semua"
                width={0}
                height={0}
                style={{
                  height: '100%',
                  width: '100%',
                  objectFit: 'cover',
                  objectPosition: 'bottom',
                }}
                className=""
              />
            </div>
          </button>
          <button
            onClick={() => filterByCategory('umum')}
            className={`duration-200 hover:scale-105`}
          >
            <div className="m-2 w-[128px] xxs:w-[148px] xs:h-[51.4px] md:w-[155px] lg:w-[170px]">
              {/* Umum */}
              <Image
                src="/assets/faq/selectedUmum.png"
                alt="Umum"
                width={0}
                height={0}
                style={{
                  height: '100%',
                  width: '100%',
                  objectFit: 'cover',
                  objectPosition: 'bottom',
                }}
                className=""
              />
            </div>
          </button>
          <button
            onClick={() => filterByCategory('olahraga')}
            className={`duration-200 hover:scale-105`}
          >
            <div className="m-2 w-[128px] xxs:w-[148px] xs:h-[51.4px] md:w-[155px] lg:w-[170px]">
              {/* Olahraga */}
              <Image
                src="/assets/faq/selectedOlahraga.png"
                alt="Olahraga"
                width={0}
                height={0}
                style={{
                  height: '100%',
                  width: '100%',
                  objectFit: 'cover',
                  objectPosition: 'bottom',
                }}
                className=""
              />
            </div>
          </button>
          <button
            onClick={() => filterByCategory('seni')}
            className={`duration-200 hover:scale-105`}
          >
            <div className="m-2 w-[128px] xxs:w-[148px] xs:h-[51.4px] md:w-[155px] lg:w-[170px]">
              {/* Seni */}
              <Image
                src="/assets/faq/selectedSeni.png"
                alt="Seni"
                width={0}
                height={0}
                style={{
                  height: '100%',
                  width: '100%',
                  objectFit: 'cover',
                  objectPosition: 'bottom',
                }}
                className=""
              />
            </div>
          </button>
        </div>

        {/* ------ Content ------ */}
        <div className="mt-5 flex h-auto w-[90%] max-w-[1100px] md:mt-8">
          <div className="w-full p-2">
            {posts
              .filter((item) => category === 'semua' || item.category === category)
              .map((item) => (
                <div
                  key={item.id}
                  className="relative flex flex-col flex-wrap items-center justify-center font-montserrat"
                >
                  <button
                    onClick={() => toggleDropdown(item.id)}
                    className={`md: relative mb-3 w-full text-[100%] font-bold text-black ${
                      openFaqId === item.id ? 'h-auto' : 'h-[40vw] md:h-[13vw] lg:h-[9.8rem]'
                    }`}
                  >
                    {/* --- Question Box --- */}
                    <div
                      className="group relative h-full w-full"
                      data-aos="fade-up"
                      data-aos-duration="500"
                    >
                      <div className="relative flex items-center justify-center">
                        <div className="absolute z-10 flex h-[75%] w-[80%] items-center justify-center overflow-auto font-rockwell text-[3vw] text-red-500 md:text-[1.4vw] lg:h-[85%] lg:text-lg">
                          {item.question}
                        </div>
                        {/* Mobile */}
                        <Image
                          src="/assets/faq/questionBox-mobile.png"
                          alt="Question Box"
                          width={0}
                          height={0}
                          style={{
                            height: '100%',
                            width: '100%',
                            objectFit: 'cover',
                            objectPosition: 'bottom',
                          }}
                          className="relative z-0 md:hidden"
                        />
                        {/* PC */}
                        <Image
                          src="/assets/faq/questionBox-pc.png"
                          alt="Question Box PC"
                          width={0}
                          height={0}
                          style={{
                            height: '100%',
                            width: '100%',
                            objectFit: 'cover',
                            objectPosition: 'bottom',
                          }}
                          className="relative z-0 hidden md:block"
                        />
                        <div
                          className={`absolute -bottom-2 z-20 w-6 s:w-8 md:-bottom-1 md:w-5 lg:-bottom-2 lg:w-7 ${
                            openFaqId == item.id ? 'hidden' : ''
                          }`}
                        >
                          <Image
                            src="/assets/faq/arrow.png"
                            alt="Arrow"
                            width={0}
                            height={0}
                            style={{
                              height: '100%',
                              width: '100%',
                              objectFit: 'cover',
                              objectPosition: 'bottom',
                            }}
                            className=""
                          />
                        </div>
                        <div
                          className={`absolute -bottom-2 z-20 w-[95%] s:-bottom-4 md:w-[96.5%] ${
                            openFaqId == item.id ? 'hidden' : ''
                          }`}
                        >
                          <Image
                            src="/assets/faq/ropeClose.png"
                            alt="Rope (close)"
                            width={0}
                            height={0}
                            style={{
                              height: '100%',
                              width: '100%',
                              objectFit: 'cover',
                              objectPosition: 'bottom',
                            }}
                            className="md:scale-y-75"
                          />
                        </div>
                        <div
                          className={`absolute -bottom-[7vw] w-[95%] duration-500 ease-in-out md:-bottom-[6.2vw] md:w-[96.5%] lg:-bottom-[5.5vw] xl:-bottom-[4.7rem] ${
                            openFaqId == item.id
                              ? 'z-20'
                              : '-z-50 translate-y-[-105%] -scale-y-100 md:translate-y-0'
                          }`}
                        >
                          <Image
                            src="/assets/faq/ropeOpen.png"
                            alt="Rope (open)"
                            width={0}
                            height={0}
                            style={{
                              height: '100%',
                              width: '100%',
                              objectFit: 'cover',
                              objectPosition: 'bottom',
                            }}
                            className="md:scale-y-75"
                          />
                        </div>
                      </div>

                      {/* --- Answer Box --- */}
                      <div
                        className={`relative -z-20 mt-2 flex items-center justify-center duration-700 ease-in-out ${
                          openFaqId === item.id
                            ? 'mb-5'
                            : 'translate-y-[-100%] -scale-y-100 md:translate-y-[-110%]'
                        }`}
                      >
                        <div className="absolute flex h-[75%] w-full items-center justify-center">
                          {openFaqId === item.id && (
                            <div className="absolute z-10 flex h-full w-[80%] items-center justify-center overflow-auto font-rockwell text-[2.6vw] text-black md:h-[90%] md:text-[1.4vw] lg:text-lg">
                              {item.answer}
                            </div>
                          )}
                        </div>
                        {/* Mobile */}
                        <Image
                          src="/assets/faq/questionBox-mobile.png"
                          alt="Question Box"
                          width={0}
                          height={0}
                          style={{
                            height: '100%',
                            width: '100%',
                            objectFit: 'cover',
                            objectPosition: 'bottom',
                          }}
                          className="relative z-0 md:hidden"
                        />
                        {/* PC */}
                        <Image
                          src="/assets/faq/questionBox-pc.png"
                          alt="Question Box PC"
                          width={0}
                          height={0}
                          style={{
                            height: '100%',
                            width: '100%',
                            objectFit: 'cover',
                            objectPosition: 'bottom',
                          }}
                          className="relative z-0 hidden md:block"
                        />
                        <div
                          className={`absolute -bottom-2 z-10 w-6 rotate-180 s:w-8 md:w-5 lg:-bottom-3 lg:w-7 ${
                            openFaqId == item.id ? '' : 'hidden'
                          }`}
                        >
                          <Image
                            src="/assets/faq/arrow.png"
                            alt="Arrow"
                            width={0}
                            height={0}
                            style={{
                              height: '100%',
                              width: '100%',
                              objectFit: 'cover',
                              objectPosition: 'bottom',
                            }}
                            className=""
                          />
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Content
