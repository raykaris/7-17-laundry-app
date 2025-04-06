
import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactPage: React.FC = () => {
  const contactMethods = [
    {
      id: 1,
      title: 'Call Us',
      description: '+254 788 448 557',
      icon: <Phone size={24} />,
      action: 'tel:0788448557'
    },
    {
      id: 2,
      title: 'WhatsApp',
      description: 'Message us on WhatsApp',
      icon: <Phone size={24} />,
      action: 'https://wa.me/254788448557'
    },
    {
      id: 3,
      title: 'Email',
      description: 'support@717services.com',
      icon: <Mail size={24} />,
      action: 'mailto:support@717services.com'
    }
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">Contact Us</h1>
      <p className="text-gray-600 mb-6">Get in touch with our team for any queries or bookings</p>
      
      <div className="space-y-4">
        {contactMethods.map((method) => (
          <a
            key={method.id}
            href={method.action}
            className="bg-white rounded-lg shadow-sm p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center">
              <div className="bg-blue-100 p-3 rounded-full mr-4 text-primary">
                {method.icon}
              </div>
              <div>
                <h3 className="font-medium text-gray-900">{method.title}</h3>
                <p className="text-sm text-gray-500">{method.description}</p>
              </div>
            </div>
            <div className="text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
            </div>
          </a>
        ))}
      </div>
      
      <div className="mt-8 bg-white rounded-lg shadow-sm p-4">
        <div className="flex items-center mb-4">
          <div className="bg-blue-100 p-2 rounded-full mr-3 text-primary">
            <MapPin size={20} />
          </div>
          <h3 className="font-medium text-gray-900">Our Location</h3>
        </div>
        <p className="text-gray-600 mb-4">Kangaru Market, Embu, Kenya</p>
        <div className="h-40 bg-gray-200 rounded-lg">
          {/* Map placeholder - would be replaced with actual map implementation */}
          <div className="h-full flex items-center justify-center text-gray-400">
            Map View
          </div>
        </div>
      </div>
      
      <div className="mt-6 bg-white rounded-lg shadow-sm p-4">
        <div className="flex items-center mb-4">
          <div className="bg-blue-100 p-2 rounded-full mr-3 text-primary">
            <Clock size={20} />
          </div>
          <h3 className="font-medium text-gray-900">Business Hours</h3>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600">Monday - Friday</span>
            <span className="font-medium">7:00 AM - 8:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Saturday</span>
            <span className="font-medium">8:00 AM - 6:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Sunday</span>
            <span className="font-medium">9:00 AM - 5:00 PM</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
