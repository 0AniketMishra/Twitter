import Head from 'next/head'
import React from 'react'
import { auth, provider } from '../firebase'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import styles from '../styles/nav.module.css'

function login() {
  
  const signIn = () => {
    getAuth();
    signInWithPopup(auth, provider)
  }
  return (
    <div className={styles.bg}>
     <Head>
        <title>Login | Twitter 2.0</title>
     </Head>
    <div className={styles.center3}>
    

        <button className='p-2 font-bold text-white text-xl bg-purple-800 rounded-lg' onClick={signIn}>Sign In Using Google</button>

    </div>
    </div>
  )
}

export default login