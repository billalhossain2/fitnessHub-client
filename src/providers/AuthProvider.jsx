import { useEffect, useState } from "react";
import { createContext } from "react"
export const authContext = createContext();

import app from "../firebase/firebase.config";
import {getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut} from "firebase/auth"
import axios from "axios";
const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const signInWithGoogle = ()=>signInWithPopup(auth, googleProvider)

    const signUpWithEmailPwd = (email, password)=>createUserWithEmailAndPassword(auth, email, password)

    const updateUserProfile = (displayName, photoURL)=>updateProfile(auth.currentUser, {displayName, photoURL})

    const signInEmailPwd = (email, password) => signInWithEmailAndPassword(auth, email, password)

    const signOutUser = ()=>signOut(auth)

    const userInfo = {
        user,
        loading,
        signInWithGoogle,
        signUpWithEmailPwd,
        updateUserProfile,
        signInEmailPwd,
        signOutUser
    }

    useEffect(()=>{
      const unSubscribe = onAuthStateChanged(auth, currentUser=>{
        setUser(currentUser);
        setLoading(false)
      })

      return ()=>unSubscribe()
    },[])

  return (
    <authContext.Provider value={userInfo}>
        {children}
    </authContext.Provider>
  )
}

export default AuthProvider