import React, { useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../firebase/Firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
  const provider = new GoogleAuthProvider();

const createUserWithEmailPasswordFunc = (email, password) => {
return createUserWithEmailAndPassword(auth, email, password)
}
const signInWithEmailAndPasswordFunc = ( email, password) =>{
   return signInWithEmailAndPassword(auth, email, password)
}
const signInWithGoogleFun = () =>{
    return signInWithPopup(auth, provider)
}
const signoutUserFun = () =>{
    return signOut(auth)
}
const updateProfileFunc = (displayName, photoURL) =>{
  return  updateProfile(auth.user, {
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
    updateProfileFunc

}
onAuthStateChanged(auth, (currentUser) => {
setUser(currentUser)
})

    return <AuthContext value={authInfo}>{children}</AuthContext>
};

export default AuthProvider;