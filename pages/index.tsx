import type { NextPage } from 'next'
import Head from 'next/head'

//components
import HomeHeader from '../components/home/HomeHeader'
import News from '../components/home/News'
import Pricing from '../components/home/Pricing'
import Questions from '../components/home/Questions'
import Services from '../components/home/Services'


const Home: NextPage = () => {
  return (
    <>
    <Head>
    <link rel="stylesheet" href="css/index.css" />
    </Head>
      <HomeHeader />
      <Services />
      <News />
      <Pricing />
      <Questions />

      
    </>
  )
}

export default Home
