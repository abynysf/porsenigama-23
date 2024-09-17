import React from 'react'
import { Hero, Barisan } from '../../components/module/supporter/page'
import Footer from '@/components/layout/Footer'

export const metadata = {
  title: 'Supporter',
  description: 'Barisan Supporter',
}

export default function supporter() {
  return (
    <>
      <Hero />
      <Barisan />
      <Footer />
    </>
  )
}
