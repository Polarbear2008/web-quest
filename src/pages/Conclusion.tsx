import React, { useState } from 'react';
import { CheckCircle2, BarChart2, Heart } from 'lucide-react';
import PageTitle from '../components/UI/PageTitle';
import Button from '../components/UI/Button';
import Card, { CardContent } from '../components/UI/Card';

const Conclusion: React.FC = () => {
  const [showThankYou, setShowThankYou] = useState(false);
  const [pledgeSubmitted, setPledgeSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    pledge: '',
    reflection: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPledgeSubmitted(true);
    setShowThankYou(true);
    setTimeout(() => {
      setShowThankYou(false);
    }, 5000);
  };
  
  // Sample next steps for climate action
  const nextSteps = [
    {
      icon: <CheckCircle2 size={24} className="text-primary-600" />,
      title: 'Stay Informed',
      description: 'Continue learning about climate change through reliable sources like NASA, NOAA, and peer-reviewed research.',
    },
    {
      icon: <BarChart2 size={24} className="text-primary-600" />,
      title: 'Track Your Impact',
      description: 'Calculate your carbon footprint and set goals to reduce it. Small changes add up to significant impact.',
    },
    {
      icon: <Heart size={24} className="text-primary-600" />,
      title: 'Spread Awareness',
      description: 'Share what you\'ve learned with friends, family, and community members. Inspire others to take action.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <PageTitle 
        title="Conclusion" 
        subtitle="Congratulations on completing the Climate Change WebQuest! Take a moment to reflect on what you've learned and commit to future action."
      />
      
      {/* Reflection Section */}
      <div className="mb-10">
        <h2 className="font-heading font-semibold text-2xl text-primary-800 mb-4">What Have You Learned?</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <p className="text-gray-700 mb-4">
            Throughout this WebQuest, you've explored the science of climate change, analyzed data, investigated impacts, 
            researched solutions, and created a climate action campaign. Take a moment to reflect on your journey:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-heading font-medium text-lg text-primary-700 mb-2">Knowledge Gained</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Understanding of climate science fundamentals</li>
                <li>Ability to analyze and interpret climate data</li>
                <li>Knowledge of climate impacts across ecosystems and communities</li>
                <li>Awareness of various climate solutions at different scales</li>
                <li>Skills in communicating complex climate information</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-heading font-medium text-lg text-primary-700 mb-2">Skills Developed</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Research and critical thinking</li>
                <li>Data analysis and interpretation</li>
                <li>Creative communication and campaign development</li>
                <li>Teamwork and collaboration</li>
                <li>Presentation and advocacy skills</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-primary-50 p-4 rounded-lg border border-primary-100">
            <h3 className="font-heading font-medium text-lg text-primary-700 mb-2">Reflection Questions</h3>
            <p className="text-primary-600 italic mb-3">
              "Learning without reflection is a waste. Reflection without learning is dangerous." — Confucius
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>What aspects of climate change did you find most surprising or concerning?</li>
              <li>How has this WebQuest changed your perspective on climate issues?</li>
              <li>Which climate solutions do you think hold the most promise? Why?</li>
              <li>What challenges did you face in creating your climate action campaign?</li>
              <li>What personal actions will you take to address climate change?</li>
            </ol>
          </div>
        </div>
      </div>
      
      {/* Next Steps */}
      <div className="mb-10">
        <h2 className="font-heading font-semibold text-2xl text-primary-800 mb-4">Next Steps</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {nextSteps.map((step, index) => (
            <Card key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent>
                <div className="flex items-center mb-3">
                  {step.icon}
                  <h3 className="font-heading font-semibold text-xl ml-2 text-primary-700">{step.title}</h3>
                </div>
                <p className="text-gray-700">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Climate Action Pledge */}
      <div className="mb-10">
        <h2 className="font-heading font-semibold text-2xl text-primary-800 mb-4">Take the Climate Action Pledge</h2>
        
        {pledgeSubmitted ? (
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="text-center">
              <CheckCircle2 size={48} className="text-green-500 mx-auto mb-4" />
              <h3 className="font-heading font-semibold text-xl text-primary-700 mb-2">Thank You for Your Pledge!</h3>
              <p className="text-gray-700 mb-4">
                Your commitment to climate action makes a difference. Remember that small, consistent changes add up to significant impact.
              </p>
              <Button onClick={() => setPledgeSubmitted(false)} variant="outline">
                Make Another Pledge
              </Button>
            </div>
          </div>
        ) : (
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <form onSubmit={handleSubmit}>
              <p className="text-gray-700 mb-4">
                Make a personal commitment to take action on climate change. Your pledge can be as simple as reducing single-use plastics 
                or as ambitious as organizing a community sustainability project.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email (optional)</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="pledge" className="block text-gray-700 font-medium mb-1">Select a Pledge</label>
                  <select
                    id="pledge"
                    name="pledge"
                    value={formData.pledge}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">Select a pledge...</option>
                    <option value="reduce">Reduce my carbon footprint</option>
                    <option value="advocate">Advocate for climate policies</option>
                    <option value="conserve">Conserve energy and water</option>
                    <option value="sustainable">Adopt sustainable transportation</option>
                    <option value="plant">Plant trees or support reforestation</option>
                    <option value="custom">Create my own pledge</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="reflection" className="block text-gray-700 font-medium mb-1">Personal Reflection (optional)</label>
                  <textarea
                    id="reflection"
                    name="reflection"
                    value={formData.reflection}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Share your thoughts on climate change and why taking action is important to you..."
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-500"
                  ></textarea>
                </div>
              </div>
              
              <div className="text-center">
                <Button type="submit" size="lg">
                  Submit My Pledge
                </Button>
                
                {showThankYou && (
                  <div className="mt-4 p-3 bg-green-50 text-green-700 rounded-lg animate-fade-in">
                    Thank you for your commitment to climate action!
                  </div>
                )}
              </div>
            </form>
          </div>
        )}
      </div>
      
      {/* Final Message */}
      <div className="bg-primary-50 p-6 rounded-lg border border-primary-100 text-center">
        <h2 className="font-heading font-bold text-2xl text-primary-800 mb-3">Remember, Every Action Counts</h2>
        <p className="text-primary-700 max-w-2xl mx-auto">
          Climate change is a global challenge, but it's solved through millions of individual actions. 
          Your knowledge, creativity, and commitment are powerful tools for creating a sustainable future. 
          Thank you for completing this WebQuest and becoming a climate change explorer!
        </p>
      </div>
    </div>
  );
};

export default Conclusion;