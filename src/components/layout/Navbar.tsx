'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown, Search, Diamond, FlaskConical, Menu } from 'lucide-react';
import { menuItems } from '@/content/navBar';
import MobileMenu from '../ui/MobileMenu';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-black text-white border-t-4 shadow-lg relative z-50 pl-4 pr-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16">
        {/* Left Side */}
        <div className="flex items-center gap-4">
          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden text-white"
          >
            <Menu size={24} />
          </button>

          {/* Logo */}
          <Link href="/" className="text-xl flex items-center gap-1">
            <span>Google DeepMind</span>
            <ChevronDown className="w-4 h-4 transition-transform" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1 text-slate-400 ml-8">
            {menuItems.map((menu, idx) => (
              <div key={idx} className="relative group">
                <button className="flex items-center space-x-1 px-4 py-2 rounded-lg hover:bg-blue-700/50 transition-all duration-200 whitespace-nowrap">
                  <span>{menu.title}</span>
                </button>

                {/* Submenu */}
                <div className="absolute top-full left-0 mt-2 w-64 bg-gray-900 rounded-xl shadow-2xl border border-gray-700 overflow-hidden opacity-0 invisible transform -translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
                  <div className="p-2">
                    <div className="text-xs text-gray-400 uppercase font-semibold mb-2 px-3 pt-2">
                      {menu.title}
                    </div>
                    {menu.items.map((item, i) => (
                      <Link
                        key={i}
                        href={item.href}
                        className="block px-3 py-2.5 text-sm hover:bg-blue-600/50 rounded-lg transition-colors duration-200"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                  <div className="bg-gray-800/50 px-3 py-2 text-xs text-gray-500">
                    Explore {menu.title.toLowerCase()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-2 flex-shrink-0">
          {/* Always visible Search */}
          <Link
            href="#"
            className="text-slate-400 rounded-3xl p-2 bg-slate-900"
          >
            <Search size={18} />
          </Link>

          {/* Auth buttons - only visible on sm and up */}
          <div className="hidden sm:flex items-center space-x-2">
            <Link
              href="#"
              className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-slate-400 rounded-3xl transition-all duration-200 border bg-slate-900 border-slate-900"
            >
              <FlaskConical size={15} />
              <span>Try Google Ai Studio</span>
            </Link>
            <Link
              href="#"
              className="flex items-center space-x-2 px-4 py-2 text-sm font-medium rounded-3xl transition-all duration-200 text-slate-400 border bg-slate-900 border-slate-900"
            >
              <Diamond size={12} />
              <span>Try Gemini</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </nav>
  );
}
