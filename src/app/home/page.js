import Image from 'next/image'
import { Hero, Timeline, About, Porchi, Cabor, Sponsor } from '../../components/module/beranda/page'
import Footer from '../../components/layout/Footer'

export default function page() {
  return (
    <div className="overflow-hidden">
      <div className="absolute top-[120vw] z-[200] h-full w-full md:bottom-0 md:hidden">
        <Image
          src="/assets/beranda/journey.png"
          width={0}
          height={0}
          style={{
            width: '100%',
            objectFit: 'contain',
            objectPosition: 'bottom',
          }}
          className="md:hidden"
          alt="hero-bg"
        />
      </div>
      <div className="absolute top-[88vh] hidden h-full w-full md:block lg:top-[82vh] 2xl:top-[84vh]">
        <Image
          src="/assets/beranda/Layer1.png"
          width={1000}
          height={1000}
          o
          className="relative z-[200] mx-auto hidden h-auto md:block md:w-[768px] lg:w-[1024px] xl:w-[1250px] 2xl:w-[1350px] "
        ></Image>
      </div>
      <Hero />
      <Timeline />
      <About />
      <Porchi />
      <Cabor />
      <Sponsor />
      <Footer type="type1" />
    </div>
  )
}
