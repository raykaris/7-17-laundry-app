
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { X, Shirt, GamepadIcon, PhoneCall } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();
  
  const menuItems = [
    { 
      name: "Laundry Services", 
      path: "/laundry", 
      icon: <Shirt size={24} />
    },
    { 
      name: "Gaming Services", 
      path: "/gaming", 
      icon: <GamepadIcon size={24} /> 
    },
    { 
      name: "Contact Us", 
      path: "/contact", 
      icon: <PhoneCall size={24} /> 
    }
  ];

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        />
      )}
      <motion.div 
        className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50"
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-xl font-bold text-primary">7-17</h2>
          <button 
            onClick={toggleSidebar}
            className="p-1 rounded-full hover:bg-gray-100"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="py-4">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center px-4 py-3 hover:bg-gray-100 ${
                location.pathname === item.path ? 'text-primary border-l-4 border-primary' : 'text-gray-700'
              }`}
              onClick={toggleSidebar}
            >
              <span className="mr-3">{item.icon}</span>
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
