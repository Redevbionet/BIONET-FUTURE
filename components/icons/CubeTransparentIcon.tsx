
import React from 'react';

export const CubeTransparentIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25L3 7.5m18 0v9l-9 5.25L3 16.5v-9" />
    <path strokeLinecap="round" strokeLinejoin="round" d="m3 7.5 9 5.25 9-5.25" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 22.5V12.75" />
  </svg>
);