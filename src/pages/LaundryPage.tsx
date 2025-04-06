
import React from 'react';
import { Shirt, ClipboardList, Sparkles, Truck } from 'lucide-react';
import LaundryServiceItem from '../components/LaundryServiceItem';
import { useToast } from '@/hooks/use-toast';

const LaundryPage: React.FC = () => {
  const { toast } = useToast();

  const laundryServices = [
    {
      id: 1,
      title: 'Wash, Dry & Fold',
      description: 'Complete laundry service with careful handling of your clothes. Quick turnaround time.',
      icon: <Shirt size={24} />
    },
    {
      id: 2,
      title: 'Dry Cleaning',
      description: 'Professional dry cleaning for delicate items, suits, dresses and special fabrics.',
      icon: <ClipboardList size={24} />
    },
    {
      id: 3,
      title: 'Ironing',
      description: 'Wrinkle-free garments with professional ironing. Perfect finish for your clothing.',
      icon: <Sparkles size={24} />
    },
    {
      id: 4,
      title: 'Pickup & Delivery',
      description: 'Convenient service right at your doorstep. Schedule online or via phone.',
      icon: <Truck size={24} />
    }
  ];

  const handleBookService = () => {
    toast({
      title: "Contact Method",
      description: (
        <div className="flex flex-col space-y-2 mt-2">
          <a 
            href="tel:0788448557" 
            className="bg-primary text-white py-2 px-4 rounded-md flex justify-center items-center"
          >
            Call Us
          </a>
          <a 
            href="https://wa.me/254788448557" 
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
      <h1 className="text-2xl font-bold mb-2">Laundry Services</h1>
      <p className="text-gray-600 mb-4">Professional laundry services for all your needs</p>
      
      <div className="mt-4">
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

      <div className="mt-6 bg-white rounded-lg shadow-sm p-4">
        <h2 className="font-semibold text-lg mb-2">Why Choose Our Laundry Service?</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>Fast 24-hour turnaround</li>
          <li>Eco-friendly cleaning options</li>
          <li>Special care for delicate fabrics</li>
          <li>Convenient pickup and delivery</li>
          <li>Affordable pricing options</li>
        </ul>
      </div>
    </div>
  );
};

export default LaundryPage;
