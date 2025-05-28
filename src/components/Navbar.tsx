'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ChevronDown, Search, Menu, X, User, LogIn } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<number | null>(null);
  const [screenSize, setScreenSize] = useState('xl');
  const navRef = useRef<HTMLDivElement>(null);

  const menuItems = [
    {
      title: 'Research',
      items: [
        { label: 'Publications', href: '#' },
        { label: 'Safety & Ethics', href: '#' },
        { label: 'Blog', href: '#' },
        { label: 'Careers', href: '#' },
      ],
    },
    {
      title: 'Products',
      items: [
        { label: 'Imagen', href: '#' },
        { label: 'Gemini', href: '#' },
        { label: 'AlphaFold', href: '#' },
        { label: 'AlphaCode', href: '#' },
      ],
    },
    {
      title: 'About',
      items: [
        { label: 'Our Mission', href: '#' },
        { label: 'Leadership', href: '#' },
        { label: 'News', href: '#' },
        { label: 'Contact', href: '#' },
      ],
    },
    {
      title: 'Resources',
      items: [
        { label: 'Documentation', href: '#' },
        { label: 'Datasets', href: '#' },
        { label: 'Tools', href: '#' },
        { label: 'Community', href: '#' },
      ],
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1280) setScreenSize('xl');
      else if (width >= 1024) setScreenSize('lg');
      else if (width >= 768) setScreenSize('md');
      else if (width >= 640) setScreenSize('sm');
      else setScreenSize('xs');
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const shouldShowMenus = screenSize === 'xl' || screenSize === 'lg';
  const shouldShowSearch = screenSize !== 'xs' && screenSize !== 'sm';
  const shouldShowAuth = screenSize !== 'xs';

  return (
    <nav className="bg-black text-white border-t-4 shadow-lg relative z-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Left Side: Logo + Desktop Menus */}
          <div className="flex items-center space-x-8 flex-shrink-0">
            {/* Logo - Always visible */}
            <Link href="/" className="font-bold text-xl ">
              <span>Google DeepMind</span>
              <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
            </Link>

            {/* Desktop Menu Items */}
            {shouldShowMenus && (
              <div className="hidden lg:flex items-center space-x-1">
                {menuItems.map((menu, index) => (
                  <div
                    key={index}
                    className="relative group"
                    onMouseEnter={() => setHoveredMenu(index)}
                    onMouseLeave={() => setHoveredMenu(null)}
                  >
                    <button className="flex items-center space-x-1 px-4 py-2 rounded-lg hover:bg-blue-700/50 transition-all duration-200 whitespace-nowrap">
                      <span>{menu.title}</span>
                    </button>

                    {/* Card Submenu */}
                    <div
                      className={`absolute top-full left-0 mt-2 w-64 bg-gray-900 rounded-xl shadow-2xl border border-gray-700 overflow-hidden transition-all duration-300 ${
                        hoveredMenu === index
                          ? 'opacity-100 visible transform translate-y-0'
                          : 'opacity-0 invisible transform -translate-y-2'
                      }`}
                    >
                      <div className="p-2">
                        <div className="text-xs text-gray-400 uppercase font-semibold mb-2 px-3 pt-2">
                          {menu.title}
                        </div>
                        {menu.items.map((item, itemIndex) => (
                          <Link
                            key={itemIndex}
                            href={item.href}
                            className="block px-3 py-2.5 text-sm hover:bg-blue-600/50 rounded-lg transition-colors duration-200 group"
                          >
                            <span className="group-hover:text-blue-300">{item.label}</span>
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
            )}
          </div>

          {/* Right Side: Search + Auth + Mobile Menu */}
          <div className="flex items-center space-x-4 flex-shrink-0">
            {/* Search Bar */}
            {shouldShowSearch && (
              <div className="relative hidden md:block">
                <input
                  type="search"
                  placeholder="Search DeepMind..."
                  className="w-64 bg-gray-800 border border-gray-600 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
            )}

            {/* Auth Buttons */}
            {shouldShowAuth && (
              <div className="hidden sm:flex items-center space-x-2">
                <Link
                  href="#"
                  className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-blue-400 hover:text-white hover:bg-blue-700/50 rounded-lg transition-all duration-200"
                >
                  <User className="w-4 h-4" />
                  <span>Sign In</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center space-x-2 px-4 py-2 text-sm font-medium bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-200"
                >
                  <LogIn className="w-4 h-4" />
                  <span>Login</span>
                </Link>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-700 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Collapsible Menu */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 border-t border-gray-700">
            {/* Mobile Search */}
            {!shouldShowSearch && (
              <div className="mb-4">
                <div className="relative">
                  <input
                    type="search"
                    placeholder="Search DeepMind..."
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
              </div>
            )}

            {/* Mobile Menu Items */}
            <div className="space-y-2">
              {menuItems.map((menu, index) => (
                <div key={index} className="border border-gray-700 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setHoveredMenu(hoveredMenu === index ? null : index)}
                    className="w-full flex items-center justify-between px-4 py-3 bg-gray-800/50 hover:bg-gray-700/50 transition-colors duration-200"
                  >
                    <span className="font-medium">{menu.title}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        hoveredMenu === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* Mobile Submenu */}
                  <div
                    className={`transition-all duration-300 ${
                      hoveredMenu === index ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                    } overflow-hidden`}
                  >
                    <div className="bg-gray-900/50 p-2">
                      {menu.items.map((item, itemIndex) => (
                        <Link
                          key={itemIndex}
                          href={item.href}
                          className="block px-4 py-2.5 text-sm hover:bg-blue-600/50 rounded-lg transition-colors duration-200"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Auth */}
            {!shouldShowAuth && (
              <div className="mt-4 pt-4 border-t border-gray-700">
                <div className="flex flex-col space-y-2">
                  <Link
                    href="#"
                    className="flex items-center justify-center space-x-2 w-full px-4 py-3 text-blue-400 hover:text-white hover:bg-blue-700/50 rounded-lg transition-all duration-200"
                  >
                    <User className="w-4 h-4" />
                    <span>Sign In</span>
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center justify-center space-x-2 w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-200"
                  >
                    <LogIn className="w-4 h-4" />
                    <span>Login</span>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
