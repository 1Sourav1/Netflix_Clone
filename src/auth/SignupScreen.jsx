import React, { useRef } from 'react';
import "../css/SignupScreen.css"
import { auth } from '../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';

const SignupScreen = () => {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = async (event) => {
        event.preventDefault();
        try {
            let user = await createUserWithEmailAndPassword(auth,
                emailRef.current.value,
                passwordRef.current.value)
            console.log(user)

        } catch (error) {
            console.log(error);
        }
    }

    const signIn = async (event) => {
        event.preventDefault();
        try {
            let user = await signInWithEmailAndPassword(auth,
                emailRef.current.value,
                passwordRef.current.value)
            console.log(user)

        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <div className='signupScreen'>
            <form>
                <h1>Sign In</h1>
                <input type="email" ref={emailRef} placeholder='Email' />
                <input type="password" ref={passwordRef} placeholder='Password' />
                <button type='submit' onClick={signIn}>Sign In</button>
                <h4>
                    <span className='signupScreen_gray'>New to Netflix? </span>
                    <span className='signupScreen_link' onClick={register}>Sign Up now.</span>
                </h4>
            </form>
        </div>
    )
}

export default SignupScreen