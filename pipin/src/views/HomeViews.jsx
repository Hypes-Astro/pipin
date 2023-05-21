import React from 'react';
import Navbar from '../components/Home/Navbar';

const HomeView = () => {
  return (
    <div className="bg-blue-400">
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold">Welcome to Home Page</h1>
        <p className="text-gray-600">This is the main page of your website.</p>
        
      </div>
    </div>
  );
};

export default HomeView;
