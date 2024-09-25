import React from 'react';
import logo from '../Static/logo.png';
import LanguageSwitcher from './LanguageSwitcher';
import { useNavigate } from 'react-router-dom';
const Navbar = ({ language, setLanguage }) => {
  const navigate = useNavigate()
  const handleNavigate =()=>{
    navigate("/")
  }
  return (
        <nav className="bg-white border-gray-200 dark:bg-primary w-full z-10  ">
          <div className="max-w-screen-xl flex items-center justify-between mx-auto p-2 ">
            <div className="flex items-center space-x-3 rtl:space-x-reverse hover:cursor-pointer" onClick={()=>handleNavigate()}>
              <img
                src={logo}
                className="h-8 sm:h-12"
                alt="AI - IA logo"
              />
              <span className="self-center text-xl sm:text-2xl font-semibold whitespace-nowrap dark:text-white">
                AI - IA
              </span>
            </div>
            <LanguageSwitcher language={language} setLanguage={setLanguage} />
          </div>
        </nav>
  );
};

export default Navbar;