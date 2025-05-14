import React, { useEffect } from 'react';
import PageTitle from '../components/UI/PageTitle';

const Upload: React.FC = () => {
  useEffect(() => {
    window.location.href = 'https://forms.gle/deSngpekEQuAgptm7';
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <PageTitle 
        title="Upload Your Project" 
        subtitle="Redirecting you to the project submission form..."
      />
      <div className="text-center py-8">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">If you are not redirected automatically, please 
          <a 
            href="https://forms.gle/deSngpekEQuAgptm7" 
            className="text-primary-600 hover:text-primary-700 ml-1"
          >
            click here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Upload;