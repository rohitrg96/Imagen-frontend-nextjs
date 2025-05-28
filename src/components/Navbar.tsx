import Link from 'next/link';
import { ChevronDown, Search, User, LogIn } from 'lucide-react';

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

export default function Navbar() {
  return (
    <nav className="bg-black text-white border-t-4 shadow-lg relative z-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Left Side */}
          <div className="flex items-center space-x-8 flex-shrink-0">
            {/* Logo */}
            <Link href="/" className="font-bold text-xl flex items-center gap-1">
              <span>Google DeepMind</span>
              <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
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
          <div className="flex items-center space-x-4 flex-shrink-0">
            {/* Search Bar - only visible md and above */}
            <div className="relative hidden md:block">
              <input
                type="search"
                placeholder="Search DeepMind..."
                className="w-64 bg-gray-800 border border-gray-600 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>

            {/* Auth buttons - hidden on xs */}
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

            {/* Mobile menu button */}
            {/* For SSG, either remove this or implement a separate small client component */}
          </div>
        </div>
      </div>
    </nav>
  );
}
