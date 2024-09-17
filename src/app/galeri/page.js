import React from 'react'
import { Hero, Galeri } from '../../components/module/galeri/page'
import Footer from '@/components/layout/Footer'

export const metadata = {
  title: 'Galeri',
  description: 'Galeri',
}

export default function galeri() {
  return (
    <section className="overflow-hidden">
      <Hero />
      <Galeri />
      <Footer />
    </section>
  )
}
