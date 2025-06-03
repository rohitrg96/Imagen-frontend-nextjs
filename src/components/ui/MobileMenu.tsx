import Link from 'next/link';
import { X } from 'lucide-react';
import { menuItems } from '@/content/navBar';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-90 z-50 transform transition-transform duration-300 ${
        open ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="p-6 flex flex-col gap-4 text-white">
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-bold">Menu</span>
          <button onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        {menuItems.map((menu, idx) => (
          <div key={idx}>
            <div className="font-semibold text-sm uppercase text-gray-400 mb-1">
              {menu.title}
            </div>
            {menu.items.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                onClick={onClose}
                className="block px-2 py-1 rounded hover:bg-blue-600/50 text-sm"
              >
                {item.label}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
