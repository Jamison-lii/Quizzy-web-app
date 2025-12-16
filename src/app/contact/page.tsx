"use client";

import { useState } from 'react';
import {
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaUser,
  FaPen,
  FaMessage
} from "react-icons/fa6";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      setStatus('success');
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Failed to send message');
      console.error('Submission error:', err);
    }
  };
  return (
    <div className="min-h-screen bg-white text-gray-800">

      {/* NAVBAR */}
      <header className="flex items-center justify-between px-10 py-4 border-b">
      </header>

      {/* Status Messages */}
      {status === 'success' && (
        <div className="fixed top-4 right-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded flex items-center gap-2">
          <FaCheckCircle />
          <span>Message sent successfully!</span>
        </div>
      )}

      {status === 'error' && (
        <div className="fixed top-4 right-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded flex items-center gap-2">
          <FaExclamationCircle />
          <span>{error || 'Failed to send message. Please try again.'}</span>
        </div>
      )}

      <main className="flex flex-col md:flex-row justify-between px-10 py-16 gap-12">
        {/* LEFT */}
        <section className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-3">Get in Touch</h2>
          <p className="text-sm text-gray-600 mb-8">
            For any questions, partnerships, or support requests, please reach out
            using the information below or fill out the form.
          </p>

          <div className="space-y-4 text-sm">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-cyan-400" />
              <span>info@landmarkmetropolitanuniversity.com</span>
            </div>

            <div className="flex items-center gap-3">
              <FaPhone className="text-cyan-400" />
              <span>+237672339570</span>
            </div>

            <div className="flex items-center gap-3">
              <FaLocationDot className="text-cyan-400" />
              <span>Malingo street, Molyko Buea</span>
            </div>
          </div>

          <h3 className="mt-8 mb-3 font-semibold">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="social-icon"><FaFacebookF /></a>
            <a href="#" className="social-icon"><FaTwitter /></a>
            <a href="#" className="social-icon"><FaInstagram /></a>
          </div>
        </section>

        {/* RIGHT FORM */}
        <section className="md:w-1/2 bg-indigo-300 rounded-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label htmlFor="name" className="text-sm">Full Name</label>
              <div className="relative">
                <FaUser className="input-icon" />
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  className="input"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="text-sm">Email</label>
              <div className="relative">
                <FaEnvelope className="input-icon" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="input"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="text-sm">Subject</label>
              <div className="relative">
                <FaPen className="input-icon" />
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  className="input"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="text-sm">Message</label>
              <div className="relative">
                <FaMessage className="textarea-icon" />
                <textarea
                  id="message"
                  name="message"
                  placeholder="Type your message"
                  className="textarea"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className={`w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 hover:-translate-y-0.5 transition ${
                status === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {status === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>

          </form>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="flex justify-between px-10 py-4 border-t text-xs text-gray-600">
        <p>©2025, QUIZZY. All rights reserved</p>
        <div className="space-x-4">
          <a href="#" className="hover:text-indigo-600">Terms of Service</a>
          <a href="#" className="hover:text-indigo-600">Privacy Policy</a>
        </div>
      </footer>

      {/* TAILWIND UTILITIES */}
      <style>
        {`
          .input {
            width: 100%;
            padding: 0.5rem 0.75rem 0.5rem 2.5rem;
            border-radius: 0.375rem;
            outline: none;
          }

          .input:focus {
            box-shadow: 0 0 0 2px rgba(99,102,241,0.4);
          }

          .textarea {
            width: 100%;
            height: 100px;
            padding: 0.5rem 0.75rem 0.5rem 2.5rem;
            border-radius: 0.375rem;
            outline: none;
            resize: none;
          }

          .textarea:focus {
            box-shadow: 0 0 0 2px rgba(99,102,241,0.4);
          }

          .input-icon {
            position: absolute;
            top: 50%;
            left: 0.75rem;
            transform: translateY(-50%);
            color: #4f46e5;
          }

          .textarea-icon {
            position: absolute;
            top: 0.75rem;
            left: 0.75rem;
            color: #4f46e5;
          }

          .social-icon {
            font-size: 1.1rem;
            color: #22d3ee;
            cursor: pointer;
            transition: transform 0.2s, color 0.2s;
          }

          .social-icon:hover {
            color: #4f46e5;
            transform: scale(1.2);
          }
        `}
      </style>

    </div>
  );
}
