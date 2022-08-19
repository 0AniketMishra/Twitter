import '../styles/globals.css'
import { AppProps } from 'next/app';
import {useAuthState} from "react-firebase-hooks/auth"
import {auth , db} from '../firebase'
import Loading from '../components/Loading'
import Login from './login'
import { useEffect } from 'react';
import firebase from 'firebase/compat/app';

function MyApp({ Component, pageProps}: any) {
  const [user , loading] = useAuthState(auth)
  useEffect(() => {
    if(user) {
      db.collection('users').doc(user.uid).set({
        email: user.email, 
        lastSeem: firebase.firestore.FieldValue.serverTimestamp(), 
        photoURL: user.photoURL, 
        username: user.displayName,
        phone: user.phoneNumber, 
        password : user.providerData

      }, 
      {merge: true}); 
    }
  }, [user])
    
  if (loading) return <Loading/>
  if(!user) return <Login/>
  return <Component {...pageProps}/>
}

export default MyApp
