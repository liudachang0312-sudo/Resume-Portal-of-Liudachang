import React, { useEffect, useRef, useState } from 'react';
import { Particle } from '../types';

const BatteryBackground: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Initialize particles
  useEffect(() => {
    const initialParticles = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // percent
      y: Math.random() * 100, // percent
      size: Math.random() * 3 + 1,
      speed: Math.random() * 0.5 + 0.2,
      opacity: Math.random() * 0.5 + 0.1,
    }));
    setParticles(initialParticles);
  }, []);

  // Animation loop for canvas particles (optional advanced visual, sticking to CSS/SVG for robustness first)
  // Using a high-quality image with an overlay is more reliable for the specific "battery" request.

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Base Image - Abstract Technology/Battery Vibe */}
      <div className="absolute inset-0 bg-black">
        <img 
          src="https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?q=80&w=2574&auto=format&fit=crop" 
          alt="New Energy Battery Technology" 
          className="w-full h-full object-cover opacity-60 scale-105 animate-pulse-slow"
        />
        {/* Green Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-green-900/40 to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-500/10 via-transparent to-transparent" />
      </div>

      {/* Floating Energy Particles (CSS Implementation) */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-energy-glow blur-[1px]"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            boxShadow: '0 0 10px #00ff41',
            transition: 'top 0.1s linear',
            animation: `float ${10 / p.speed}s infinite linear`,
          }}
        />
      ))}

      {/* Grid Overlay for Tech Feel */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,65,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,65,0.05)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />
    </div>
  );
};

export default BatteryBackground;