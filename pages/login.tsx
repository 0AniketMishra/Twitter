import Head from 'next/head'
import React from 'react'
import { auth, provider } from '../firebase'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function login() {
  
  const signIn = () => {
    getAuth();
    signInWithPopup(auth, provider)
  }
  return (
    <div>
     <Head>
        <title>Login | Twitter 2.0</title>
     </Head>

     <button className='ml-10' onClick={signIn}>Sign in with Google</button>
    </div>
  )
}

export default login