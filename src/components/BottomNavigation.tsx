
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Shirt, GamepadIcon, PhoneCall } from 'lucide-react';

const BottomNavigation: React.FC = () => {
  const location = useLocation();
  
  const navItems = [
    { 
      name: "Home", 
      path: "/", 
      icon: <Home size={24} /> 
    },
    { 
      name: "Laundry", 
      path: "/laundry", 
      icon: <Shirt size={24} /> 
    },
    { 
      name: "Gaming", 
      path: "/gaming", 
      icon: <GamepadIcon size={24} /> 
    },
    { 
      name: "Contact", 
      path: "/contact", 
      icon: <PhoneCall size={24} /> 
    }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg flex justify-around py-2 z-10">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <Link
            key={item.path}
            to={item.path}
            className="flex flex-col items-center px-3 py-1"
          >
            <div className={isActive ? 'text-primary' : 'text-gray-600'}>
              {item.icon}
            </div>
            <span className={`text-xs ${isActive ? 'text-primary font-medium' : 'text-gray-600'}`}>
              {item.name}
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default BottomNavigation;
