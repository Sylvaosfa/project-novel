import React, { useContext, useState } from 'react';
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
    <div className={`${style.Navbar} flex justify-between items-center px-4 py-2`}>
      {/* Left Section */}
      <div className={`flex items-center gap-4 ${style.leftSection}`}>
        <Logo />
        <RxHamburgerMenu
          style={{ width: '34px', height: '22px' }}
          onClick={handleHamburgerClick}
          className='cursor-pointer'
        />
        <div className="relative">
          <h1
            className='font-medium cursor-pointer'
            onClick={handleCategoriesClick}
          >
            Categories
          </h1>
          {showCategoriesDropdown && (
            <div className="absolute left-0 mt-3 bg-white shadow-lg rounded-md w-78 z-50">
              <ul className="space-y-2 p-2">
                {/* your categories list here */}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Center Section - Search */}
      <div className='flex-1 mx-6'>
        <SearchBar />
      </div>

      {/* Right Section */}
      <div className={`flex items-center gap-6 ${style.rightSection}`}>
        <h1 className='cursor-pointer' onClick={handleSignInClick}>Sign In</h1>
        {/* Heart Icon */}
        <div className='relative'>
          <IoMdHeartEmpty className='text-2xl cursor-pointer text-gray-700 hover:text-blue-500' onClick={handleClickHeart} />
          {showTooltip && (
            <div className='absolute top-8 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-3 py-1 rounded-md shadow-lg'>
              Favourite
            </div>
          )}
        </div>

        {/* Gift Icon */}
        <div className='relative'>
          <IoGiftOutline className='text-2xl cursor-pointer text-gray-700 hover:text-blue-500' onClick={handleClickGift} />
          {showGiftTooltip && (
            <div className='absolute top-8 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-3 py-1 rounded-md shadow-lg'>
              Gift
            </div>
          )}
        </div>

        {/* Cart Icon */}
        <div className='relative'>
          <IoCartOutline className='text-2xl cursor-pointer text-gray-700 hover:text-blue-500' onClick={handleClickCart} />
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
            {/* modal content here */}
          </div>
        </div>
      )}
    </div>


  );

};


export default Navbar;