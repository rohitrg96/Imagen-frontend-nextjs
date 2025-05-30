interface CustomButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  width?: string; // Tailwind width class (e.g., "w-60", "w-auto")
  height?: string; // Tailwind height class (e.g., "h-12", "py-3")
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function CustomButton({
  children,
  onClick,
  width = 'w-60',
  height = 'py-4', // padding for height
  className = '',
  type = 'button',
}: CustomButtonProps) {
  return (
    <div className="flex justify-center mt-10">
      <button
        type={type}
        onClick={onClick}
        className={`px-5 ${height} bg-white text-black rounded-full hover:bg-gray-200 transition font-semibold ${width} ${className}`}
      >
        {children}
      </button>
    </div>
  );
}
