import React, { useState } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import * as EmailValidator from "email-validator"
function Chat_Sidebar() {
    const [InputBoxVisible, setInputBoxVisible] = useState<boolean>(false)
    const [input, setInput] = useState<string>('')
    const { data: session } = useSession()
if(EmailValidator.validate(input)){
    
}

  return (
    
          <div className='flex-col col-span-8 lg:col-span-7 mt-10 lg:ml-24 '>
              <div className='flex items-center justify-between '>
                  <h1 className='p-5 pb-0 text-xl font-bold'>Chats</h1>

                  <svg  xmlns="http://www.w3.org/2000/svg" className="w-6  h-6 mt-4 mr-4 cursor-pointer text-twitter transition-all duration-500 ease-out hover:rotate-180 active:scale-125" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  
              </div>

          <div className='mt-4'>
                <div className='flex'>
                  <h4>Your Personal Chat ID : </h4>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer hover:text-twitter" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
               <div className='mt-4'>
                  <button onClick={() => session && setInputBoxVisible(!InputBoxVisible)} className='bg-gray-200 font-bold p-1 rounded-lg '>Create New Chat</button>
               </div>
              </div>
          {InputBoxVisible && (
            <form  className='mt-3 flex space-x-3' >
                  <input type="text" value={input} onChange={(e) => setInput(e.target.value)}
                      className='flex-1 rounded-lg bg-gray-100 p-2 outline-none'
                      placeholder='Enter the email adress of the recepient' />
                  <button
                      disabled={!input}  type='submit' className=' disabled:text-gray-200 even: p-1  rounded-lg ml-2 w-20 font-bold text-black bg-blue-100'>Add</button>
              </form>
          )}
        </div>
           
  )
}

export default Chat_Sidebar