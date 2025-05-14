import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileCheck, Users } from 'lucide-react';
import PageTitle from '../components/UI/PageTitle';
import Card, { CardContent } from '../components/UI/Card';
import Button from '../components/UI/Button';

const Task: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <PageTitle 
        title="Your Climate Change Tasks" 
        subtitle="This WebQuest has two main tasks to complete - an individual task and a group task."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        {/* Individual Task */}
        <Card className="animate-fade-in">
          <CardContent>
            <div className="flex items-center mb-4">
              <FileCheck size={24} className="text-primary-600 mr-2" />
              <h2 className="font-heading font-semibold text-2xl text-primary-700">Individual Task</h2>
            </div>
            
            <div className="mb-6">
              <h3 className="font-heading text-xl mb-3 text-primary-600">Create a Climate Action Campaign</h3>
              <p className="text-gray-700 mb-4">
                You will create a campaign to raise awareness about climate change and inspire action. Choose ONE of the following formats:
              </p>
              
              <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
                <li>
                  <span className="font-medium">Educational Video</span>
                  <p className="ml-6 text-sm text-gray-600">
                    Create a 2-3 minute video explaining a climate issue and suggesting solutions.
                  </p>
                </li>
                <li>
                  <span className="font-medium">Climate Infographic</span>
                  <p className="ml-6 text-sm text-gray-600">
                    Design a visually appealing infographic that explains climate data and actions.
                  </p>
                </li>
                <li>
                  <span className="font-medium">School Assembly Plan</span>
                  <p className="ml-6 text-sm text-gray-600">
                    Develop a detailed plan for a school assembly about climate action.
                  </p>
                </li>
              </ul>
            </div>
            
            <div className="bg-primary-50 p-4 rounded-lg">
              <p className="text-sm text-primary-800">
                <span className="font-semibold">Success Criteria:</span> Your campaign should clearly explain a climate issue, use reliable data, and suggest specific actions people can take.
              </p>
            </div>
          </CardContent>
        </Card>
        
        {/* Group Task */}
        <Card className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <CardContent>
            <div className="flex items-center mb-4">
              <Users size={24} className="text-secondary-600 mr-2" />
              <h2 className="font-heading font-semibold text-2xl text-secondary-700">Group Task</h2>
            </div>
            
            <div className="mb-6">
              <h3 className="font-heading text-xl mb-3 text-secondary-600">Collaborative Presentation</h3>
              <p className="text-gray-700 mb-4">
                Working in groups of 3-4, create a presentation that combines your individual knowledge. Choose ONE format:
              </p>
              
              <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
                <li>
                  <span className="font-medium">Digital Poster</span>
                  <p className="ml-6 text-sm text-gray-600">
                    Create a comprehensive digital poster that integrates multiple climate issues and solutions.
                  </p>
                </li>
                <li>
                  <span className="font-medium">Climate Action Skit</span>
                  <p className="ml-6 text-sm text-gray-600">
                    Develop a 5-minute skit showing climate impacts and demonstrating solutions.
                  </p>
                </li>
              </ul>
            </div>
            
            <div className="bg-secondary-50 p-4 rounded-lg">
              <p className="text-sm text-secondary-800">
                <span className="font-semibold">Success Criteria:</span> Your presentation should demonstrate teamwork, combine multiple climate topics, and show how different actions can work together.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Next Steps */}
      <div className="bg-earth-50 p-6 rounded-lg border border-earth-200 text-center">
        <h3 className="font-heading font-semibold text-xl mb-3 text-earth-800">Ready to Get Started?</h3>
        <p className="text-earth-700 mb-4">
          Follow the step-by-step process to complete these tasks successfully. Each step will guide you through learning about climate change and developing your campaign.
        </p>
        <Link to="/process">
          <Button variant="primary" size="lg">
            Begin The Process
            <ArrowRight className="ml-2" size={18} />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Task;