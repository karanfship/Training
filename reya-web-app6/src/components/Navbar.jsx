import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { GiShoppingCart } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { useStateValue } from "../StateProvider";
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase';

function Navbar() {
    const [nav, setNav] = useState(false);
    const [{ basket, user }] = useStateValue();

    const handleNav = () => {
        setNav(!nav);
    }

    const handleAuthentication = () => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            //const uid = user.uid;
            signOut(auth)
            // ...
        }
    }
    return (
        <div className='text-white p-4'>
            <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
                <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Reya Crochet World</h1>
                <ul className='hidden md:flex whitespace-nowrap'>
                    <li className='p-4 hover:text-[#00df9a] hover:cursor-pointer'><Link to="/">Home</Link></li>
                    <li className='p-4 hover:text-[#00df9a] hover:cursor-pointer'><Link to="/shop">Shop Now</Link></li>
                    <li className='p-4 hover:text-[#00df9a] hover:cursor-pointer'><Link to="/orders">Orders</Link></li>
                    <li className='p-4 hover:text-[#00df9a] hover:cursor-pointer'><Link to="/about">About</Link></li>
                </ul>
                <Link to="/checkout">
                    <div className="hidden md:flex text-lg text-white justify-center items-center">
                        <GiShoppingCart className='text-white text-3xl ' />
                        <span className="">
                            {basket?.length}
                        </span>
                    </div>
                </Link>
                <Link to={!user && "/login"}>
                    <button onClick={handleAuthentication} className='invisible md:visible bg-[#00df9a] w-[200px] rounded-md whitespace-nowrap font-bold ml-6 mx-auto p-2 text-gray-900'>{user ? 'Sign Out' : 'Sign In'}</button>
                </Link>
                <div onClick={handleNav} className='block md:hidden'>
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>
            </div>
            <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
                <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>Reya Crochet World</h1>
                <ul className='uppercase p-4'>
                    <li className='p-4 hover:text-[#00df9a] hover:cursor-pointer'><Link to="/">Home</Link></li>
                    <li className='p-4 hover:text-[#00df9a] hover:cursor-pointer'><Link to="/shop">Shop Now</Link></li>
                    <li className='p-4 hover:text-[#00df9a] hover:cursor-pointer'><Link to="/orders">Orders</Link></li>
                    <li className='p-4 hover:text-[#00df9a] hover:cursor-pointer'><Link to="/about">About</Link></li>
                </ul>
                <div className='flex text-lg text-white hover:text-[#00df9a] hover:cursor-pointer p-4'>
                    <Link to="/checkout">
                        <div className="flex text-lg text-white hover:text-[#00df9a] p-1 items-center hover:cursor-pointer">
                            <GiShoppingCart className='text-white text-3xl ' />
                            <span className="">
                                {basket?.length}
                            </span>                            
                            <div>Cart</div>
                        </div>
                    </Link>
                </div>
                <Link to={!user && "/login"}>
                    <button onClick={handleAuthentication} className='bg-[#00df9a] w-[200px] mx-auto rounded-md whitespace-nowrap font-bold ml-6 mx-auto p-2 text-gray-900'>{user ? 'Sign Out' : 'Sign In'}</button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar
