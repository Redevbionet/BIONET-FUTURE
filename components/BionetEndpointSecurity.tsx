import React from 'react';
import Card from './Card';
import { ShieldCheckIcon } from './icons/ShieldCheckIcon';
import { CpuChipIcon } from './icons/CpuChipIcon';
import { ServerStackIcon } from './icons/ServerStackIcon';
import { LockClosedIcon } from './icons/LockClosedIcon';

const features = [
  {
    icon: <ShieldCheckIcon className="h-10 w-10 text-sky-500" />,
    title: 'Advanced Threat Detection',
    description: 'Utilizing AI and machine learning to proactively identify and neutralize threats before they can cause harm.'
  },
  {
    icon: <LockClosedIcon className="h-10 w-10 text-sky-500" />,
    title: 'End-to-End Data Encryption',
    description: 'Securing your data both in transit and at rest with military-grade encryption protocols, ensuring complete confidentiality.'
  },
  {
    icon: <CpuChipIcon className="h-10 w-10 text-sky-500" />,
    title: 'Real-time Monitoring',
    description: '24/7 surveillance of your network and endpoints to provide immediate alerts and responses to suspicious activities.'
  },
  {
    icon: <ServerStackIcon className="h-10 w-10 text-sky-500" />,
    title: 'Scalable Architecture',
    description: 'Our security solutions are built to scale with your business, providing robust protection for organizations of any size.'
  }
];

const BionetEndpointSecurity: React.FC = () => {
  return (
    <div className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">Bionet Endpoint Security</h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">Comprehensive protection for your critical data systems.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="flex flex-col items-center text-center p-8">
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
            <p className="text-gray-500 dark:text-gray-400">{feature.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BionetEndpointSecurity;