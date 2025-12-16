// app/faq/page.tsx (or pages/faq.tsx if using pages directory)
'use client'; // Remove this line if using pages directory

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "What is Quizzy and how does it work?",
      a: "Quizzy is an interactive learning platform that helps students master new skills through engaging quizzes and courses. Simply download the app, browse available courses, and start learning at your own pace with instant feedback on your progress."
    },
    {
      q: "Is Quizzy free to use?",
      a: "Yes! Quizzy is completely free to get started. You can access a wide range of courses and quizzes without any cost. We also offer premium features for users who want additional learning tools and advanced analytics."
    },
    {
      q: "How do I download the Quizzy app?",
      a: "You can download Quizzy for both Android and iOS devices. Simply click on the 'Download App' button in the navigation bar or use the download buttons on this page to get the version for your device from the Google Play Store or Apple App Store."
    },
    {
      q: "What types of courses are available?",
      a: "Quizzy offers a diverse range of courses across multiple subjects including mathematics, science, languages, technology, business, and more. Each course is designed with interactive quizzes to help reinforce your learning and track your progress."
    },
    {
      q: "Can I track my learning progress?",
      a: "Absolutely! Quizzy includes comprehensive progress tracking features. You can monitor your quiz scores, completion rates, and overall performance across different courses. This helps you identify areas where you excel and topics that need more practice."
    },
    {
      q: "Do I need an internet connection to use Quizzy?",
      a: "While you need an internet connection to download courses and sync your progress, many of our courses can be accessed offline once downloaded. This allows you to continue learning even when you don't have an active internet connection."
    },
    {
      q: "How often is new content added?",
      a: "We regularly update our course library with new content. New courses and quizzes are added weekly, and existing courses are frequently updated to ensure the content remains current and relevant to modern learning needs."
    },
    {
      q: "Can I use Quizzy on multiple devices?",
      a: "Yes! Your Quizzy account syncs across all your devices. You can start a course on your phone, continue on your tablet, and finish on your computer. Your progress is automatically saved and synchronized across all platforms."
    }
  ];

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Download handlers
  const handleDownloadAndroid = () => {
    // Replace with your actual Google Play Store URL
    window.open('https://play.google.com/store/apps/details?id=com.quizzy.app', '_blank');
  };

  const handleDownloadiOS = () => {
    // Replace with your actual App Store URL
    window.open('https://apps.apple.com/app/quizzy/id123456789', '_blank');
  };

  const handleDownloadApp = () => {
    // Detect platform and redirect accordingly
    const userAgent = navigator.userAgent || navigator.vendor;
    
    if (/android/i.test(userAgent)) {
      handleDownloadAndroid();
    } else if (/iPad|iPhone|iPod/.test(userAgent)) {
      handleDownloadiOS();
    } else {
      // For desktop, show both options or redirect to a landing page
      alert('Please visit our website on your mobile device or choose your platform below.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
    
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-600 text-lg">
            Find answers to common questions about our platform
          </p>
        </div>

        {/* Download Buttons */}
        <div className="flex flex-wrap gap-4 mb-12">
          <button 
            onClick={handleDownloadAndroid}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            Download For Android
          </button>
          <button 
            onClick={handleDownloadiOS}
            className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            Download For iOS
          </button>
          <button 
            onClick={handleDownloadiOS}
            className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            Download For iOS
          </button>
          <button 
            onClick={handleDownloadiOS}
            className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            Download For iOS
          </button>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-16">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition"
              >
                <span className="font-medium text-gray-900 text-lg pr-4">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-blue-800 rounded-3xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Join Our Community
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of students today and take the first step towards mastering new
            skills. It's free to get started!
          </p>
          <button 
            onClick={handleDownloadApp}
            className="bg-white hover:bg-gray-100 text-gray-900 px-10 py-4 rounded-full text-xl font-bold transition shadow-lg"
          >
            Download Now
          </button>
        </div>
      </div>
    </div>
  );
}


// ============================================
// BONUS: Download Links Configuration
// ============================================
// Create a separate config file if you want to manage links centrally
// config/download-links.ts
/*
export const DOWNLOAD_LINKS = {
  android: 'https://play.google.com/store/apps/details?id=com.quizzy.app',
  ios: 'https://apps.apple.com/app/quizzy/id123456789',
  web: 'https://web.quizzy.com',
};
*/
