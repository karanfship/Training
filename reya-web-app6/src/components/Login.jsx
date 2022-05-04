import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase'
import './Login.css'

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = e => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(auth => {
                navigate("/");
            })
            .catch(error => alert(error.message))
    }

    const register = e =>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((auth) => {
              // it successfully a new user with email and password
              if (auth) {
                navigate("/");
              }
            })
            .catch((error) => alert(error.message));
    }

    return (
      <div className="login">
        <div className="login__container">
          <h1>Sign-in</h1>

          <form>
            <h5>E-mail</h5>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <h5>Password</h5>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit" onClick={signIn} className="login__signInButton">
              Sign In
            </button>
          </form>

          <p>
            By signing-in you agree to the REYA CROCHET Conditions of Use &
            Sale. Please see our Privacy Notice, our Cookies Notice and our
            Interest-Based Ads Notice.
          </p>

          <button onClick={register} className="login__registerButton">
            Create your Reya Account
          </button>
        </div>
      </div>
    );
}

export default Login
