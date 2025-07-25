export default function Logo() {
  return (
    <div className="w-8 h-8 bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg flex items-center justify-center shadow-sm">
      <svg 
        viewBox="0 0 24 24" 
        className="w-5 h-5 text-white"
        fill="currentColor"
      >
        {/* Shield with DNA */}
        <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z" 
              fill="currentColor" />
        
        {/* Inner shield highlight */}
        <path d="M12 2.5L5 5.5V11C5 15.5 7.91 19.64 12 20.5C16.09 19.64 19 15.5 19 11V5.5L12 2.5Z" 
              fill="rgba(255,255,255,0.2)" />
        
        {/* DNA helix pattern */}
        <g transform="translate(12,12)" fill="rgba(255,255,255,0.9)">
          {/* DNA base pairs */}
          <circle cx="-1.5" cy="-3" r="0.6"/>
          <circle cx="1.5" cy="-3" r="0.6"/>
          <circle cx="0" cy="-1" r="0.6"/>
          <circle cx="0" cy="1" r="0.6"/>
          <circle cx="-1.5" cy="3" r="0.6"/>
          <circle cx="1.5" cy="3" r="0.6"/>
          
          {/* Connecting lines */}
          <line x1="-1.5" y1="-3" x2="1.5" y2="-3" stroke="rgba(255,255,255,0.7)" strokeWidth="0.4"/>
          <line x1="-1.5" y1="3" x2="1.5" y2="3" stroke="rgba(255,255,255,0.7)" strokeWidth="0.4"/>
          
          {/* Helix curves */}
          <path d="M-1.5,-3 Q0,-2 0,-1 Q0,0 0,1 Q0,2 1.5,3" 
                stroke="rgba(255,255,255,0.6)" 
                strokeWidth="0.3" 
                fill="none"/>
          <path d="M1.5,-3 Q0,-2 0,-1 Q0,0 0,1 Q0,2 -1.5,3" 
                stroke="rgba(255,255,255,0.6)" 
                strokeWidth="0.3" 
                fill="none"/>
        </g>
      </svg>
    </div>
  );
}