import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PartnerLogos from './components/PartnerLogos';
import FeaturedCourses from './components/FeaturedCourses';
import LearningPaths from './components/LearningPaths';
import ValueProposition from './components/ValueProposition';
import CreatorCTA from './components/CreatorCTA';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearch = (query) => {
    console.log('Search query:', query);
    // Smooth scroll down to courses section
    const coursesEl = document.getElementById('courses');
    if (coursesEl) {
      coursesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (currentPage === 'login') {
    return <Login onNavigate={handleNavigate} />;
  }

  if (currentPage === 'signup') {
    return <Signup onNavigate={handleNavigate} />;
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#CCFF00] selection:text-[#0F172A]">
      {/* 1. Navbar */}
      <Navbar onNavigate={handleNavigate} />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero onSearch={handleSearch} />

        {/* 3. Partner Logos */}
        <PartnerLogos />

        {/* 4. Featured Courses */}
        <FeaturedCourses />

        {/* 5. Diverse Learning Paths */}
        <LearningPaths onSelectPath={(path) => console.log('Selected path:', path)} />

        {/* 6. Value Proposition (Professional Growth & Course Management) */}
        <ValueProposition />

        {/* 7. Creator Call to Action Banner */}
        <CreatorCTA onJoin={() => handleNavigate('signup')} />

        {/* 8. Testimonials Section */}
        <Testimonials />
      </main>

      {/* 9. Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
