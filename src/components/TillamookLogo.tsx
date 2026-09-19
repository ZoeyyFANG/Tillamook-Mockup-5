interface TillamookLogoProps {
  className?: string;
  variant?: 'white' | 'blue';
}

export default function TillamookLogo({ className = 'h-9 w-auto', variant = 'white' }: TillamookLogoProps) {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <img
        src="/tillamook-logo-blue.png"
        alt="Tillamook"
        className={`h-full w-auto object-contain select-none ${
          variant === 'white' ? 'brightness-0 invert' : ''
        }`}
      />
    </div>
  );
}
