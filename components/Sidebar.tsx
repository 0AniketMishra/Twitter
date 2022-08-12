import {useSession, signIn, signOut} from 'next-auth/react'
import React, { useState } from 'react'
import { Tweet } from '../typings'
import TweetBox from './TweetBox'
import TweetComponent from '../components/Tweet'
import { fetchTweets } from '../utils/fetchTweets'
import toast, { Toaster } from 'react-hot-toast';
import Link from 'next/link'
interface Props{
  tweets: Tweet[]
  onClick?: () => {}
}
import styles from '../styles/nav.module.css'




function Sidebar({ tweets: tweetsProp , onClick}: Props) {

  const {data: session} = useSession()
    

 

  

    const [tweets, setTweets] = useState<Tweet[]>(tweetsProp)
  // console.log(tweets)

  const handleRefreshh = async () => {
    const refreshToast = toast.loading("Refreshing...")
    const tweets  = await fetchTweets();
    setTweets(tweets)
    toast.success("Feed Updated!", {
      id: refreshToast

    })
  }
  return (
    <div className='' >
        
       
  <header className='fixed top-0 w-full '>     
<div className="relative z-20  bg-white flex"  >
    <div className="px-6 md:px-12 lg:container lg:mx-auto lg:px-6 lg:py-3">
      <div className="flex items-center ">
        <div className="relative z-20  ">
          
        </div>
        <div className='flex items-center justify-between z-20 '>
        
          
          <img src="https://th.bing.com/th/id/R.3f7189662f19f8318fc75252deee723a?rik=Qa956Np1tp8Zcg&riu=http%3a%2f%2f1000logos.net%2fwp-content%2fuploads%2f2017%2f06%2fTwitter-Logo.png&ehk=6ekNd2ZmhpvFDGRZF19QcumP9fb8pZRkwrbFbK%2bpULA%3d&risl=&pid=ImgRaw&r=0" className='w-10 h-10 fixed left-6 top-2'></img>
            {/* <h1 className='font-bold text-xl text-center'>Twitter</h1> */}
            
          
          
          </div>
        <div className="flex  border-0 fixed right-4 mt-12" >
        <input type="checkbox" name="hamburger" id="hamburger" className="peer " hidden/>
          <label htmlFor="hamburger" className="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden">
            <div aria-hidden="true" className="m-auto h-0.5 w-4 rounded bg-black transition duration-400"></div>
            <div aria-hidden="true" className="m-auto mt-1 h-0.5 w-4 rounded bg-black transition duration-400"></div>
            <div aria-hidden="true" className=" mt-1 h-0.5 w-4 rounded bg-black transition duration-400"></div>
          </label>

          
        

          

          <div className="peer-checked:translate-x-0 fixed inset-0 w-[calc(80%-4.5rem)] translate-x-[-100%] bg-white shadow-xl transition duration-300 lg:w-[calc(18%-4.5rem)] lg:translate-x-[0%] lg:shadow-none">
            <div className="flex flex-col h-full  ">
              <ul className=" pt-20 text-gray-900 space-y-8  px-4 " >
                <li>
                <Link href="/" >
                <a  className="flex items-center  hover:text-twitter  max-w-fit p-2 rounded-full  hover:bg-gray-100  transition-all duration-200 group relative text-black before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0 before:text-cyan-100 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                 </svg>
                  <h1 className='px-1 cursor-pointer text-lg'> Home</h1>
                  </a>
                </Link>
 
                </li>
                <li>
                  <Link href="/blog" >
                  <a href="#" className="flex items-center  hover:text-twitter  max-w-fit p-2 rounded-full  hover:bg-gray-100  transition-all duration-200 group relative text-black before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0 before:text-cyan-100 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
    </svg>
    <h1 className='px-1 cursor-pointer text-lg'> Explore</h1>
                  </a>
                  </Link>
  
                </li>

                <li>
                <Link href="/blog" >

                <a href="#" className="flex items-center  hover:text-twitter  max-w-fit p-2 rounded-full  hover:bg-gray-100  transition-all duration-200 group relative text-black before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0 before:text-cyan-100 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
<path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
</svg>
<h1 className='px-1 cursor-pointer text-lg'>Notifications</h1>
                  </a>
                  </Link>

                </li>


                <li>
                <Link href="/blog" >
                <a href="#" className="flex items-center  hover:text-twitter  max-w-fit p-2 rounded-full  hover:bg-gray-100  transition-all duration-200 group relative text-black before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0 before:text-cyan-100 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
<path strokeLinecap="round" strokeLinejoin="round" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
</svg>
<h1 className='px-1 cursor-pointer '>Messages</h1>
                  </a>
                  </Link>


                  
                </li>

                <li>
               
                
              
                <div  className=' flex items-center  hover:text-twitter  max-w-fit p-2 rounded-full  hover:bg-gray-100  transition-all duration-200 group relative text-black before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0 before:text-cyan-100 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
</svg>
        <button onClick={ session ? signOut : signIn}>{session ? 'Sign Out' : 'Sign In'}</button>
                </div>
      
                
                
                  

                </li>
              </ul>

              <div className=" border-t  px-6 md:px-12 md:py-16 lg:border-t-0 lg:border-1 lg:py-0 lg:pr-0 lg:pl-0">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
</header>
    

    
    </div>
  )
  
}

export default Sidebar