import React, { useState } from 'react';
import { Search } from 'lucide-react';
import PageTitle from '../components/UI/PageTitle';
import ResourceLink from '../components/UI/ResourceLink';
import { resources } from '../data/resources';

const Resources: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const categories = [
    { id: 'all', label: 'All Resources' },
    { id: 'video', label: 'Videos' },
    { id: 'data', label: 'Data & Research' },
    { id: 'guide', label: 'Guides' },
    { id: 'image', label: 'Images' },
    { id: 'tool', label: 'Tools' },
  ];
  
  const filteredResources = resources.filter((resource) => {
    const matchesSearch = 
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = 
      selectedCategory === null || 
      selectedCategory === 'all' || 
      resource.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-4xl mx-auto">
      <PageTitle 
        title="Resources" 
        subtitle="Explore these resources to help you understand climate change and create your action campaign."
      />
      
      {/* Search and Filters */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id === 'all' ? null : category.id)}
              className={`px-3 py-1 text-sm rounded-full transition-colors ${
                (category.id === 'all' && selectedCategory === null) || category.id === selectedCategory
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>
      
      {/* Resource List */}
      <div className="space-y-4">
        {filteredResources.length > 0 ? (
          filteredResources.map((resource) => (
            <ResourceLink
              key={resource.id}
              title={resource.title}
              url={resource.url}
              description={resource.description}
              imageUrl={resource.imageUrl}
            />
          ))
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-600">No resources found matching your search.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory(null);
              }}
              className="mt-2 text-primary-600 hover:text-primary-700"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Resources;