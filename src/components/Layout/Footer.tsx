import React from 'react';
import { Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-800 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Globe className="h-6 w-6" />
            <span className="font-heading font-bold text-lg">Climate Explorer WebQuest</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-primary-100">
              © {new Date().getFullYear()} Climate Explorer WebQuest. Created for educational purposes.
            </p>
            <p className="text-xs text-primary-200 mt-1">
              Resources provided for classroom use and education.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;