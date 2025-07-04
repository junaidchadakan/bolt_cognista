import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';

interface FAQProps {
  onOpenPopup: (popupType: string) => void;
}

const FAQ: React.FC<FAQProps> = ({ onOpenPopup }) => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is the best course to become a Data Scientist?",
      answer: "Our Master in Data Science program is comprehensive and industry-focused. It covers Python programming, machine learning, statistics, data visualization, and real-world projects. The program includes 1:1 mentorship, hands-on projects, and guaranteed placement assistance. Most graduates land roles at top companies like Google, Microsoft, and Amazon."
    },
    {
      question: "How does this AI course compare with others in the market?",
      answer: "Our AI course stands out because of practical, project-based learning with real industry tools like TensorFlow and PyTorch. Unlike theoretical courses, we focus on building actual AI applications. You get 1:1 mentorship from professionals at Google DeepMind, Meta, and other top companies. Plus, we provide 100% placement assistance with our 500+ hiring partners."
    },
    {
      question: "Is placement assistance really included? What does it cover?",
      answer: "Yes! Our placement assistance is comprehensive and includes: resume building and optimization, mock interviews with industry experts, direct connections with our 500+ hiring partners, salary negotiation support, and ongoing career guidance even after placement. We have a 95% placement rate with an average package of ₹12 LPA."
    },
    {
      question: "What tools and technologies will I learn in these courses?",
      answer: "You'll master industry-standard tools including Python, TensorFlow, PyTorch, Pandas, Scikit-learn, Tableau, Power BI, SQL, MongoDB, Docker, Git, AWS, and more. All tools are taught through hands-on projects that you can showcase in your portfolio. We ensure you're job-ready with the exact skills employers want."
    },
    {
      question: "Can I switch careers with this course if I'm from a non-tech background?",
      answer: "Absolutely! Many of our successful graduates came from non-tech backgrounds - marketing, sales, teaching, HR, and more. Our curriculum starts from basics and gradually builds to advanced concepts. With 1:1 mentorship and structured learning path, we've helped thousands make successful career transitions. Age is not a barrier - we've had successful career changers in their 30s and 40s."
    },
    {
      question: "How long does it take to complete the courses?",
      answer: "Course duration varies: Data Analyst (6 months), Full Stack Python (8 months), Master in Data Science (10 months), Master in AI (12 months), Power BI (3 months), and Tableau (3 months). All courses are designed to fit working professionals with flexible schedules including evening and weekend batches."
    },
    {
      question: "What kind of projects will I work on during the course?",
      answer: "You'll work on real-world projects that mirror actual industry challenges. Examples include building recommendation systems for e-commerce, creating fraud detection models for banking, developing chatbots with NLP, building full-stack web applications, and creating interactive dashboards for business intelligence. All projects go into your portfolio."
    },
    {
      question: "Do you provide certificates upon completion?",
      answer: "Yes, you'll receive industry-recognized certificates upon successful completion of each course. Additionally, you'll earn certificates for individual projects and specializations. These certificates are valued by employers and can be showcased on LinkedIn and your resume."
    },
    {
      question: "What is the fee structure and are there any payment options?",
      answer: "We offer flexible payment options including installments and income-share agreements. Fees vary by course, but we believe in making quality education accessible. We also provide scholarships for deserving candidates. Contact our counselors for detailed fee structure and payment plans that work for your budget."
    },
    {
      question: "How is the mentorship structured? Will I get personal attention?",
      answer: "Every student gets a dedicated 1:1 mentor who is an industry professional from companies like Google, Meta, Microsoft, etc. You'll have weekly mentorship calls, project reviews, career guidance, and ongoing support throughout your journey. This personal attention ensures you're never stuck and always progressing."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <HelpCircle className="h-12 w-12 text-purple-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-purple-600">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get answers to the most common questions about our courses, placement, and career support
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openFAQ === index ? (
                    <ChevronUp className="h-5 w-5 text-purple-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  )}
                </div>
              </button>
              
              {openFAQ === index && (
                <div className="px-6 pb-5">
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-lg mb-6 opacity-90">
              Our career counselors are here to help you make the right decision
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => onOpenPopup('bookCall')}
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Book Free Consultation
              </button>
              <WhatsAppButton 
                message="Hi! I have some questions about TechAcademy courses and need guidance."
                className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-lg"
              >
                <span>Ask on WhatsApp</span>
              </WhatsAppButton>
              <button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors">
                Call Now: +91-9876543210
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;