interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function Logo({ size = "md", className = "" }: LogoProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10", 
    lg: "w-12 h-12"
  };

  const svgSizes = {
    sm: "w-5 h-5",
    md: "w-7 h-7",
    lg: "w-8 h-8"
  };

  return (
    <div className={`${sizeClasses[size]} rounded-lg flex items-center justify-center bg-gradient-to-br from-emerald-500 via-teal-500 to-blue-500 shadow-lg ${className}`}>
      <svg className={svgSizes[size]} viewBox="0 0 24 24" fill="none">
        {/* Shield outline */}
        <path d="M12 2L4 6V10C4 16 7.36 21.09 12 22C16.64 21.09 20 16 20 10V6L12 2Z" 
              stroke="white" strokeWidth="1.5" fill="rgba(255,255,255,0.1)"/>
        {/* DNA Helix */}
        <path d="M9 8C9 8 10.5 9.5 12 8C13.5 6.5 15 8 15 8" 
              stroke="white" strokeWidth="1.2" fill="none"/>
        <path d="M9 12C9 12 10.5 10.5 12 12C13.5 13.5 15 12 15 12" 
              stroke="white" strokeWidth="1.2" fill="none"/>
        <path d="M9 16C9 16 10.5 17.5 12 16C13.5 14.5 15 16 15 16" 
              stroke="white" strokeWidth="1.2" fill="none"/>
        {/* DNA Base pairs */}
        <circle cx="10" cy="8" r="0.8" fill="white"/>
        <circle cx="14" cy="8" r="0.8" fill="white"/>
        <circle cx="10" cy="12" r="0.8" fill="white"/>
        <circle cx="14" cy="12" r="0.8" fill="white"/>
        <circle cx="10" cy="16" r="0.8" fill="white"/>
        <circle cx="14" cy="16" r="0.8" fill="white"/>
      </svg>
    </div>
  );
}