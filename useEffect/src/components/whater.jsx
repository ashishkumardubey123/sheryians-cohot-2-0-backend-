import React, { useState } from 'react';
import { 
  CloudRain, 
  MapPin, 
  Search, 
  Wind, 
  Droplets, 
  Sun, 
  Menu, 
  Thermometer 
} from 'lucide-react';

const WeatherApp = () => {
  const [activeHour, setActiveHour] = useState(0);

  const hours = [
    { time: '10 AM', icon: <Sun size={18} className="text-amber-300" />, temp: 28 },
    { time: '11 AM', icon: <Sun size={18} className="text-amber-300" />, temp: 29 },
    { time: '12 PM', icon: <CloudRain size={18} className="text-blue-300" />, temp: 26 },
    { time: '01 PM', icon: <CloudRain size={18} className="text-blue-300" />, temp: 25 },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 p-4">

      {/* Ambient background blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500 rounded-full opacity-10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-600 rounded-full opacity-10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-amber-400 rounded-full opacity-5 blur-3xl" />
      </div>

      {/* Card */}
      <div className="relative w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl border border-white/5"
        style={{ background: 'linear-gradient(160deg, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0.85) 100%)', backdropFilter: 'blur(40px)' }}>

        {/* Top subtle border glow */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />

        {/* ── Top Bar ── */}
        <div className="flex justify-between items-center px-6 pt-6">
          <button className="p-2.5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer">
            <Menu size={18} className="text-slate-300" />
          </button>

          <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-2xl">
            <MapPin size={13} className="text-sky-400" />
            <span className="text-slate-200 text-sm font-medium tracking-wide">Mumbai, India</span>
          </div>

          <button className="p-2.5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer">
            <Search size={18} className="text-slate-300" />
          </button>
        </div>

        {/* ── Main Weather Display ── */}
        <div className="flex flex-col items-center pt-8 pb-4 px-6">

          {/* Sun with layered glow */}
          <div className="relative flex items-center justify-center w-36 h-36 mb-2">
            <div className="absolute inset-0 bg-amber-400 rounded-full opacity-10 blur-2xl scale-150" />
            <div className="absolute inset-4 bg-amber-300 rounded-full opacity-15 blur-xl" />
            <Sun size={88} className="relative z-10 text-amber-300 drop-shadow-lg" strokeWidth={1} />
          </div>

          {/* Temperature */}
          <div className="flex items-start leading-none mt-2">
            <span className="text-9xl font-thin text-white tracking-tighter" style={{ fontFamily: 'Georgia, serif' }}>
              28
            </span>
            <span className="text-3xl text-sky-400 mt-3 font-light">°C</span>
          </div>

          {/* Condition */}
          <p className="text-base font-medium tracking-[0.25em] uppercase text-slate-300 mt-3">
            Sunny
          </p>

          {/* Hi / Lo chips */}
          <div className="flex gap-3 mt-3 mb-1">
            <span className="text-xs bg-amber-400/10 border border-amber-400/20 text-amber-300 px-3 py-1 rounded-full tracking-widest">
              H: 32°
            </span>
            <span className="text-xs bg-sky-400/10 border border-sky-400/20 text-sky-300 px-3 py-1 rounded-full tracking-widest">
              L: 22°
            </span>
          </div>

          {/* Date */}
          <p className="text-xs text-slate-500 tracking-widest uppercase mt-2">
            Wednesday, 18 Feb
          </p>
        </div>

        {/* ── Divider ── */}
        <div className="mx-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* ── Stats Grid ── */}
        <div className="grid grid-cols-3 gap-3 px-6 py-5">
          {[
            { icon: <Wind size={18} className="text-sky-400" />, val: '12 km/h', label: 'Wind' },
            { icon: <Droplets size={18} className="text-blue-400" />, val: '45%', label: 'Humidity' },
            { icon: <Thermometer size={18} className="text-orange-400" />, val: '32°', label: 'Real Feel' },
          ].map((stat, i) => (
            <div key={i}
              className="flex flex-col items-center gap-2 bg-white/[0.04] border border-white/[0.07] rounded-2xl p-3.5 hover:bg-white/[0.08] hover:-translate-y-0.5 transition-all duration-300 cursor-default">
              {stat.icon}
              <span className="text-sm font-semibold text-slate-200">{stat.val}</span>
              <span className="text-[10px] text-slate-500 tracking-widest uppercase">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* ── Forecast Section ── */}
        <div className="mx-4 mb-4 rounded-2xl overflow-hidden border border-white/[0.06]"
          style={{ background: 'rgba(255,255,255,0.03)' }}>

          {/* Forecast Header */}
          <div className="flex justify-between items-center px-5 pt-4 pb-3">
            <h3 className="text-sm font-semibold text-slate-200 tracking-wide">Today</h3>
            <span className="text-xs text-sky-400 hover:text-sky-300 cursor-pointer tracking-widest uppercase transition-colors">
              7-Day →
            </span>
          </div>

          {/* Divider */}
          <div className="mx-4 h-px bg-white/5" />

          {/* Hourly Items */}
          <div className="flex justify-between items-center px-4 py-4 gap-2">
            {hours.map((item, i) => (
              <button key={i} onClick={() => setActiveHour(i)}
                className={`flex flex-col items-center gap-2 flex-1 py-3 rounded-xl border transition-all duration-300
                  ${activeHour === i
                    ? 'bg-sky-500/20 border-sky-400/40 shadow-lg shadow-sky-500/10 scale-105'
                    : 'bg-transparent border-transparent hover:bg-white/5 hover:border-white/10'
                  }`}>
                <span className={`text-[10px] tracking-widest uppercase ${activeHour === i ? 'text-sky-300' : 'text-slate-500'}`}>
                  {item.time}
                </span>
                <div className={`transition-all duration-300 ${activeHour === i ? 'scale-110' : 'opacity-60'}`}>
                  {item.icon}
                </div>
                <span className={`text-sm font-bold ${activeHour === i ? 'text-white' : 'text-slate-400'}`}>
                  {item.temp}°
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Bottom subtle border glow */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-400/20 to-transparent" />
      </div>
    </div>
  );
};

export default WeatherApp;