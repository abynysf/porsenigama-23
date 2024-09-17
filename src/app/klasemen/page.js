import React from 'react'
import { ContentKlasemen, HeroKlasemen, KlasemenTable } from '../../components/module/klasemen/page'
import Footer from '@/components/layout/Footer'

export const metadata = {
  title: 'Klasemen',
  description: 'Klasemendata',
}

export default function Klasemen() {
  return (
    <div>
      <HeroKlasemen />
      <ContentKlasemen />
      <KlasemenTable />
      <Footer type="type2" />
    </div>
  )
}
