import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../index.css';
import Jinwoo from '../assets/Pictures/Jinwoo.png';

function Navbar() {
  const location = useLocation();
  const navItems = [
    { name: "Home", path: "/" },
    { name: "MyList", path: "/mylist" },
    { name: "AI Anime Recommendation", path: "/ai" }
  ];

  return (
    <nav className="bg-slate-900/60 backdrop-blur-md border-b border-slate-700/30 text-white p-6 flex items-center justify-between shadow-2xl">
      <img 
        src={Jinwoo} 
        alt="Loading..." 
        className="h-12 w-12 rounded-full border-2 border-blue-500/30 shadow-xl shadow-blue-500/10 transform hover:scale-110 transition-all duration-500" 
      />
      <h3 className="text-3xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 font-serif drop-shadow-lg text-center flex-grow ml-40">
        OTAKU NEXUS
      </h3>
      <ul className="flex space-x-8 text-lg">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link 
              to={item.path}
              className={`text-slate-300 hover:text-blue-300 transition-all duration-300 relative group
                        ${location.pathname === item.path ? 'text-blue-300' : ''}`}
            >
              <span>{item.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-blue-400/50 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;