import React from 'react'
import{signInWithPopup} from 'firebase/auth'
import {auth , googleAuthProvider } from '../../config/firebase'

function login() {

    const onGoogleLogin = async () 

  return (
    <div>
        <h3>Log-In</h3>
        <button onClick={onGoogle}>Login With Google</button>
    </div>
  )
}

export default login