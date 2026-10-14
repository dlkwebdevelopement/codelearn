import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaDocker, FaCode } from 'react-icons/fa';

const Hero3DAnimation = () => {
  return (
    <div className="relative w-full lg:w-1/2 min-h-[400px] lg:min-h-full flex items-center justify-center overflow-hidden">
      {/* 3D Container */}
      <div className="relative w-full max-w-lg aspect-square perspective-1000">
        {/* Center glow */}
        <div className="absolute inset-0 bg-emerald-500/20 blur-[100px] rounded-full"></div>
        
        {/* Orbital rings (Pseudo-3D) */}
        <div className="absolute inset-4 border border-emerald-500/20 rounded-full [transform:rotateX(65deg)] animate-[spin_20s_linear_infinite]"></div>
        <div className="absolute inset-12 border border-emerald-400/20 rounded-full [transform:rotateX(65deg)_rotateY(20deg)] animate-[spin_15s_linear_infinite_reverse]"></div>
        <div className="absolute inset-20 border border-emerald-300/20 rounded-full [transform:rotateX(65deg)_rotateY(-20deg)] animate-[spin_25s_linear_infinite]"></div>

        {/* Floating Icons */}
        <div className="absolute top-[10%] left-[20%] animate-[bounce_4s_infinite]">
          <div className="w-16 h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(227,79,38,0.3)] transform hover:scale-110 hover:rotate-12 transition-all duration-300 cursor-pointer">
            <FaHtml5 className="text-4xl text-[#E34F26]" />
          </div>
        </div>
        
        <div className="absolute top-[20%] right-[15%] animate-[bounce_5s_infinite_0.5s]">
          <div className="w-20 h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(97,218,251,0.3)] transform hover:scale-110 hover:-rotate-12 transition-all duration-300 cursor-pointer">
            <FaReact className="text-5xl text-[#61DAFB]" />
          </div>
        </div>

        <div className="absolute bottom-[30%] left-[10%] animate-[bounce_6s_infinite_1s]">
          <div className="w-24 h-24 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(247,223,30,0.3)] transform hover:scale-110 hover:rotate-6 transition-all duration-300 cursor-pointer">
            <FaJs className="text-6xl text-[#F7DF1E]" />
          </div>
        </div>

        <div className="absolute bottom-[15%] right-[25%] animate-[bounce_4.5s_infinite_0.2s]">
          <div className="w-16 h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(51,153,51,0.3)] transform hover:scale-110 hover:-rotate-6 transition-all duration-300 cursor-pointer">
            <FaNodeJs className="text-4xl text-[#339933]" />
          </div>
        </div>

        <div className="absolute top-[40%] right-[5%] animate-[bounce_5.5s_infinite_0.8s]">
          <div className="w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(55,118,171,0.3)] transform hover:scale-110 hover:rotate-12 transition-all duration-300 cursor-pointer">
            <FaPython className="text-3xl text-[#3776AB]" />
          </div>
        </div>

        <div className="absolute top-[50%] left-[5%] animate-[bounce_4.2s_infinite_0.3s]">
          <div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(36,150,237,0.3)] transform hover:scale-110 hover:-rotate-12 transition-all duration-300 cursor-pointer">
            <FaDocker className="text-2xl text-[#2496ED]" />
          </div>
        </div>

        {/* Center Main Icon */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="w-32 h-32 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-3xl flex items-center justify-center shadow-[0_0_50px_rgba(16,185,129,0.5)] transform hover:scale-105 transition-all duration-500 cursor-pointer border border-emerald-300/50">
            <FaCode className="text-6xl text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero3DAnimation;
