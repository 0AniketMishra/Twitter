import { useSession } from 'next-auth/react'
import React, { Dispatch, MouseEvent, useState, useRef, SetStateAction } from 'react'
import toast from 'react-hot-toast'
import { Tweet, TweetBody } from '../typings'
import { fetchTweets } from '../utils/fetchTweets'
// import { addTweets} from '../pages/api/addTweet'

interface Props {
  setTweets: Dispatch<SetStateAction<Tweet[]>>
}
function TweetBox({setTweets} : Props) {
  const {data: session} = useSession()
   const [input, setInput] = useState<string>('')
   const [image, setImage] = useState<string>('')

   const imageInputRef = useRef<HTMLInputElement>(null)

   const [imageUrlBoxIsOpen, setImageUrlBoxIsOpen] = 
   useState<boolean>(false)


   const addImageToTweet = (
    e: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent> 
    ) => {
      e.preventDefault()

     if(!imageInputRef.current?.value) return;

     setImage(imageInputRef.current.value)
     imageInputRef.current.value = ''
     setImageUrlBoxIsOpen(false)
   }


   
const postTweet = async () => {
  const tweetInfo: TweetBody = {
    text: input,
    username:  session?.user?.name || 'Unknown User',
    profileImg:  session?.user?.image || 'https://th.bing.com/th/id/OIP.puMo9ITfruXP8iQx9cYcqwHaGJ?pid=ImgDet&rs=1',
    image: image,
  }


  const result = await fetch(`/api/addTweet`  ,{
    body: JSON.stringify(tweetInfo),
    method: 'POST',
  })


  const json = await result.json();
  const newTweets = await fetchTweets(); 
  setTweets(newTweets)
  return json
}
const handleSubmit = (
  e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
  e.preventDefault()
  const tweetToast = toast.loading('Posting Tweet...')

  postTweet()
  setInput('')
  setImage('')
  setImageUrlBoxIsOpen(false)
   
  console.log('WOOHOO we made it', result)
  toast.success('Tweet Posted Successfully', {
    id: tweetToast
  })

  }
  

  return (
    
    <div className='flex space-x-2 p-5 mr-5  mt-8 border-b-2 border-gray-200' >
        <img className="h-14 w-14 object-cover rounded-full" src={session?.user?.image || 'https://th.bing.com/th/id/OIP.puMo9ITfruXP8iQx9cYcqwHaGJ?pid=ImgDet&rs=1'} alt="" />
        <div className='flex flex-1 items-center pl-2'>
            <form action="" className='flex flex-1 flex-col'>
                <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="What's Happening ?" className='h-12 w-full text-xl outline-none placeholder:text-xl'/>
              <div className='flex items-center '>
              <div className='flex space-x-2 flex-1 text-twitter'>
                <svg onClick={() => setImageUrlBoxIsOpen(!imageUrlBoxIsOpen)} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                </div>
              
                <button onClick={handleSubmit} disabled={!input || !session} className=' cursor-pointer bg-twitter px-4 ml-2 mr-4 py-2 font-bold text-white disabled:opacity-50 rounded-full shadow-xl'>Tweet</button>
                
                </div>


                {imageUrlBoxIsOpen &&(
                  <form className='mt-5 flex rounded-lg bg-gray-100 py-2 px-4'>
                    <input 
                    ref={imageInputRef}
                    className='flex-1 bg-transparent p-2 text-gray-400 outline-none placeholder:text-gray font-bold'
                     type="text"  placeholder='Enter Image Url..'/>
                    <button 
                    type="submit"

                     onClick={ addImageToTweet }
                     className='bg-white p-2 rounded-lg font-bold'>Add Image</button>
                  </form>
                )}

                {image && (
                  <img className='mt-10 w-40 rounded-xl' src={image}/>
                )}
            </form>
            
        </div>
        
    </div>
  )
}


export default TweetBox

function result(arg0: string, result: any) {
  throw new Error('Function not implemented.')
}
