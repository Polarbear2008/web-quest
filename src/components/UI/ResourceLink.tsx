import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ResourceLinkProps {
  title: string;
  url: string;
  description?: string;
  imageUrl?: string;
  className?: string;
}

const ResourceLink: React.FC<ResourceLinkProps> = ({
  title,
  url,
  description,
  imageUrl,
  className = '',
}) => {
  return (
    <a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`block group ${className}`}
    >
      <div className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md hover:border-primary-300 bg-white">
        <div className="flex flex-col sm:flex-row">
          {imageUrl && (
            <div className="sm:w-1/3 h-40 sm:h-auto overflow-hidden">
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          )}
          
          <div className={`p-4 ${imageUrl ? 'sm:w-2/3' : 'w-full'}`}>
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-heading font-semibold text-lg text-primary-700 group-hover:text-primary-600">
                {title}
              </h3>
              <ExternalLink size={16} className="text-gray-400 group-hover:text-primary-500" />
            </div>
            
            {description && (
              <p className="text-gray-600 text-sm">{description}</p>
            )}
          </div>
        </div>
      </div>
    </a>
  );
};

export default ResourceLink;