import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BatteryCharging, Zap } from 'lucide-react';
import { ResumeLink } from '../types';

interface ResumeCardProps {
  data: ResumeLink;
}

const ResumeCard: React.FC<ResumeCardProps> = ({ data }) => {
  return (
    <motion.a
      href={data.url}
      // External link behavior: generally safer to open in new tab if it's a distinct "file" or app
      target="_self" 
      rel="noopener noreferrer"
      className="group relative flex flex-col items-center justify-center w-full md:w-80 p-8 
                 bg-black/40 backdrop-blur-xl border border-green-500/30 rounded-2xl 
                 overflow-hidden cursor-pointer transition-all duration-500
                 hover:border-green-400 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]"
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Hover Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 via-green-500/0 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Icon */}
      <div className="mb-6 p-4 rounded-full bg-green-900/20 border border-green-500/20 group-hover:bg-green-500/20 group-hover:border-green-400 transition-colors duration-300 relative">
        <div className="absolute inset-0 rounded-full animate-pulse opacity-0 group-hover:opacity-50 bg-green-400 blur-md"></div>
        {data.lang === 'zh' ? (
          <BatteryCharging className="w-8 h-8 text-green-400 group-hover:text-white transition-colors" />
        ) : (
          <Zap className="w-8 h-8 text-green-400 group-hover:text-white transition-colors" />
        )}
      </div>

      {/* Text */}
      <h3 className="text-2xl font-orbitron font-bold text-white mb-2 tracking-wide group-hover:text-energy-glow transition-colors">
        {data.label}
      </h3>
      <p className="text-green-200/60 text-sm font-medium uppercase tracking-widest mb-6">
        {data.subLabel}
      </p>

      {/* Action Indicator */}
      <div className="flex items-center space-x-2 text-green-500 font-semibold text-sm group-hover:text-white transition-colors">
        <span>View Resume</span>
        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
      </div>
    </motion.a>
  );
};

export default ResumeCard;