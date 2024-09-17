'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Redirect() {
  const { push } = useRouter()
  useEffect(() => {
    push('/landing')
  }, [push])
  return <div />
}
