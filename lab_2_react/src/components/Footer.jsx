import { useEffect, useState } from 'react';

export default function Footer() {
  const [systemInfo, setSystemInfo] = useState('');

  useEffect(() => {
    const info = `Браузер: ${navigator.userAgent} | Платформа: ${navigator.platform}`;
    localStorage.setItem('os_browser_info', info);
    const savedData = localStorage.getItem('os_browser_info');
    setSystemInfo(savedData);
  }, []);

  return (
    <footer className="mt-16 pt-6 border-t border-gray-300 text-gray-600 text-lg text-center">
      <div className="mb-4 text-sm text-gray-500 uppercase tracking-widest">
        Системні дані з localStorage: <br />
        <span className="text-pink-500 font-semibold">{systemInfo}</span>
      </div>
      <p>© 2026 Andrii. Created for Web Programming</p>
    </footer>
  );
}

