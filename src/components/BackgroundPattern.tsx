export default function BackgroundPattern() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="islamic-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M50 0L100 50L50 100L0 50Z" fill="none" stroke="#0D9488" strokeWidth="0.5" />
            <path d="M25 25L75 25L75 75L25 75Z" fill="none" stroke="#0D9488" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="20" fill="none" stroke="#0D9488" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#islamic-pattern)" />
      </svg>
    </div>
  );
}
