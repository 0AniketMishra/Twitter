import React from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

function Wigets() {
  return (

    <div className=' hidden md:hidden lg:inline flex-col col-span-2 right-0 mt-4'>
      <div className='flex items-center space-x-2 bg-gray-100 p-3 rounded-full mt-2 px-2 h-10'>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input type="text" placeholder='Search-Twitter' className='bg-transparent  outline-none' />
      </div>

      <div className='mt-5'>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="elonmusk"
          options={{ height: 1700 }}
        />
      </div>

    </div>



  )
}

export default Wigets