import React, { useState, useEffect } from 'react';
import { Page } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import BionetEndpointSecurity from './components/BionetEndpointSecurity';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import WalletRiskChecker from './components/WalletRiskChecker';

type Theme = 'light' | 'dark';

function App() {
  const [activePage, setActivePage] = useState<Page>(Page.Home);
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedTheme = window.localStorage.getItem('theme') as Theme;
      return storedTheme || 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const renderPage = () => {
    switch (activePage) {
      case Page.Home:
        return <Hero setActivePage={setActivePage} />;
      case Page.Security:
        return <BionetEndpointSecurity />;
      case Page.Dashboard:
        return <Dashboard theme={theme} />;
      case Page.WalletRiskChecker:
        return <WalletRiskChecker />;
      default:
        return <Hero setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 font-sans text-gray-800 dark:text-gray-100 transition-colors duration-300">
      <Header 
        activePage={activePage} 
        setActivePage={setActivePage} 
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;