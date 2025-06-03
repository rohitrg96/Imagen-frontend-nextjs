// components/Acknowledgements.tsx
'use client';
import { acknowledgementsData } from '@/content/acknowledgementsData';

export default function Acknowledgements() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-4xl text-left space-y-8">
        {Object.entries(acknowledgementsData).map(([sectionTitle, names]) => (
          <div key={sectionTitle}>
            <h2>
              {sectionTitle.charAt(0).toUpperCase() + sectionTitle.slice(1)}
            </h2>
            <br />
            <p className="text-sm text-gray-700">
              {(names as string[]).join(', ')}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
