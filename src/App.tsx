import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import CourseCards from './components/CourseCards';
import ToolsCarousel from './components/ToolsCarousel';
import CurriculumTabs from './components/CurriculumTabs';
import Mentors from './components/Mentors';
import CareerServices from './components/CareerServices';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <WhyChooseUs />
      <CourseCards />
      <ToolsCarousel />
      <CurriculumTabs />
      <Mentors />
      <CareerServices />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;