import React from 'react'
import image from '@/images/icon.png'
import Header from '@/components/header'

const IndexPage = (): JSX.Element => {
  return (
    <>
      <Header />
      <h1>Home page</h1>
      <h2>HELLO WORLD</h2>
      <img src={image} alt="no image"/>
    </>
  )
}

export default IndexPage
