import React, { useState } from 'react';
import { Download, FileText, CheckCircle, Mail, User, Phone } from 'lucide-react';
import PopupModal from './PopupModal';

interface CurriculumDownloadPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const CurriculumDownloadPopup: React.FC<CurriculumDownloadPopupProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: ''
  });
  const [isDownloading, setIsDownloading] = useState(false);

  const courses = [
    { name: 'Master in AI', file: 'https://drive.google.com/file/d/1example-ai-curriculum/view?usp=sharing' },
    { name: 'Master in Data Science', file: 'https://drive.google.com/file/d/1example-ds-curriculum/view?usp=sharing' },
    { name: 'Data Analyst', file: 'https://drive.google.com/file/d/1example-da-curriculum/view?usp=sharing' },
    { name: 'Full Stack Python', file: 'https://drive.google.com/file/d/1example-fs-curriculum/view?usp=sharing' },
    { name: 'Power BI', file: 'https://drive.google.com/file/d/1example-pbi-curriculum/view?usp=sharing' },
    { name: 'Tableau', file: 'https://drive.google.com/file/d/1example-tableau-curriculum/view?usp=sharing' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsDownloading(true);
    
    // Simulate API call
    setTimeout(() => {
      const selectedCourse = courses.find(course => course.name === formData.course);
      if (selectedCourse) {
        // Convert Google Drive view link to download link
        const fileId = selectedCourse.file.match(/\/d\/(.+?)\//)?.[1];
        if (fileId) {
          const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
          window.open(downloadUrl, '_blank');
        }
      }
      
      setIsDownloading(false);
      alert('Curriculum download started! Check your downloads folder.');
      onClose();
    }, 2000);
  };

  return (
    <PopupModal isOpen={isOpen} onClose={onClose} title="Download Course Curriculum">
      <div className="space-y-6">
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-500 to-blue-500 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <FileText className="h-8 w-8 text-white" />
          </div>
          <p className="text-gray-600">
            Get detailed curriculum with syllabus, projects, and learning outcomes for your chosen course.
          </p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h3 className="font-semibold text-green-800 mb-2">What's included in the curriculum:</h3>
          <ul className="space-y-1 text-sm text-green-700">
            <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2" />Complete module breakdown</li>
            <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2" />Project descriptions</li>
            <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2" />Tools and technologies</li>
            <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2" />Career outcomes</li>
            <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2" />Prerequisites</li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <User className="h-4 w-4 inline mr-2" />
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Mail className="h-4 w-4 inline mr-2" />
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Phone className="h-4 w-4 inline mr-2" />
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Course
            </label>
            <select
              name="course"
              value={formData.course}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              required
            >
              <option value="">Choose a course</option>
              {courses.map((course, index) => (
                <option key={index} value={course.name}>{course.name}</option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            disabled={isDownloading}
            className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:from-green-600 hover:to-blue-600 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isDownloading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Preparing Download...
              </div>
            ) : (
              <>
                <Download className="h-5 w-5 inline mr-2" />
                Download Curriculum PDF
              </>
            )}
          </button>
        </form>

        <div className="text-center text-sm text-gray-500">
          <p>✓ Instant download ✓ No spam emails ✓ Updated curriculum</p>
        </div>
      </div>
    </PopupModal>
  );
};

export default CurriculumDownloadPopup;