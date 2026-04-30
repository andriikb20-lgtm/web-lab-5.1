import { useState, useEffect } from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import Education from './components/Education';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm.jsx';
import Footer from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 7 || currentHour >= 21) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`min-h-screen p-10 font-sans leading-relaxed transition-colors duration-500 ${
      theme === 'dark' ? 'bg-slate-900 text-slate-100' : 'bg-[#f0f2f5] text-[#333]'
    }`}>
      <div className={`max-w-[1000px] mx-auto p-12 shadow-sm border ${
        theme === 'dark' ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
      }`}>
        <button 
          onClick={toggleTheme}
          className="float-right mb-4 p-2 border rounded hover:bg-gray-200 transition-colors"
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
        
        <Header />
        <Profile />
        <Education />
        <Reviews />
        <Footer />
      </div>
      <ContactForm />
    </div>
  );
}