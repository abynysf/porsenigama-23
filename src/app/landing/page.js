import Landing from '../../components/module/landing/Landing'
import React from 'react'
import RootLayout from '../layout'

export const metadata = {
  title: 'Landing',
  description: 'Landing',
}

export default function page() {
  return (
    <div>
      <Landing />
    </div>
  )
}
