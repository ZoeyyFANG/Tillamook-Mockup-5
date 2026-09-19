interface WeatherVaneProps {
  className?: string;
  color?: string;
}

export default function WeatherVane({ className = 'w-20 h-16', color = '#001e60' }: WeatherVaneProps) {
  return (
    <svg
      viewBox="0 0 120 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Tillamook Morning Star Schooner Weather Vane"
    >
      {/* Three-masted Schooner */}
      <g fill={color}>
        {/* Flag on forward mast */}
        <path d="M43 14 L49 16 L43 18 Z" />
        {/* Flag on main mast */}
        <path d="M63 9 L70 11 L63 13 Z" />
        {/* Flag on rear mast */}
        <path d="M83 15 L89 17 L83 19 Z" />

        {/* Fore Mast (left) */}
        <rect x="42" y="14" width="2" height="34" />
        {/* Fore sail */}
        <path d="M30 46 C32 30 38 22 41 20 L41 45 Z" />
        <path d="M44 20 C48 23 51 32 50 45 L44 46 Z" />

        {/* Main Mast (center, tallest) */}
        <rect x="63" y="9" width="2.4" height="39" />
        {/* Main sails */}
        <path d="M53 45 C55 24 60 16 62 14 L62 44 Z" />
        <path d="M66 14 C72 17 76 28 75 44 L66 45 Z" />

        {/* Mizzen Mast (right) */}
        <rect x="84" y="15" width="2" height="33" />
        {/* Mizzen sails */}
        <path d="M76 45 C78 28 82 21 83 19 L83 45 Z" />
        <path d="M86 19 C91 22 94 30 93 45 L86 46 Z" />

        {/* Jib sails at the front / bowsprit */}
        <path d="M22 46 L38 31 L38 46 Z" opacity="0.9" />

        {/* Ship Hull */}
        <path d="M19 46 L101 46 C98 52 92 56 84 56 L34 56 C26 56 22 52 19 46 Z" />
        {/* Bowsprit spar */}
        <path d="M14 46 L22 44 L22 46 Z" />
      </g>

      {/* Weather Vane Arrow & Pivot */}
      <g fill={color}>
        {/* Arrow shaft */}
        <rect x="10" y="58.5" width="98" height="3" rx="1.5" />
        {/* Right Arrowhead */}
        <path d="M106 53 L118 60 L106 67 L109 60 Z" />
        {/* Left Arrow Fletching */}
        <path d="M14 53 L6 60 L14 67 L11 60 Z" />
        {/* Central mounting pivot */}
        <circle cx="59" cy="60" r="3.5" />
        <rect x="57.5" y="63" width="3" height="6" rx="1.5" />
      </g>
    </svg>
  );
}
