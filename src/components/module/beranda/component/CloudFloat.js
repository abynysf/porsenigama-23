'use client'
import React, { useEffect, useState } from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const token = process.env.AUTH_KEY

const getPosts = async () => {
  const headers = {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTH}`,
  }

  const response = await fetch('https://ppsmb.ugm.ac.id/2022/strapi/api/psgklasemens', { headers })
  const data = await response.json()
  return data.data // Access the "data" property of the response
}

export default function GETAPI() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getPosts().then((data) => {
      setPosts(data)
    })
  }, [])

  console.log(process.env.NEXT_PUBLIC_BASE_PATH)
  console.log('auth', process.env.NEXT_PUBLIC_AUTH)

  return (
    <div className={inter.className}>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <p>Fakultas: {post.attributes.fakultas}</p>
            <p>Gold: {post.attributes.gold}</p>
            <p>Silver: {post.attributes.silver}</p>
            <p>Bronze: {post.attributes.bronze}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
