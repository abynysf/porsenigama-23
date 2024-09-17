import { Hero, Content } from '../../components/module/faq/page'
import Image from 'next/image'
import Footer from '@/components/layout/Footer'

export const metadata = {
  title: 'FAQ',
  description: 'FAQ',
}

export default function FAQ() {
  return (
    <>
      <div className="relative h-full w-full overflow-x-hidden">
        <div className="absolute -z-20 h-full w-full bg-cover">
          <Image
            src="/assets/faq/Background.svg"
            width={0}
            height={0}
            style={{
              height: '100%',
              width: '100%',
              objectFit: 'cover',
              objectPosition: 'top',
              backgroundSize: 'cover',
            }}
            alt="hero-bg"
            className=""
          />
        </div>
        <Hero />
        <Content />
        <Footer type="type2" />
      </div>
    </>
  )
}
