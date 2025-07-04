import React, { useState } from 'react';
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
import BookCallPopup from './components/BookCallPopup';
import CurriculumDownloadPopup from './components/CurriculumDownloadPopup';
import CareerGuidancePopup from './components/CareerGuidancePopup';
import WhatsAppChat from './components/WhatsAppChat';
import CourseDetailPage from './components/CourseDetailPage';

function App() {
  const [activePopup, setActivePopup] = useState<string | null>(null);
  const [currentView, setCurrentView] = useState<'home' | 'course'>('home');
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  const openPopup = (popupType: string) => {
    setActivePopup(popupType);
  };

  const closePopup = () => {
    setActivePopup(null);
  };

  const openCourseDetail = (courseId: string) => {
    setSelectedCourse(courseId);
    setCurrentView('course');
  };

  const backToHome = () => {
    setCurrentView('home');
    setSelectedCourse(null);
  };

  if (currentView === 'course' && selectedCourse) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <CourseDetailPage 
          courseId={selectedCourse} 
          onBack={backToHome}
          onOpenPopup={openPopup}
        />
        <Footer />

        {/* Popups */}
        <BookCallPopup 
          isOpen={activePopup === 'bookCall'} 
          onClose={closePopup} 
        />
        <CurriculumDownloadPopup 
          isOpen={activePopup === 'downloadCurriculum'} 
          onClose={closePopup} 
        />
        <CareerGuidancePopup 
          isOpen={activePopup === 'careerGuidance'} 
          onClose={closePopup} 
        />

        {/* WhatsApp Chat Integration */}
        <WhatsAppChat />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero onOpenPopup={openPopup} />
      <WhyChooseUs />
      <CourseCards onOpenPopup={openPopup} onOpenCourseDetail={openCourseDetail} />
      <ToolsCarousel />
      <CurriculumTabs onOpenPopup={openPopup} />
      <Mentors onOpenPopup={openPopup} />
      <CareerServices onOpenPopup={openPopup} />
      <Testimonials onOpenPopup={openPopup} />
      <FAQ onOpenPopup={openPopup} />
      <Footer />

      {/* Popups */}
      <BookCallPopup 
        isOpen={activePopup === 'bookCall'} 
        onClose={closePopup} 
      />
      <CurriculumDownloadPopup 
        isOpen={activePopup === 'downloadCurriculum'} 
        onClose={closePopup} 
      />
      <CareerGuidancePopup 
        isOpen={activePopup === 'careerGuidance'} 
        onClose={closePopup} 
      />

      {/* WhatsApp Chat Integration */}
      <WhatsAppChat />
    </div>
  );
}

export default App;