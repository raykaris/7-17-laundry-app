
import React from 'react';
import { Menu } from 'lucide-react';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className="bg-white shadow-sm py-4 px-4 flex justify-between items-center">
      <button 
        onClick={toggleSidebar}
        className="p-1 rounded-full hover:bg-gray-100"
      >
        <Menu size={24} className="text-gray-700" />
      </button>
      <div className="text-xl font-bold text-primary">7-17</div>
    </header>
  );
};

export default Header;
