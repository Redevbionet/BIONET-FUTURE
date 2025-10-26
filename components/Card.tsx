import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-6 backdrop-blur-sm transition-all duration-300 hover:border-sky-500/50 hover:shadow-sky-500/10 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;