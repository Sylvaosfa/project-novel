import React,{ useContext, useState } from 'react';
import Image from 'next/image';
import SearchBar from './SearchBar';
import { RxHamburgerMenu } from "react-icons/rx"
import Logo from './Logo';
import style from './Navbar.module.css'

import { IoMdHeartEmpty } from "react-icons/io";
import { IoGiftOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { HiGift } from "react-icons/hi";

const Navbar = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [showGiftTooltip, setShowGiftTooltip] = useState(false);
  const [showCartTooltip, setShowCartTooltip] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showCategoriesDropdown, setShowCategoriesDropdown] = useState(false);

  // Handle show modal
  const handleSignInClick = () => {
    setShowSignInModal(true);
  };

  // Close modal
  const handleCloseModal = () => {
    setShowSignInModal(false);
  };

  // Handle input changes
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Tooltip timer functions
  const handleClickHeart = () => {
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000);  // Hide tooltip after 2 seconds
  };

  const handleClickGift = () => {
    setShowGiftTooltip(true);
    setTimeout(() => setShowGiftTooltip(false), 2000);  // Hide tooltip after 2 seconds
  };

  const handleClickCart = () => {
    setShowCartTooltip(true);
    setTimeout(() => setShowCartTooltip(false), 2000);  // Hide tooltip after 2 seconds
  };

  // Handle dropdown toggle for categories and hamburger menu
  const handleCategoriesClick = () => {
    setShowCategoriesDropdown((prev) => !prev);
  };

  const handleHamburgerClick = () => {
    setShowCategoriesDropdown((prev) => !prev);
  };

  return (
    <div className={style.Navbar}>
      <div className='flex justify-between gap-5 items-center'>
        <Logo />
        <RxHamburgerMenu 
          style={{ width: '34px', height: '22px' }} 
          onClick={handleHamburgerClick}
        />
        {/* Categories dropdown */}
        <div className="relative">
          <h1 
            className='-ml-6 font-medium cursor-pointer'
            onClick={handleCategoriesClick}
          >
            Categories
          </h1>
          {showCategoriesDropdown && (
            <div className="absolute left-0 mt-3 bg-white shadow-lg rounded-md w-78">
              <ul className="space-y-2">
                <li><a href="#" className="block px-4 py-2 text-gray-700">Accessories</a></li>
                <li><a href="#" className="block px-4 py-2 text-gray-700">Art & Collectibles</a></li>
                <li><a href="#" className="block px-4 py-2 text-gray-700">Baby</a></li>
                <li><a href="#" className="block px-4 py-2 text-gray-700">Bags & Purse</a></li>
                <li><a href="#" className="block px-4 py-2 text-gray-700">Bath & beauty</a></li>
                <li><a href="#" className="block px-4 py-2 text-gray-700">books, movies & music</a></li>
                <li><a href="#" className="block px-4 py-2 text-gray-700">clothing</a></li>
                <li><a href="#" className="block px-4 py-2 text-gray-700">craft supplies & tools</a></li>
                <li><a href="#" className="block px-4 py-2 text-gray-700">Electronics & Accessories</a></li>
                <li><a href="#" className="block px-4 py-2 text-gray-700">Gifts</a></li>
                <li><a href="#" className="block px-4 py-2 text-gray-700">Home & living</a></li>
                <li><a href="#" className="block px-4 py-2 text-gray-700">Jewelry</a></li>
                <li><a href="#" className="block px-4 py-2 text-gray-700">Paper & party Supplies</a></li>
                <li><a href="#" className="block px-4 py-2 text-gray-700">Pet supplies</a></li>
                <li><a href="#" className="block px-4 py-2 text-gray-700">Shoes</a></li>
                <li><a href="#" className="block px-4 py-2 text-gray-700">toys & Games</a></li>
                <li><a href="#" className="block px-4 py-2 text-gray-700">Weddings</a></li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className='flex justify-between items-center gap-2'>
        <SearchBar />
        <h1 className='cursor-pointer' onClick={handleSignInClick}>Sign In</h1>
      </div>

      <div className='flex justify-between space-x-4 relative'>
        {/* Heart icon + tooltip */}
        <div className='relative'>
          <IoMdHeartEmpty
            className='heart text-2xl cursor-pointer text-gray-700 hover:text-blue-500'
            onClick={handleClickHeart}
          />
          {showTooltip && (
            <div className='absolute top-8 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-3 py-1 rounded-md shadow-lg'>
              Favourite
            </div>
          )}
        </div>

        {/* Gift icon + tooltip */}
        <div className='relative'>
          <IoGiftOutline
            className='gift text-2xl cursor-pointer text-gray-700 hover:text-blue-500'
            onClick={handleClickGift}
          />
          {showGiftTooltip && (
            <div className='absolute top-8 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-3 py-1 rounded-md shadow-lg'>
              Gift
            </div>
          )}
        </div>

        {/* Cart icon + tooltip */}
        <div className='relative'>
          <IoCartOutline
            className='cart text-2xl cursor-pointer text-gray-700 hover:text-blue-500'
            onClick={handleClickCart}
          />
          {showCartTooltip && (
            <div className='absolute top-8 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-3 py-1 rounded-md shadow-lg'>
              Cart
            </div>
          )}
        </div>
      </div>

      {/* Sign-In Modal */}
      {showSignInModal && (
        <div className='fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50'>
          <div className='bg-white p-6 rounded-md w-96'>
            <div className='flex justify-between mb-4'>
              <h2 className='text-2xl'>Sign In</h2>
              <h2 className='text-2xl
              font-bold'>Register</h2>
            </div>

            <div className='flex flex-col space-y-4'>
              {/* Email Input */}
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
                className='px-4 py-2 border rounded-md'
              />
              {/* Password Input */}
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter your password"
                className='px-4 py-2 border rounded-md'
              />
              <div className='flex justify-between items-center'>
                {/* Stay signed in */}
                <div className='flex items-center'>
                  <input type="checkbox" />
                  <label className='ml-2'>Stay signed in</label>
                </div>
                <a href="#" className='text-blue-500 underline'>Forgot your password?</a>
              </div>
              <button className='bg-black text-white py-2 px-4 rounded-md w-full mt-4'>Sign In</button>

              <p className='mt-4 text-center text-gray-600'>Trouble signing in?</p>

              {/* Social login */}
              <div className='mt-4 flex flex-col space-y-2'>
                <button className='bg-blue-600 text-white py-2 px-4 rounded-md'>Continue with Google</button>
                <button className='bg-blue-600 text-white py-2 px-4 rounded-md'>Continue with Facebook</button>
              </div>
            </div>

            <button
              className='mt-4 text-gray-500'
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
          <div className="mt-4 border-t border-b py-2">
    <ul className="flex justify-center space-x-6 font-medium text-gray-700">
      <li><a href="#">Gifts</a></li>
      <li><a href="#">Easter</a></li>
      <li><a href="#">Home Favorites</a></li>
      <li><a href="#">Fashion Finds</a></li>
    </ul>
  </div>

        </div>
      )}
    </div>
  
  );

};


export default Navbar;