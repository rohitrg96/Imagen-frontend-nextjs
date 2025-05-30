interface CustomButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  width?: string; // Tailwind width class (e.g., "w-60", "w-auto")
  height?: string; // Tailwind height class (e.g., "h-12", "py-3")
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  topMargin?: string;
}

export default function CustomButton({
  children,
  onClick,
  width = 'w-60',
  height = 'py-4', // padding for height
  className = '',
  type = 'button',
  topMargin = 'mt-10',
}: CustomButtonProps) {
  return (
    <div className={`flex justify-center ${topMargin}`}>
      <button
        type={type}
        onClick={onClick}
        className={`px-5 ${height} bg-cyan-500 text-white rounded-full hover:bg-cyan-400 transition font-semibold ${width} ${className}`}
      >
        <div className="flex items-center gap-2 justify-center">{children}</div>
      </button>
    </div>
  );
}
