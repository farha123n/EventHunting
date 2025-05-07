// src/Provider/AuthProvider.jsx
import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Utility/firebase.config';


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState('');
  const [loading,setLoading]=useState(true)
  const [email, setEmail] = useState('');
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
     const logIn=(email,password)=>{
      return signInWithEmailAndPassword(auth, email, password)
     }
     const logOut=()=>{
      return signOut(auth)
     }
     const updateUser=(update)=>{
      return updateProfile(auth.currentUser,update)
  }
     useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
          setLoading(false);
      });
      return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    setUser,
    createUser,logIn,logOut,updateUser,email,setEmail
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
