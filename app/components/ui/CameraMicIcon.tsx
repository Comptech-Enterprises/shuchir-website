interface CameraMicIconProps {
  className?: string;
}

/**
 * Line-art camera paired with a microphone — used for the "Content Creator"
 * expertise card. Strokes use currentColor so it inherits the gold accent.
 */
export default function CameraMicIcon({ className }: CameraMicIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth={0.9}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Camera body */}
      <rect x="2.4" y="11.6" width="16.4" height="12.4" rx="1.8" />
      {/* Top hump / viewfinder */}
      <path d="M7.4 11.6l1.2-2.2h4.6l1.2 2.2" />
      {/* Lens */}
      <circle cx="10.6" cy="17.8" r="3.6" />
      <circle cx="10.6" cy="17.8" r="1.5" />
      {/* Flash indicator */}
      <path d="M5.4 14.3h.1" />
      {/* Microphone capsule */}
      <rect x="22.2" y="5" width="5.6" height="9.6" rx="2.8" />
      {/* Grille */}
      <path d="M23.4 8.2h3.2M23.4 10.6h3.2" />
      {/* Cradle */}
      <path d="M19.8 12.2a5.2 5.2 0 0 0 10.4 0" />
      {/* Stem + base */}
      <path d="M25 17.4V24M21.9 24h6.2" />
    </svg>
  );
}
