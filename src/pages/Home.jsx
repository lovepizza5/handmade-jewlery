import React from 'react';
import HeroSection from '../components/HeroSection';
import ArticlesSection from '../components/ArticlesSection';
import ChatBot from '../components/ChatBot'; // Make sure path is correct

const Home = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <ArticlesSection />
      <ChatBot /> {/* Chatbot bubble interface */}
    </div>
  );
};

export default Home;
