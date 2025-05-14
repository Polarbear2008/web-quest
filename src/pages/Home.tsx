import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Button from '../components/UI/Button';
import Card, { CardContent, CardImage } from '../components/UI/Card';

const Home: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
        <div className="md:w-1/2 animate-slide-in">
          <h1 className="font-heading font-bold text-4xl sm:text-5xl text-primary-800 mb-4">
            Become a Climate Change Explorer!
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            What if your actions could help save the Earth? Climate change is one of the biggest challenges of our time—rising temperatures, melting ice caps, and extreme weather affect us all. But how can we make a difference?
          </p>
          <p className="text-lg text-gray-700 mb-8">
            In this WebQuest, you'll investigate causes, impacts, and solutions to create a brighter future.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/task">
              <Button size="lg">
                Start Your Journey
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
            <Link to="/process">
              <Button variant="outline" size="lg">
                View Process
              </Button>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2">
          <img 
            src="https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg" 
            alt="Earth from space" 
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="mb-16">
        <h2 className="font-heading font-bold text-3xl text-primary-800 mb-8 text-center">
          Your Climate Change Journey
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card hoverable className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <CardImage 
              src="https://images.pexels.com/photos/8451499/pexels-photo-8451499.jpeg" 
              alt="Investigate Climate Change" 
            />
            <CardContent>
              <h3 className="font-heading font-semibold text-xl mb-2 text-primary-700">Investigate</h3>
              <p className="text-gray-600 mb-4">
                Explore the science behind climate change and analyze real data to understand what's happening to our planet.
              </p>
              <Link to="/process">
                <Button variant="text" className="text-primary-600 p-0">
                  Learn More <ArrowRight className="inline ml-1" size={16} />
                </Button>
              </Link>
            </CardContent>
          </Card>
          
          <Card hoverable className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <CardImage 
              src="https://images.pexels.com/photos/3943969/pexels-photo-3943969.jpeg" 
              alt="Create Solutions" 
            />
            <CardContent>
              <h3 className="font-heading font-semibold text-xl mb-2 text-primary-700">Create</h3>
              <p className="text-gray-600 mb-4">
                Design your own climate action campaign to raise awareness and inspire others to make a difference.
              </p>
              <Link to="/task">
                <Button variant="text" className="text-primary-600 p-0">
                  Learn More <ArrowRight className="inline ml-1" size={16} />
                </Button>
              </Link>
            </CardContent>
          </Card>
          
          <Card hoverable className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <CardImage 
              src="https://images.pexels.com/photos/3657429/pexels-photo-3657429.jpeg" 
              alt="Take Action" 
            />
            <CardContent>
              <h3 className="font-heading font-semibold text-xl mb-2 text-primary-700">Act</h3>
              <p className="text-gray-600 mb-4">
                Put your knowledge into action by advocating for climate solutions and making sustainable choices.
              </p>
              <Link to="/conclusion">
                <Button variant="text" className="text-primary-600 p-0">
                  Learn More <ArrowRight className="inline ml-1" size={16} />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-primary-50 rounded-xl p-8 text-center">
        <h2 className="font-heading font-bold text-2xl text-primary-800 mb-4">Ready to Begin?</h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Follow the structured process to learn about climate change, develop creative solutions, and become an advocate for our planet's future.
        </p>
        <Link to="/task">
          <Button size="lg">
            View Your Tasks
            <ArrowRight className="ml-2" size={18} />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;