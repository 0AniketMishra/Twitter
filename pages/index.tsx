import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'
import Wigets from '../components/Wigets'
import React from 'react'
import { fetchTweets } from '../utils/fetchTweets'
import { Tweet } from '../typings'
import { Toaster } from 'react-hot-toast'





interface Props{
  tweets: Tweet[]
}
const Home =  ({tweets}: Props) => {
  // console.log(tweets)
  return (
    

    <div>
      <Head>
        <title>Twitter 2.0</title>
      </Head>
    <Toaster
  position="top-center"
  reverseOrder={false}
/>
      <main className='grid grid-cols-10'>
    
  
  {/* Sidebar */}
  <Sidebar tweets={[]}/>

  

  {/* Feed */}

  <Feed tweets={tweets}/>
  

  {/* Wigets */}

  <Wigets/>

  

 

 </main>
    </div>
  )
}

export default Home


export const getServerSideProps: GetServerSideProps = async (context) => {
  const tweets = await fetchTweets();
  return{
    props: {
       tweets,
    }
  }
}
