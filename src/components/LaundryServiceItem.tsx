
import React from 'react';

interface ServiceItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const LaundryServiceItem: React.FC<ServiceItemProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-3 flex items-center">
      <div className="bg-blue-100 p-3 rounded-full mr-4 text-primary">
        {icon}
      </div>
      <div>
        <h3 className="font-medium text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default LaundryServiceItem;
