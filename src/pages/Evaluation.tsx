import React, { useState } from 'react';
import PageTitle from '../components/UI/PageTitle';
import Button from '../components/UI/Button';

const Evaluation: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'rubric' | 'self'>('rubric');
  const [selfAssessment, setSelfAssessment] = useState<Record<string, number>>({});
  
  const handleSelfAssessmentChange = (category: string, value: number) => {
    setSelfAssessment((prev) => ({
      ...prev,
      [category]: value
    }));
  };
  
  const calculateTotalScore = () => {
    return Object.values(selfAssessment).reduce((total, score) => total + score, 0);
  };
  
  const getGradeFromScore = (score: number) => {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
  };

  return (
    <div className="max-w-4xl mx-auto">
      <PageTitle 
        title="Evaluation" 
        subtitle="Use these rubrics to understand how your work will be evaluated and to assess your own progress."
      />
      
      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-6">
        <button
          onClick={() => setActiveTab('rubric')}
          className={`py-2 px-4 font-heading font-medium text-sm sm:text-base transition-colors ${
            activeTab === 'rubric'
              ? 'border-b-2 border-primary-600 text-primary-700'
              : 'text-gray-600 hover:text-primary-600'
          }`}
        >
          Evaluation Rubric
        </button>
        <button
          onClick={() => setActiveTab('self')}
          className={`py-2 px-4 font-heading font-medium text-sm sm:text-base transition-colors ${
            activeTab === 'self'
              ? 'border-b-2 border-primary-600 text-primary-700'
              : 'text-gray-600 hover:text-primary-600'
          }`}
        >
          Self-Assessment
        </button>
      </div>
      
      {/* Rubric Tab */}
      {activeTab === 'rubric' && (
        <div className="animate-fade-in">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
            <h2 className="font-heading font-semibold text-xl text-primary-800 mb-4">Climate Action Campaign Rubric</h2>
            
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="py-3 px-4 text-left font-heading text-sm text-gray-700 border border-gray-200">Category</th>
                    <th className="py-3 px-4 text-left font-heading text-sm text-gray-700 border border-gray-200">Excellent (20-25)</th>
                    <th className="py-3 px-4 text-left font-heading text-sm text-gray-700 border border-gray-200">Good (15-19)</th>
                    <th className="py-3 px-4 text-left font-heading text-sm text-gray-700 border border-gray-200">Satisfactory (10-14)</th>
                    <th className="py-3 px-4 text-left font-heading text-sm text-gray-700 border border-gray-200">Needs Improvement (0-9)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-3 px-4 font-medium border border-gray-200 bg-gray-50">Content & Knowledge</td>
                    <td className="py-3 px-4 text-sm border border-gray-200">
                      Demonstrates comprehensive understanding of climate change. Uses accurate, current data from reliable sources. Explanations are thorough and precise.
                    </td>
                    <td className="py-3 px-4 text-sm border border-gray-200">
                      Shows solid understanding of climate change. Uses accurate data from reliable sources. Explanations are mostly clear and accurate.
                    </td>
                    <td className="py-3 px-4 text-sm border border-gray-200">
                      Shows basic understanding of climate change. Some data may be missing or from questionable sources. Explanations have minor inaccuracies.
                    </td>
                    <td className="py-3 px-4 text-sm border border-gray-200">
                      Shows limited understanding of climate change. Data is missing, outdated, or inaccurate. Explanations contain significant errors.
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium border border-gray-200 bg-gray-50">Solutions & Actions</td>
                    <td className="py-3 px-4 text-sm border border-gray-200">
                      Presents multiple innovative, realistic solutions. Clearly explains how actions address climate issues. Provides specific, practical steps for audience.
                    </td>
                    <td className="py-3 px-4 text-sm border border-gray-200">
                      Presents valid solutions. Connects actions to climate issues. Provides clear steps for audience.
                    </td>
                    <td className="py-3 px-4 text-sm border border-gray-200">
                      Presents some solutions. Connection between actions and issues may be unclear. Steps for audience are general.
                    </td>
                    <td className="py-3 px-4 text-sm border border-gray-200">
                      Few or no solutions presented. Little connection between actions and issues. No clear steps for audience.
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium border border-gray-200 bg-gray-50">Creativity & Presentation</td>
                    <td className="py-3 px-4 text-sm border border-gray-200">
                      Highly creative and engaging. Excellent visual design and organization. Compelling use of media. Captures and maintains audience attention.
                    </td>
                    <td className="py-3 px-4 text-sm border border-gray-200">
                      Creative and interesting. Good visual design and organization. Effective use of media. Engages audience.
                    </td>
                    <td className="py-3 px-4 text-sm border border-gray-200">
                      Somewhat creative. Basic visual design and organization. Media use is adequate. Occasionally engages audience.
                    </td>
                    <td className="py-3 px-4 text-sm border border-gray-200">
                      Lacks creativity. Poor visual design and organization. Ineffective use of media. Fails to engage audience.
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium border border-gray-200 bg-gray-50">Teamwork & Collaboration</td>
                    <td className="py-3 px-4 text-sm border border-gray-200">
                      All team members contributed equally. Excellent communication and cooperation. Roles were clear and everyone fulfilled responsibilities.
                    </td>
                    <td className="py-3 px-4 text-sm border border-gray-200">
                      Most team members contributed. Good communication and cooperation. Roles were assigned and most responsibilities fulfilled.
                    </td>
                    <td className="py-3 px-4 text-sm border border-gray-200">
                      Uneven contribution from team members. Some communication issues. Roles were unclear or some responsibilities unfulfilled.
                    </td>
                    <td className="py-3 px-4 text-sm border border-gray-200">
                      Poor contribution from team members. Significant communication problems. No clear roles or many responsibilities unfulfilled.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-primary-50 p-6 rounded-lg border border-primary-100">
            <h3 className="font-heading font-semibold text-lg text-primary-800 mb-2">Grading Scale</h3>
            <p className="text-primary-700 mb-4">Your final score will be calculated based on the rubric above:</p>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
              <div className="bg-white p-3 rounded text-center">
                <span className="block font-bold text-2xl text-primary-700">A</span>
                <span className="text-sm text-gray-600">90-100</span>
              </div>
              <div className="bg-white p-3 rounded text-center">
                <span className="block font-bold text-2xl text-primary-700">B</span>
                <span className="text-sm text-gray-600">80-89</span>
              </div>
              <div className="bg-white p-3 rounded text-center">
                <span className="block font-bold text-2xl text-primary-700">C</span>
                <span className="text-sm text-gray-600">70-79</span>
              </div>
              <div className="bg-white p-3 rounded text-center">
                <span className="block font-bold text-2xl text-primary-700">D</span>
                <span className="text-sm text-gray-600">60-69</span>
              </div>
              <div className="bg-white p-3 rounded text-center">
                <span className="block font-bold text-2xl text-primary-700">F</span>
                <span className="text-sm text-gray-600">0-59</span>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Self-Assessment Tab */}
      {activeTab === 'self' && (
        <div className="animate-fade-in">
          <p className="text-gray-700 mb-6">
            Use this self-assessment tool to evaluate your own work. Rate yourself in each category, then calculate your total score.
          </p>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
            <h2 className="font-heading font-semibold text-xl text-primary-800 mb-4">Self-Assessment Form</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-heading font-medium text-lg text-primary-700 mb-2">Content & Knowledge (0-25 points)</h3>
                <p className="text-sm text-gray-600 mb-3">
                  How well did you understand and explain climate change concepts? Did you use accurate, current data from reliable sources?
                </p>
                <input
                  type="range"
                  min="0"
                  max="25"
                  value={selfAssessment['content'] || 0}
                  onChange={(e) => handleSelfAssessmentChange('content', parseInt(e.target.value))}
                  className="w-full accent-primary-600"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Needs Improvement (0)</span>
                  <span>Excellent (25)</span>
                </div>
                <p className="mt-2 font-medium">Your score: {selfAssessment['content'] || 0}</p>
              </div>
              
              <div>
                <h3 className="font-heading font-medium text-lg text-primary-700 mb-2">Solutions & Actions (0-25 points)</h3>
                <p className="text-sm text-gray-600 mb-3">
                  How well did you present realistic solutions? Did you clearly explain how actions address climate issues?
                </p>
                <input
                  type="range"
                  min="0"
                  max="25"
                  value={selfAssessment['solutions'] || 0}
                  onChange={(e) => handleSelfAssessmentChange('solutions', parseInt(e.target.value))}
                  className="w-full accent-primary-600"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Needs Improvement (0)</span>
                  <span>Excellent (25)</span>
                </div>
                <p className="mt-2 font-medium">Your score: {selfAssessment['solutions'] || 0}</p>
              </div>
              
              <div>
                <h3 className="font-heading font-medium text-lg text-primary-700 mb-2">Creativity & Presentation (0-25 points)</h3>
                <p className="text-sm text-gray-600 mb-3">
                  How creative and engaging was your campaign? How effective was your visual design and organization?
                </p>
                <input
                  type="range"
                  min="0"
                  max="25"
                  value={selfAssessment['creativity'] || 0}
                  onChange={(e) => handleSelfAssessmentChange('creativity', parseInt(e.target.value))}
                  className="w-full accent-primary-600"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Needs Improvement (0)</span>
                  <span>Excellent (25)</span>
                </div>
                <p className="mt-2 font-medium">Your score: {selfAssessment['creativity'] || 0}</p>
              </div>
              
              <div>
                <h3 className="font-heading font-medium text-lg text-primary-700 mb-2">Teamwork & Collaboration (0-25 points)</h3>
                <p className="text-sm text-gray-600 mb-3">
                  How well did your team work together? Did everyone contribute equally and fulfill their responsibilities?
                </p>
                <input
                  type="range"
                  min="0"
                  max="25"
                  value={selfAssessment['teamwork'] || 0}
                  onChange={(e) => handleSelfAssessmentChange('teamwork', parseInt(e.target.value))}
                  className="w-full accent-primary-600"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Needs Improvement (0)</span>
                  <span>Excellent (25)</span>
                </div>
                <p className="mt-2 font-medium">Your score: {selfAssessment['teamwork'] || 0}</p>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h3 className="font-heading font-semibold text-xl text-primary-800">Your Total Score: {calculateTotalScore()}/100</h3>
                  <p className="text-gray-600">
                    Grade: <span className="font-medium">{getGradeFromScore(calculateTotalScore())}</span>
                  </p>
                </div>
                <Button
                  onClick={() => setSelfAssessment({})}
                  variant="outline"
                >
                  Reset Assessment
                </Button>
              </div>
              
              {calculateTotalScore() > 0 && (
                <div className="mt-6 p-4 bg-primary-50 rounded-lg border border-primary-100">
                  <h3 className="font-heading font-medium text-lg text-primary-700 mb-2">Reflection</h3>
                  <p className="text-primary-600 mb-3">
                    Based on your self-assessment, consider these questions:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>What areas did you score highest in?</li>
                    <li>What areas could use improvement?</li>
                    <li>What would you do differently next time?</li>
                    <li>How does your self-assessment compare to feedback from others?</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Evaluation;