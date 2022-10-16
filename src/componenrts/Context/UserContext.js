import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'


export const AuthContext = createContext();
const auth = getAuth(app)

const UserContext = ({ children }) => {

    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState({ displayName: 'Akash' })
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth,email, password)
    }
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
       return signOut(auth)
    }

//why are we doing this ?
    useEffect(() => {
      const unsubscribe =  onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            console.log('auth state changed', currentUser)
            
      })
        return () => {
            unsubscribe();
        }
    },[])
    
    const authInfo = {user,createUser,signIn,logOut,signInWithGoogle}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
      </AuthContext.Provider>
    );
};

export default UserContext;