
import React from 'react';
import { GamepadIcon, MonitorIcon, Headphones, Users } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface GamingServiceProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const GamingServiceItem: React.FC<GamingServiceProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-3 flex items-center">
      <div className="bg-orange-100 p-3 rounded-full mr-4 text-secondary">
        {icon}
      </div>
      <div>
        <h3 className="font-medium text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
};

const GamingPage: React.FC = () => {
  const { toast } = useToast();

  const gamingServices = [
    {
      id: 1,
      title: 'Console Gaming',
      description: 'Play the latest games on PS5, Xbox Series X and Nintendo Switch',
      icon: <GamepadIcon size={24} />
    },
    {
      id: 2,
      title: 'PC Gaming',
      description: 'High-end gaming PCs with the latest graphics cards and games',
      icon: <MonitorIcon size={24} />
    },
    {
      id: 3,
      title: 'VR Experience',
      description: 'Immersive virtual reality gaming sessions',
      icon: <Headphones size={24} />
    },
    {
      id: 4,
      title: 'Tournaments & Events',
      description: 'Regular gaming tournaments with prizes',
      icon: <Users size={24} />
    }
  ];

  const handleBookService = () => {
    toast({
      title: "Contact Method",
      description: (
        <div className="flex flex-col space-y-2 mt-2">
          <a 
            href="tel:0751697480" 
            className="bg-primary text-white py-2 px-4 rounded-md flex justify-center items-center"
          >
            Call Us
          </a>
          <a 
            href="https://wa.me/254751697480" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-green-500 text-white py-2 px-4 rounded-md flex justify-center items-center"
          >
            WhatsApp
          </a>
        </div>
      ),
      duration: 10000,
    });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">Gaming Services</h1>
      <p className="text-gray-600 mb-4">Premium gaming experience for all ages</p>
      
      <div className="mt-4">
        <div className="space-y-3">
          {gamingServices.map((service) => (
            <GamingServiceItem
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
      
      <div className="mt-6 flex justify-center">
        <button 
          onClick={handleBookService}
          className="bg-secondary hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-200"
        >
          Book Gaming Session
        </button>
      </div>

      <div className="mt-6 bg-white rounded-lg shadow-sm p-4">
        <h2 className="font-semibold text-lg mb-2">Our Gaming Setup Features</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>Latest gaming consoles and PCs</li>
          <li>4K HDR displays with low latency</li>
          <li>Comfortable gaming chairs</li>
          <li>High-speed internet connection</li>
          <li>Refreshments available</li>
        </ul>
      </div>
    </div>
  );
};

export default GamingPage;
