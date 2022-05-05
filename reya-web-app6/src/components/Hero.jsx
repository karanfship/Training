import React from 'react';
import Typed from 'react-typed';
import { Link } from 'react-router-dom';
import { useStateValue } from "../StateProvider";

const Hero = () => {
  const [{ user }] = useStateValue();

  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2'>
          SPINED WITH LOVE
        </p>
        <h1 className='md:text-5xl sm:text-4xl text-2xl font-bold md:py-6'>
          WELCOME TO CROCHET WORLD.
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-4xl sm:text-3xl text-xl font-bold py-4'>
            Fast, cheap, reliable products for
          </p>
          <Typed
            className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 text-gray-500 pl-2'
            strings={['Purse', 'Bag', 'Cloth']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <Link to={!user && "/login"}>
          <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
