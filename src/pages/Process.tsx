import React from 'react';
import { ExternalLink } from 'lucide-react';
import PageTitle from '../components/UI/PageTitle';
import CollapsibleSection from '../components/UI/CollapsibleSection';
import { processSteps } from '../data/processSteps';
import DownloadResource from '../components/UI/DownloadResource';

const Process: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <PageTitle 
        title="The WebQuest Process" 
        subtitle="Follow these steps to complete your Climate Change WebQuest. Each step builds on the previous one to help you create an effective climate action campaign."
      />
      
      {/* Process Steps */}
      <div className="space-y-6">
        {processSteps.map((step) => (
          <CollapsibleSection 
            key={step.id}
            title={step.title}
            number={step.id}
            defaultOpen={step.id === 1}
          >
            <div className="mb-4">
              <p className="text-gray-700">{step.description}</p>
            </div>
            
            {/* Step 1 - Climate Change Basics */}
            {step.id === 1 && (
              <div>
                <h3 className="font-heading font-medium text-lg text-primary-700 mb-2">Understanding the Basics</h3>
                <p className="mb-4">
                  Begin by watching the "Climate 101" video to understand the basic science behind climate change. 
                  After watching, discuss these questions with your group:
                </p>
                <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">
                  <li>What is the difference between weather and climate?</li>
                  <li>What causes the greenhouse effect?</li>
                  <li>How do human activities contribute to climate change?</li>
                  <li>What are some observed effects of climate change?</li>
                </ul>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <h4 className="font-heading font-medium text-primary-700 mb-2">Video: Climate 101</h4>
                  <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden mb-2">
                    <iframe 
                      width="560" 
                      height="315" 
                      src="https://www.youtube.com/embed/oJAbATJCugs" 
                      title="Climate 101 with Bill Nye"
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                      className="w-full h-56 md:h-64 lg:h-80 rounded"
                    ></iframe>
                  </div>
                </div>
                
                <h3 className="font-heading font-medium text-lg text-primary-700 mb-2">Activity</h3>
                <p className="mb-3">
                  Identify the main causes of climate change and their effects. 
                  This will help you understand the connections between human activities and environmental impacts.
                </p>
              </div>
            )}
            
            {/* Step 2 - Analyze Data */}
            {step.id === 2 && (
              <div>
                <h3 className="font-heading font-medium text-lg text-primary-700 mb-2">Becoming a Data Detective</h3>
                <p className="mb-4">
                  In this step, you'll analyze real climate data to understand trends and changes over time. 
                  Visit the NOAA Climate Data Portal to access scientific data about temperature changes, sea level rise, 
                  carbon dioxide levels, and more.
                </p>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <h4 className="font-heading font-medium text-primary-700 mb-2">NOAA Climate Data Portal</h4>
                  <p className="mb-2 text-gray-700">
                    This resource provides access to real climate data from the National Oceanic and Atmospheric Administration.
                  </p>
                  <a 
                    href="https://www.climate.gov/maps-data"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-secondary-600 hover:text-secondary-700"
                  >
                    Visit NOAA Climate Data Portal
                    <ExternalLink size={14} className="ml-1" />
                  </a>
                </div>
                
                <h3 className="font-heading font-medium text-lg text-primary-700 mb-2">Activity</h3>
                <p className="mb-3">
                  Analyze climate data trends over time. Choose at least one type of climate data 
                  (temperature, sea levels, CO2, etc.) and analyze the trends over time. 
                  What patterns do you notice? How has this aspect of climate changed?
                </p>
              </div>
            )}
            
            {/* Step 3 - Investigate Impacts */}
            {step.id === 3 && (
              <div>
                <h3 className="font-heading font-medium text-lg text-primary-700 mb-2">Understanding Climate Impacts</h3>
                <p className="mb-4">
                  Now that you understand climate change and have analyzed data, it's time to investigate specific impacts on our planet and communities.
                  Select ONE impact area to research in depth:
                </p>
                
                <ul className="list-disc list-inside mb-6 space-y-3 text-gray-700">
                  <li>
                    <span className="font-medium">Rising Sea Levels</span>
                    <p className="ml-6 text-sm">
                      How are coastal communities affected? What regions are most at risk?
                    </p>
                  </li>
                  <li>
                    <span className="font-medium">Extreme Weather Events</span>
                    <p className="ml-6 text-sm">
                      How are storms, droughts, and floods changing? What are the human impacts?
                    </p>
                  </li>
                  <li>
                    <span className="font-medium">Biodiversity Loss</span>
                    <p className="ml-6 text-sm">
                      Which species are most threatened by climate change? How do ecosystem changes affect humans?
                    </p>
                  </li>
                  <li>
                    <span className="font-medium">Human Health</span>
                    <p className="ml-6 text-sm">
                      How does climate change affect human health? Which populations are most vulnerable?
                    </p>
                  </li>
                </ul>
                
                <h3 className="font-heading font-medium text-lg text-primary-700 mb-2">Activity</h3>
                <p className="mb-3">
                  Create an infographic about your chosen impact. Include data, images, and text explaining the causes, 
                  current effects, and future projections of your chosen climate impact.
                </p>
              </div>
            )}
            
            {/* Step 4 - Brainstorm Solutions */}
            {step.id === 4 && (
              <div>
                <h3 className="font-heading font-medium text-lg text-primary-700 mb-2">Climate Solutions</h3>
                <p className="mb-4">
                  Now that you understand climate change and its impacts, it's time to explore solutions! 
                  Climate solutions exist at many levels: individual, community, national, and global.
                </p>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <h4 className="font-heading font-medium text-primary-700 mb-2">UN's 10 Climate Actions</h4>
                  <p className="mb-2 text-gray-700">
                    The United Nations has identified key actions individuals can take to combat climate change.
                  </p>
                  <a 
                    href="https://www.un.org/en/actnow"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-secondary-600 hover:text-secondary-700"
                  >
                    Visit UN Climate Action Site
                    <ExternalLink size={14} className="ml-1" />
                  </a>
                </div>
                
                <h3 className="font-heading font-medium text-lg text-primary-700 mb-2">Activity</h3>
                <p className="mb-3">
                  Evaluate different climate solutions based on criteria like effectiveness, 
                  feasibility, cost, and time to implement. This will help you identify the most promising solutions for your campaign.
                </p>
              </div>
            )}
            
            {/* Step 5 - Design Your Campaign */}
            {step.id === 5 && (
              <div>
                <h3 className="font-heading font-medium text-lg text-primary-700 mb-2">Creating Your Climate Action Campaign</h3>
                <p className="mb-4">
                  Now it's time to design your climate action campaign! Remember, you can choose to create a video, 
                  an infographic, or a school assembly plan. Your campaign should:
                </p>
                
                <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700">
                  <li>Clearly explain a specific climate issue using accurate information</li>
                  <li>Include compelling data and visuals to support your message</li>
                  <li>Present specific, realistic actions people can take</li>
                  <li>Be engaging and appropriate for your target audience</li>
                  <li>Be creative and original</li>
                </ul>
                
                <h3 className="font-heading font-medium text-lg text-primary-700 mb-2">Campaign Guidelines</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-heading font-medium text-primary-700 mb-2">Video</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>2-3 minutes long</li>
                      <li>Include narration and visuals</li>
                      <li>Cite your sources</li>
                      <li>End with a clear call to action</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-heading font-medium text-primary-700 mb-2">Infographic</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>Single page or digital slide</li>
                      <li>Include data visualizations</li>
                      <li>Use minimal text, maximum impact</li>
                      <li>Include sources for your data</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-heading font-medium text-primary-700 mb-2">Assembly Plan</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>15-20 minute program</li>
                      <li>Include speaking parts and visuals</li>
                      <li>Plan interactive elements</li>
                      <li>Create a detailed schedule</li>
                    </ul>
                  </div>
                </div>
                
                <h3 className="font-heading font-medium text-lg text-primary-700 mb-2">Activity</h3>
                <p className="mb-3">
                  Create your campaign ensuring it includes all necessary elements 
                  and effectively communicates your message.
                </p>
              </div>
            )}
            
            {/* Step 6 - Present & Advocate */}
            {step.id === 6 && (
              <div>
                <h3 className="font-heading font-medium text-lg text-primary-700 mb-2">Preparing to Present</h3>
                <p className="mb-4">
                  Now that you've created your climate action campaign, it's time to prepare to present it to others. 
                  Effective presentation skills are crucial for advocating for climate action.
                </p>
                
                <h3 className="font-heading font-medium text-lg text-primary-700 mb-2">Presentation Tips</h3>
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      <span className="font-medium">Know your audience:</span> Tailor your message to their interests and concerns.
                    </li>
                    <li>
                      <span className="font-medium">Be confident:</span> Practice your presentation multiple times before delivering it.
                    </li>
                    <li>
                      <span className="font-medium">Speak clearly:</span> Use a strong, clear voice and avoid speaking too quickly.
                    </li>
                    <li>
                      <span className="font-medium">Use visuals effectively:</span> Make sure any slides or props support your message.
                    </li>
                    <li>
                      <span className="font-medium">Anticipate questions:</span> Be ready to answer questions about your campaign.
                    </li>
                    <li>
                      <span className="font-medium">End with a call to action:</span> Clearly state what you want your audience to do.
                    </li>
                  </ul>
                </div>
                
                <h3 className="font-heading font-medium text-lg text-primary-700 mb-2">Activity</h3>
                <p className="mb-3">
                  Reflect on what you've learned about climate change, 
                  how your views have changed, and what actions you can take moving forward.
                </p>
              </div>
            )}
            
            {/* Step 7 - Reflect & Take Action */}
            {step.id === 7 && (
              <div>
                <h3 className="font-heading font-medium text-lg text-primary-700 mb-2">Reflection and Future Action</h3>
                <p className="mb-4">
                  The final step of your WebQuest is to reflect on what you've learned and commit to ongoing climate action.
                </p>
                
                <h3 className="font-heading font-medium text-lg text-primary-700 mb-2">Reflection Questions</h3>
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <p className="italic text-gray-600 mb-3">
                    "Reflection is an essential part of learning. Taking time to think about what you've learned helps cement new knowledge and inspires future action."
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>What was the most surprising thing you learned about climate change?</li>
                    <li>How has your understanding of climate issues changed?</li>
                    <li>What skills did you develop during this WebQuest?</li>
                    <li>Which climate solutions do you think are most important? Why?</li>
                    <li>What actions will you personally take to address climate change?</li>
                    <li>How can you continue to be a climate advocate in your community?</li>
                  </ul>
                </div>
                
                <h3 className="font-heading font-medium text-lg text-primary-700 mb-2">Activity</h3>
                <p className="mb-3">
                  Use the "Reflection Questions" worksheet to guide your reflections on the WebQuest experience. 
                  Then, create a personal climate action plan outlining specific steps you'll take in the coming weeks and months.
                </p>
              </div>
            )}
            
            {/* Resources for each step */}
            <div className="mt-6 pt-4 border-t border-gray-200">
              <h3 className="font-heading font-medium text-lg text-primary-700 mb-3">Resources for this Step</h3>
              <div className="space-y-3">
                {step.resources.map((resource, index) => (
                  <div key={index}>
                    {resource.type === 'download' && (
                      <DownloadResource
                        title={resource.title}
                        description={resource.description}
                        fileUrl={resource.url}
                        fileType={resource.fileType || 'PDF'}
                      />
                    )}
                    {resource.type === 'link' && (
                      <div className="bg-white p-3 rounded-lg border border-gray-200 flex justify-between items-center">
                        <div>
                          <h4 className="font-heading font-medium text-primary-700">{resource.title}</h4>
                          {resource.description && <p className="text-sm text-gray-600">{resource.description}</p>}
                        </div>
                        <a 
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-secondary-600 hover:text-secondary-700"
                        >
                          Visit
                          <ExternalLink size={14} className="ml-1" />
                        </a>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </CollapsibleSection>
        ))}
      </div>
    </div>
  );
};

export default Process;