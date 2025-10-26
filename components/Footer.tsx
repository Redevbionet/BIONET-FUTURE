import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-gray-500 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} Bionet Future Solutions. All rights reserved.</p>
        <p className="text-sm mt-1">Pioneering Secure Data & ERP Systems</p>
      </div>
    </footer>
  );
};

export default Footer;