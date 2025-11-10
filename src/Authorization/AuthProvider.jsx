import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../firebase/Firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { Circles } from 'react-loader-spinner';


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();

const createUserWithEmailPasswordFunc = (email, password) => {
    setLoading(true)
return createUserWithEmailAndPassword(auth, email, password)
}
const signInWithEmailAndPasswordFunc = ( email, password) =>{
    setLoading(true)
   return signInWithEmailAndPassword(auth, email, password)
}
const signInWithGoogleFun = () =>{
    setLoading(true)
    return signInWithPopup(auth, provider)
}
const signoutUserFun = () =>{
    setLoading(true)
    return signOut(auth)
}
const updateProfileFunc = (displayName, photoURL) =>{
    setLoading(true)
  return  updateProfile(auth.currentUser, {
        displayName,
         photoURL
    })
}


const authInfo = {
    user,
    setUser,
    createUserWithEmailPasswordFunc,
    signInWithEmailAndPasswordFunc,
    signInWithGoogleFun,
    signoutUserFun,
    updateProfileFunc,
    loading,
    setLoading

}
useEffect(()=>{
const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
setUser(currentUser)
setLoading(false)
});
return  ()=>{
unsubscribe();
}

},[])




    return <AuthContext value={authInfo}>{children}</AuthContext>
};

export default AuthProvider;