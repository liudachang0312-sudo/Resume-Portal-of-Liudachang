import React from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import BatteryBackground from './components/BatteryBackground';
import ResumeCard from './components/ResumeCard';
import { ResumeLink } from './types';

const resumeLinks: ResumeLink[] = [
  {
    label: '中文简历',
    subLabel: 'Chinese Resume',
    url: 'https://liudachang0312-sudo.github.io/-----_2025/',
    lang: 'zh'
  },
  {
    label: 'English Resume',
    subLabel: 'International',
    url: 'https://liudachang0312-sudo.github.io/English-resume/',
    lang: 'en'
  }
];

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center font-sans text-white selection:bg-green-500 selection:text-black">
      
      <BatteryBackground />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-6xl px-4 flex flex-col items-center">
        
        {/* Header */}
        <motion.header 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center justify-center p-3 mb-6 rounded-full bg-green-500/10 border border-green-500/30 backdrop-blur-md">
            <FileText className="w-5 h-5 text-green-400 mr-2" />
            <span className="text-green-300 text-xs font-mono tracking-widest uppercase">Professional Profile</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-orbitron font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-green-200 to-green-400 drop-shadow-[0_0_15px_rgba(34,197,94,0.5)] mb-4">
            LIU DACHANG
          </h1>
          <div className="h-1 w-32 mx-auto bg-green-500 rounded-full shadow-[0_0_10px_#22c55e] mb-4"></div>
          <h2 className="text-xl md:text-2xl font-light text-gray-300 tracking-[0.2em]">
            刘大昌简历
          </h2>
        </motion.header>

        {/* Cards Container */}
        <motion.div 
          className="flex flex-col md:flex-row gap-6 md:gap-12 w-full justify-center items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {resumeLinks.map((link, index) => (
            <ResumeCard key={index} data={link} />
          ))}
        </motion.div>

        {/* Footer */}
        <motion.footer 
          className="mt-20 text-center text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p className="flex items-center justify-center gap-2">
             Powered by 
             <span className="text-green-500 font-orbitron">NEW ENERGY</span> 
             Technology
          </p>
          <p className="text-xs mt-2 opacity-50">© {new Date().getFullYear()} Liu Dachang. All rights reserved.</p>
        </motion.footer>

      </div>
    </div>
  );
};

export default App;