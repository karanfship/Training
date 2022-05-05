import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cards from './components/Cards';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Checkout from './components/Checkout';
import Orders from './components/Orders';
import Login from './components/Login';
import About from './components/About';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import Payment from "./components/Payment";
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useStateValue } from "./StateProvider";

const promise = loadStripe("pk_test_51K8qQbSEV0LXLDfCCqqkVhmfnZJz44qALLMNjcPlDyYQZfcMnbaR2Dq97DQ5Kr6dSvu3z25vRIR28N0V3Pi80p2z00hVSQrLQ8");
function App() {
  const [{ }, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...

    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/login' element={<><Login /></>} />
          <Route path='/' element={<><Hero /><Cards /></>} />
          <Route path='/shop' element={<><Cards /></>} />
          <Route path='/orders' element={<><Orders /></>} />
          <Route path='/checkout' element={<><Checkout /></>} />
          <Route path='/about' element={<><About /></>} />
          <Route path="/payment" element={<><Elements stripe={promise}><Payment /></Elements></>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
