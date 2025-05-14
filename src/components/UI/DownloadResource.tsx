import React from 'react';
import { Download } from 'lucide-react';
import Button from './Button';

interface DownloadResourceProps {
  title: string;
  description?: string;
  fileUrl: string;
  fileType: string;
  className?: string;
}

const DownloadResource: React.FC<DownloadResourceProps> = ({
  title,
  description,
  fileUrl,
  fileType,
  className = '',
}) => {
  const getFileTypeIcon = () => {
    switch (fileType.toLowerCase()) {
      case 'pdf':
        return '📄';
      case 'doc':
      case 'docx':
        return '📝';
      case 'ppt':
      case 'pptx':
        return '📊';
      case 'xls':
      case 'xlsx':
        return '📈';
      default:
        return '📁';
    }
  };

  return (
    <div className={`bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow ${className}`}>
      <div className="flex items-start">
        <div className="text-3xl mr-4">{getFileTypeIcon()}</div>
        <div className="flex-1">
          <h3 className="font-heading font-semibold text-lg text-primary-700 mb-1">{title}</h3>
          {description && (
            <p className="text-gray-600 text-sm mb-3">{description}</p>
          )}
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500 uppercase">{fileType} file</span>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => window.open(fileUrl, '_blank')}
            >
              <Download size={16} className="mr-1" />
              Download
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadResource;