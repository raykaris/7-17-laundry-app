
import React from 'react';
import { Shirt, ClipboardList, Sparkles, Truck } from 'lucide-react';
import ImageCarousel from '../components/ImageCarousel';
import LaundryServiceItem from '../components/LaundryServiceItem';
import { useToast } from '@/hooks/use-toast';

const Dashboard: React.FC = () => {
  const { toast } = useToast();

  const laundryServices = [
    {
      id: 1,
      title: 'Wash, Dry & Fold',
      description: 'Complete laundry service with careful handling',
      icon: <Shirt size={24} />
    },
    {
      id: 2,
      title: 'Dry Cleaning',
      description: 'Professional dry cleaning for delicate items',
      icon: <ClipboardList size={24} />
    },
    {
      id: 3,
      title: 'Ironing',
      description: 'Wrinkle-free garments with professional ironing',
      icon: <Sparkles size={24} />
    },
    {
      id: 4,
      title: 'Pickup & Delivery',
      description: 'Convenient service right at your doorstep',
      icon: <Truck size={24} />
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
    <div className="pb-4">
      <h1 className="text-2xl font-bold mb-2 text-center">7-17 Services</h1>
      <p className="text-gray-600 mb-4 text-center">Quality Laundry & Gaming Services</p>
      
      <ImageCarousel />
      
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-3">Our Laundry Services</h2>
        <div className="space-y-3">
          {laundryServices.map((service) => (
            <LaundryServiceItem
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
          className="bg-primary hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-200"
        >
          Book Our Services
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
