import React from 'react';
import "../Tailwind.css"

const LanguageSwitcher = ({ language, setLanguage }) => {
    return (
        <div className="flex items-center justify-center space-x-4">
            <span 
                role="button" 
                aria-label="Switch to English" 
                onClick={() => setLanguage('en')}
                className={`text-3xl font-semibold text-primary dark:text-tetriary ${language === 'en' ? 'opacity-100' : 'opacity-50'}`}
            >
                🇺🇸
            </span>
            <input 
                type="checkbox" 
                checked={language === 'ka'} 
                onChange={() => setLanguage(language === 'en' ? 'ka' : 'en')}
                className=" text-primary dark:text-tetriary toggle opacity-0 absolute "
                id="language-toggle"
            />
            <label 
                htmlFor="language-toggle" 
                className=" text-primary dark:text-tetriary relative w-12 h-6 flex items-center bg-gray-300 rounded-full cursor-pointer"
            >
                <span 
                    className={`absolute left-1 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ${language === 'ka' ? 'transform translate-x-6' : ''}`}
                ></span>
            </label>
            <span 
                role="button" 
                aria-label="Switch to Georgian" 
                onClick={() => setLanguage('ka')}
                className={`text-3xl font-semibold  text-primary dark:text-tetriary ${language === 'ka' ? 'opacity-100' : 'opacity-50'}`}
            >
                🇬🇪
            </span>
        </div>
    );
};

export default LanguageSwitcher;
