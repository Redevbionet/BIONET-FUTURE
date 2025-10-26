import React from 'react';
import { Page } from '../types';

interface HeroProps {
  setActivePage: (page: Page) => void;
}

const Hero: React.FC<HeroProps> = ({ setActivePage }) => {
  return (
    <div className="text-center py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      <div 
        aria-hidden="true" 
        className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-20 dark:opacity-20">
        <div className="blur-[106px] h-56 bg-gradient-to-br from-sky-500 to-purple-500"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300"></div>
      </div>
      <div className="relative z-10">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          ผู้บุกเบิกโซลูชันระบบจัดเก็บข้อมูลและ ERP แห่งอนาคต
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-300">
          เราเชี่ยวชาญในการพัฒนาและปกป้องระบบจัดเก็บข้อมูลที่สำคัญ พร้อมนำเสนอการแสดงผลข้อมูล Circle Soft ERP ที่ทรงพลัง
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <button
            onClick={() => setActivePage(Page.Dashboard)}
            className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-6 rounded-lg transition-transform duration-200 hover:scale-105"
          >
            View Dashboard
          </button>
          <button
            onClick={() => setActivePage(Page.Security)}
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-transform duration-200 hover:scale-105"
          >
            Learn About Security
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;