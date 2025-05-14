import React from 'react';
import PageTitle from '../components/UI/PageTitle';
import { Globe } from 'lucide-react';

const TeacherExtension: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <PageTitle 
        title="Teacher Page Extension" 
        subtitle="Enhanced Educational Framework and Creative Elements"
      />

      <div className="space-y-12">
        {/* SAMR Section */}
        <div className="space-y-6">
          <h2 className="font-heading text-2xl text-primary-700">SAMR Model</h2>
          
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-heading font-medium text-lg text-primary-700 mb-2">Augmentation</h3>
              <p className="text-gray-700">Digital journals enhance observations and record-keeping.</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-heading font-medium text-lg text-primary-700 mb-2">Modification</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Students use digital tools to change and improve how they understand and present real information.</li>
                <li>With tools like Canva, students can create creative digital presentations.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ISTE Standards Section */}
        <div className="space-y-6">
          <h2 className="font-heading text-2xl text-primary-700">ISTE Standards</h2>
          
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-heading font-medium text-lg text-primary-700 mb-2">Knowledge Constructor</h3>
              <p className="text-gray-700">Students evaluate real-world data and information.</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-heading font-medium text-lg text-primary-700 mb-2">Creative Communicator</h3>
              <p className="text-gray-700">Students present models and plans effectively.</p>
            </div>
          </div>
        </div>

        {/* Creative Elements Section */}
        <div className="space-y-6">
          <h2 className="font-heading text-2xl text-primary-700">Creative Elements</h2>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700 mb-4">
              The WebQuest includes several creative elements that support student innovation and critical thinking. 
              For example, students are given opportunities to:
            </p>

            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Design eco-habitat model projects</li>
              <li>Create digital presentations</li>
              <li>Write e-journals</li>
            </ul>

            <p className="text-gray-700 mt-4">
              These activities allow students to express their ideas and solve real-world problems through research 
              and independent thinking. The open-ended nature of these tasks encourages exploration of different 
              approaches and creative solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherExtension;
