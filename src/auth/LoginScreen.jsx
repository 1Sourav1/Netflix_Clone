import React, { useState } from 'react';
import "../css/LoginScreen.css";
import Logo from "../image/Netflix-logo.png";
import SignupScreen from './SignupScreen';

const LoginScreen = () => {
    const [signIn, setsignIn] = useState(false);

    return (
        <div className='loginScreen'>
            <div className="loginScreen_background">
                <img className='loginScreen_logo' src={Logo} alt="logo" />
                <button className='loginScreen_button' onClick={() => setsignIn(true)}>Sign In</button>
                <div className="loginScreen_gradient" />
            </div>

            <div className="loginScreen_body">
                {
                    signIn ? (<SignupScreen />) : (
                        <>
                            <h1>Unlimited films, TV programmes and more.</h1>
                            <h2>Watch anywhere. Cancle at ant time.</h2>
                            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                            <div className="loginScreen_input">
                                <form>
                                    <input type="email" placeholder="Email address" />
                                    <button className='loginScreen_getStarted' onClick={() => setsignIn(true)}>Get Started</button>
                                </form>
                            </div>
                        </>
                    )
                }

            </div>
        </div>
    )
}

export default LoginScreen;