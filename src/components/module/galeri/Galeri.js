'use client'
import Image from 'next/image'

export function Galeri() {
  const images = [
    [
      {
        id: 1,
        src: '/assets/galeri/galeri/section1/galeri-img1-section1.png',
        alt: 'section1-image-1',
        style: 'w-[51vw] h-[48.125vw] md:w-1/2 md:h-1/2',
      },
      {
        id: 2,
        src: '/assets/galeri/galeri/section1/galeri-img2-section1.png',
        alt: 'section1-image-2',
        style: 'w-[41.5625vw] h-[60.6vw] md:w-1/3 md:h-1/2',
      },
      {
        id: 3,
        src: '/assets/galeri/galeri/section1/galeri-img3-section1.png',
        alt: 'section1-image-3',
        style: 'w-[51.5625vw] h-[70.9375vw] mt-[-10vw] md:w-1/2 md:h-1/2 md:mt-0',
      },
      {
        id: 4,
        src: '/assets/galeri/galeri/section1/galeri-img4-section1.png',
        alt: 'section1-image-4',
        style: 'w-[41.5625vw] h-[33.4375vw] md:w-1/3 md:h-1/3 mt-[0vw]',
      },
      {
        id: 5,
        src: '/assets/galeri/galeri/section1/galeri-img5-section1.png',
        alt: 'section1-image-5',
        style: 'w-[51.5625vw] h-[33.4375vw] mt-[2.1vw] md:w-1/2 md:h-1/2 md:mt-[0]',
      },
      {
        id: 6,
        src: '/assets/galeri/galeri/section1/galeri-img6-section1.png',
        alt: 'section1-image-6',
        style: 'w-[40.9375vw] h-[91.5625vw] mt-[-27vw]  md:w-1/3 md:h-[35.15625vw] md:mt-[-13.7vw]',
      },
      {
        id: 7,
        src: '/assets/galeri/galeri/section1/galeri-img7-section1.png',
        alt: 'section1-image-7',
        style: 'w-[51.5625vw] h-[85.9375vw] mt-[-27.5vw] md:w-1/2 md:h-1/2 md:mt-[-8.5vw]',
      },
      {
        id: 8,
        src: '/assets/galeri/galeri/section1/galeri-img8-section1.png',
        alt: 'section1-image-8',
        style: 'w-[40.9375vw] h-[29.6875vw] mt-[1vw] md:w-1/3 md:h-1/2 md:scale-y-125',
      },
      {
        id: 9,
        src: '/assets/galeri/galeri/section1/galeri-img9-section1.png',
        alt: 'section1-image-9',
        style:
          'w-[40.9375vw] h-[24.6875vw] mt-[-27vw] ml-[52vw] md:w-1/3 md:h-1/2 md:mt-[-8vw] md:ml-auto md:mr-[2.4vw] md:scale-y-125',
      },
    ],
    [
      {
        id: 1,
        src: '/assets/galeri/galeri/section2/galeri-img1-section2.png',
        alt: 'section2-image-1',
        style:
          'w-[123.75vw] scale-[0.80] h-[77.8125vw] md:h-[17.182291666666664vw] md:mt-[-1.5vw] md:scale-[0.85]',
      },
      {
        id: 2,
        src: '/assets/galeri/galeri/section2/galeri-img2-section2.png',
        alt: 'section2-image-2',
        style:
          'scale-[0.65] w-[55.93749999999999vw] h-[54.0625vw] mr-auto mt-[-10vw] md:w-1/2 md:h-1/2 md:mt-[-2vw] md:scale-[0.80] md:ml-[1vw]',
      },
      {
        id: 3,
        src: '/assets/galeri/galeri/section2/galeri-img3-section2.png',
        alt: 'section2-image-3',
        style:
          'scale-[0.65] w-[59.375vw] h-[119.68749999999999vwr] mt-[-67vw] ml-auto md:w-1/2 md:h-1/2 md:mt-[-17.9vw] md:scale-[0.80] md:mr-[1vw]',
      },
      {
        id: 4,
        src: '/assets/galeri/galeri/section2/galeri-img4-section2.png',
        alt: 'section2-image-4',
        style:
          'scale-[0.65] w-[55.93749999999999vw] h-[54.6875vw] mr-auto mt-[-68vw] md:w-1/2 md:h-1/2 md:mt-[-18vw] md:scale-[0.80] md:ml-[1vw]',
      },
      {
        id: 5,
        src: '/assets/galeri/galeri/section2/galeri-img5-section2.png',
        alt: 'section2-image-5',
        style:
          'scale-[0.85] w-[129.0625vw] h-[103.75000000000001vw] mt-[-25vw] md:h-1/2 md:mt-[-5vw]',
      },
      {
        id: 6,
        src: '/assets/galeri/galeri/section2/galeri-img6-section2.png',
        alt: 'section2-image-6',
        style:
          'scale-[0.65] w-[59.375vw] h-[56.875vw] mt-[-14vw] mr-auto ml-[-3vw] md:w-1/2 md:h-1/2 md:scale-[0.8] md:mt-[-3vw] md:ml-[1vw]',
      },
      {
        id: 7,
        src: '/assets/galeri/galeri/section2/galeri-img7-section2.png',
        alt: 'section2-image-7',
        style:
          'scale-[0.65] w-[61.5625vw] h-[56.875vw] mt-[-58.2vw] ml-auto mr-[-3vw] md:w-1/2 md:h-1/2 md:scale-[0.8] md:mt-[-16vw] md:mr-[1vw]',
      },
    ],
    [
      {
        id: 1,
        src: '/assets/galeri/galeri/section2/galeri-img2-section2.png',
        alt: 'section3-image-1',
        style:
          'w-[37.5vw] h-[35.3125vw] mr-auto ml-[8vw] mt-[-6vw] scale-[0.92] md:w-1/3 md:h-1/3 md:ml-0 md:mt-[-1vw]',
      },
      {
        id: 2,
        src: '/assets/galeri/galeri/section1/galeri-img2-section1.png',
        alt: 'section3-image-2',
        style:
          'w-[37.5vw] h-[55.3125vw] mr-[10vw] mt-[-5vw] md:w-1/3 md:h-1/3 md:ml-auto md:mr-[10vw] md:mt-[-.5vw]',
      },
      {
        id: 3,
        src: '/assets/galeri/galeri/section1/galeri-img4-section1.png',
        alt: 'section3-image-3',
        style:
          'w-[35.9375vw] h-[29.6875vw] mt-[-12vw] mr-[3vw] scale-[0.99] md:w-[11vw] md:h-1/2 md:mr-auto md:mt-[-5vw]',
      },
      {
        id: 4,
        src: '/assets/galeri/galeri/section2/galeri-img4-section2.png',
        alt: 'section3-image-4',
        style:
          'w-[37.1875vw] h-[35.9375vw] mt-[5vw] mr-[2vw] md:w-1/3 md:h-1/2 md:mt-[2vw] md:ml-auto md:mr-[10vw]',
      },
      {
        id: 5,
        src: '/assets/galeri/galeri/section1/galeri-img6-section1.png',
        alt: 'section3-image-5',
        style:
          'w-[36.25vw] h-[79.6875vw] mt-[-14vw] mr-auto ml-[8vw] scale-[0.99] md:w-[11.020833333333334vw] md:h-[32.0625vw] md:mt-[-8vw] md:mr-[30vw]',
      },
      {
        id: 6,
        src: '/assets/galeri/galeri/section1/galeri-img8-section1.png',
        alt: 'section3-image-6',
        style:
          'w-[37.8125vw] h-[27.187499999999996vw] mt-[5vw] mr-[10vw] md:w-1/3 md:h-1/3 md:mt-0 md:ml-auto md:mt-[-23vw]',
      },
      {
        id: 7,
        src: '/assets/galeri/galeri/section1/galeri-img9-section1.png',
        alt: 'section3-image-7',
        style:
          'w-[37.5vw] h-[22.8125vw] mt-[-25vw] ml-[40vw] md:w-1/3 md:h-[7.8125vw] md:mt-[-13vw] md:mr-[38vw]',
      },
      {
        id: 8,
        src: '/assets/galeri/galeri/section2/galeri-img2-section2.png',
        alt: 'section3-image-8',
        style:
          'w-[36.25vw] h-[35vw] mr-auto ml-[8vw] md:w-[11.3vw] md:h-[11.0625vw] md:mr-[29.8vw]',
      },
      {
        id: 9,
        src: '/assets/galeri/galeri/section2/galeri-img3-section2.png',
        alt: 'section3-image-9',
        style:
          'w-[36.25vw] h-[77.5vw] ml-auto mr-[10vw] md:w-1/3 md:h-[28.645833333333332vw] md:mt-[-15vw]',
      },
      {
        id: 10,
        src: '/assets/galeri/galeri/section2/galeri-img4-section2.png',
        alt: 'section3-image-10',
        style:
          'w-[35.9375vw] h-[34.6875vw] mt-[-35vw] mr-auto ml-[8vw] md:w-[11.3vw] md:h-[12.0625vw] md:mt-[-12.5vw] md:mr-[30.2vw]',
      },
    ],
  ]
  return (
    <section className="relative">
      <div className="md:flex-now flex h-fit flex-col items-start px-[5px] py-[10vw] md:relative md:top-0 md:grid md:translate-x-[2.7vw] md:grid-cols-3">
        {images.map((section, index) => {
          return (
            <div
              key={index}
              className={`mx-auto flex flex-wrap justify-center gap-1 md:w-full ${
                index === 0 ? 'translate-x-[2.3vw]' : 'justify-center'
              }`}
            >
              {section.map((image) => (
                <Image
                  src={image.src}
                  width={1000}
                  height={1000}
                  alt={image.alt}
                  className={image.style}
                />
              ))}
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Galeri
