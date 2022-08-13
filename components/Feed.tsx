import React, { useState } from 'react'
import { Tweet } from '../typings'
import TweetBox from './TweetBox'
import TweetComponent from '../components/Tweet'
import { fetchTweets } from '../utils/fetchTweets'
import { useEffect } from 'react';
import { useSession } from 'next-auth/react'
import toast from 'react-hot-toast'

interface Props {
  tweets: Tweet[]
}

function Feed({ tweets: tweetsProp }: Props) {

  const [tweets, setTweets] = useState<Tweet[]>(tweetsProp)
  // console.log(tweets)

  const handleRefresh = async () => {
    const refreshToast = toast.loading("Refreshing...")
    const tweets = await fetchTweets();
    setTweets(tweets)
    toast.success('Feed Updated!', {
       id: refreshToast
    })

  }

  return (
    <div className=' scrollbar-hide flex-col col-span-8 lg:col-span-7 mt-10 lg:ml-24'>


      <div className='flex items-center justify-between '>
        <h1 className='p-5 pb-0 text-xl font-bold'>Home</h1>
        <svg onClick={handleRefresh} xmlns="http://www.w3.org/2000/svg" className="w-6  h-6 mt-4 mr-4 cursor-pointer text-twitter transition-all duration-500 ease-out hover:rotate-180 active:scale-125" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>

      </div>
      <TweetBox setTweets={setTweets} />

      <div>
        {tweets.map(tweet => (
          <TweetComponent key={tweet._id} tweet={tweet} />
        ))}
      </div>
    </div>

  )
}

export default Feed