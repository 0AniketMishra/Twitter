import React, { useEffect, useState } from 'react'
import TimeAgo from 'react-timeago'
import { fetchComments } from '../utils/fetchComments'
import {useSession, signIn, signOut} from 'next-auth/react'
import { Comment, CommentBody, Tweet } from '../typings'
import toast from 'react-hot-toast'
import { Provider, LikeButton } from "@lyket/react";
import { auth, db } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollection } from 'react-firebase-hooks/firestore'



interface Props{
    tweet: Tweet
}

function Tweet({tweet}: Props) {


  const [user] = useAuthState(auth);
  const [like, setlike] = useState<boolean>(false)

  const [comments, setComments] = useState<Comment[]>([])
  const [commentBoxVisible, setCommentBoxVisible] = useState<boolean>(false)
  const [replyBoxVisible, setreplyBoxVisible] = useState<boolean>(false)
  const [input , setInput] = useState<string>('')

  const refreshComments = async () => {
    const comments: Comment[] = await fetchComments(tweet._id)
     setComments(comments)
  }
  let user2 = "@" + tweet.username.replace(/\s+/g, '').toLowerCase()


  useEffect(() => {
    refreshComments()
  }, [])
  // console.log(comments)


  let count = 0
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    
    e.preventDefault()

    const commentToast  = toast.loading('Posting Comment...')

    // Comment logic
    const comment: CommentBody = {
      comment: input,
      tweetId: tweet._id,
      username:  user.displayName || 'Unknown User',
      profileImg: user.photoURL || 'https://links.papareact.com/gll',
    }

    const result = await fetch(`/api/addComment`, {
      body: JSON.stringify(comment),
      method: 'POST',
    })

    

    console.log('WOOHOO we made it', result)
    toast.success('Comment Posted!', {
      id: commentToast,
    })
    

    setInput('')
    setCommentBoxVisible(false)
    setreplyBoxVisible(false)
    refreshComments()
  }
  const handleSubmit2 = async (e: React.FormEvent<HTMLFormElement>) => {
    
    e.preventDefault()

    const commentToast = toast.loading('Posting Comment...')

    // Comment logic
    const comment: CommentBody = {
      comment: user +" : "  +input,
      tweetId: tweet._id,
      username:  user.displayName || 'Unknown User',
      profileImg: user.photoURL || 'https://links.papareact.com/gll',
    }

    const result = await fetch(`/api/addComment`, {
      body: JSON.stringify(comment),
      method: 'POST',
    })



    console.log('WOOHOO we made it', result)
    toast.success('Comment Posted!', {
      id: commentToast,
    })


    setInput('')
    setCommentBoxVisible(false)
    setreplyBoxVisible(false)
    refreshComments()
  }
  return (
   

    <div className='flex flex-col space-x-3 p-1 border-b border-gray-300 rounded-xl w-xl '>
     <div className=' flex space-x-3 my-10 '>
     <img className=' w-10 h-10 rounded-full object-cover ' src={tweet.profileImg} alt="" />
    
     <div>
        <div className='flex items-center space-x-1 mt-2'>
           
        <p className='mr-1 font-bold '>{tweet.username}</p>
            <p className='hidden text-sm text-gray-500 sm:inline'>@{tweet.username.replace(/\s+/g ,'').toLowerCase()}</p>
             

            
            
        </div>
        <TimeAgo
            className='text-sm text-gray-500'
              date = {tweet._createdAt}
            />
        
        <p className='pt-1 mt-2'>{tweet.text}</p>
        {tweet.image && <img className='m-5 ml-0 mb-1 max-h-60 rounded-lg object-cover shadow-xl ' src={tweet.image} alt=""/>}
     </div>
     </div >
     
     <div className='mt-0 flex' >
        <div onClick={() =>  setCommentBoxVisible(!commentBoxVisible)} className=' w-12 flex cursor-pointer items-center space-x-3 ml-10 mb-4'> 
          
        <svg   xmlns="http://www.w3.org/2000/svg" className="" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
</svg>
<h4>{comments.length}</h4>

        </div>
        <div onClick={() =>  setreplyBoxVisible(!replyBoxVisible)}>
        <svg   xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex cursor-pointer items-center space-x-3 ml-10 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
</svg>
   
        </div>
        <div>
          {/* <svg  xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex cursor-pointer items-center space-x-3 ml-10 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
</svg> */}
          <Provider apiKey="pt_fbe21889125a3828215e8d1accdc28">
            <LikeButton
              id= {tweet._id}
              namespace="faq"
              hideCounterIfLessThan={1}
            >
              {({
                handlePress,
                totalLikes,
                userLiked,
                isLoading,
                isCounterVisible
              }) => (
                <>
                  <button className='flex' onClick={handlePress} disabled={isLoading}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex cursor-pointer items-center space-x-3 ml-10 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <h4 className='ml-2'>{totalLikes}</h4>
                  </button>
                  {/* {isCounterVisible && <div>Total: {totalLikes}</div>}
                  {userLiked && <div>Great! I like pizza as well!</div>} */}
                </>
              )}
            </LikeButton>
          </Provider>
      
{/* <h4>{totalLikes}</h4>        */}
     
        </div>
        <div>
        <svg   xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex cursor-pointer items-center space-x-3 ml-10 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
</svg>
        </div>
     </div>


{commentBoxVisible && (
  <div>
  <form onSubmit={handleSubmit} className='mt-3 flex space-x-3'>
    <input type="text" value={input} onChange={(e) => setInput(e.target.value)}
    className='flex-1 rounded-lg bg-gray-100 p-2 outline-none'
     placeholder='Write a Comment...'/>
    <button 
    disabled={!input} type='submit'     className='disabled:text-gray-200 even: p-1 rounded-lg ml-2 w-20 font-bold text-black bg-blue-100'>Post</button>
  </form>

          {comments?.length > 0 && (
             
            <div className='my-2 mt-5  space-y-5  p-5'>
              <h6 className="font-bold">Comments - </h6>
              {comments.map(comment => (
                <div key={comment._id} className=" relative flex space-x-2">
                  {/* <hr className='absolute left-7 top-10 h-8
                  
                  ' /> */}
                  <img src={comment.profileImg}
                    className=" h-8 w-8 rounded-full object-cover"
                    alt="" />
                  <div>
                    <div className='flex items-center space-x-1'>
                      <h3 className='mr-1 font-bold'>{comment.username}</h3>
                      <h4 className='hidden text-sm text-gray-500 lg:inline'>@{comment.username.replace(/\s+/g, '').toLowerCase()}</h4>


                    </div>
                    <TimeAgo
                      className='text-sm text-gray-500'
                      date={comment._createdAt}
                    />
                    <h3 className='mt-2'>{comment.comment}</h3>
                  </div>

                </div>
              ))}
            </div>
          )}
  </div>

  
)}
      {replyBoxVisible && (
        <form onSubmit={handleSubmit2} className='mt-3 flex space-x-3'>
          <input type="text" value={input} onChange={(e) => setInput(e.target.value)}
            className='flex-1 rounded-lg bg-gray-100 p-2 outline-none'
            placeholder='Write a Comment To Replying To The User...' />
          <button
            disabled={!input} type='submit' className='disabled:text-gray-200 even: p-1 rounded-lg ml-2 w-20 font-bold text-black bg-blue-100'>Post</button>
        </form>
      )}
      
 

      
      {/* {comments?.length > 0 && (
        <div className="my-2 mt-5 max-h-44 space-y-5 overflow-y-scroll-100 p-5">
          {comments.map((comment) => (
            <div key={comment._id} className="relative flex space-x-2">
              <hr className="absolute left-5 top-10 h-8 ter/30" />
              <img
                src={comment.profileImg}
                className="mt-2 h-7 w-7 rounded-full object-cover"
                alt=""
              />
              <div>
                <div className="flex items-center space-x-1">
                  <p className="mr-1 font-bold">{comment.username}</p>
                  <p className="hidden text-sm text-gray-500 lg:inline">
                    @{comment.username.replace(/\s+/g, '').toLowerCase()} ·
                  </p>

                  <TimeAgo
                    className="text-sm text-gray-500"
                    date={comment._createdAt}
                  />
                </div>
                <p>{comment.comment}</p>
              </div>
            </div>
          ))}
        </div>
      )} */}
    
       
    </div>
  )
}

export default Tweet