import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate for redirection
import Carousel from './Carousel';
import Pricing from './Pricing';
import TeamMemberSection from './OurTeam';
import Footer from './Footer';

const HomeScreen = ({translations}) => {
  const navigate = useNavigate();  // Initialize useNavigate

  const handleTestRedirect = () => {
    navigate('/test');  // Redirect to the test page
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center bg-secondary">
        <div className="w-full mx-auto my-8">
          <Carousel />
        </div>
        <div className="w-full max-w-6xl mx-auto my-8">
          <h1 className="text-4xl font-bold mb-4">{translations.homescreen.welcome}</h1>
          <p className="text-lg mb-8">{translations.homescreen.quote}</p>
          <button
            onClick={handleTestRedirect}  // Add click handler for redirection
            className="bg-primary hover:bg-tetriary text-white font-bold py-2 px-4 rounded"
          >
            {translations.homescreen.test}
          </button>
        </div>
      </div>

      <div className="bg-secondary">
        <Pricing translations={translations} />
      </div>
      <TeamMemberSection translations={translations} />
      <Footer translations={translations}/>
    </>
  );
};

export default HomeScreen;
