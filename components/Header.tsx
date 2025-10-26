import React from 'react';
import { Page } from '../types';
import { LogoIcon } from './icons/LogoIcon';
import { SunIcon } from './icons/SunIcon';
import { MoonIcon } from './icons/MoonIcon';

interface HeaderProps {
  activePage: Page;
  setActivePage: (page: Page) => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ activePage, setActivePage, theme, toggleTheme }) => {
  const navItems = [
    { name: 'Home', page: Page.Home },
    { name: 'Bionet Endpoint Security', page: Page.Security },
    { name: 'ERP Dashboard', page: Page.Dashboard },
    { name: 'Wallet Risk Checker', page: Page.WalletRiskChecker },
  ];

  const getNavItemClass = (page: Page) => {
    return `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
      activePage === page
        ? 'bg-gray-700 text-white'
        : 'text-gray-500 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
    }`;
  };

  return (
    <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-200 dark:border-gray-700">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button onClick={() => setActivePage(Page.Home)} className="flex-shrink-0 flex items-center gap-2 text-gray-900 dark:text-white">
              <LogoIcon className="h-8 w-8 text-sky-500" />
              <span className="font-bold text-xl">Bionet</span>
            </button>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => setActivePage(item.page)}
                    className={getNavItemClass(item.page)}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <SunIcon className="h-6 w-6" />
              ) : (
                <MoonIcon className="h-6 w-6" />
              )}
            </button>
            <button className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200">
              Contact Us
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;