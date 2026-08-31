interface EntrepreneurIconProps {
  className?: string;
}

/**
 * Line-art businessman with a briefcase badge — used for the "Entrepreneur"
 * expertise card. Strokes use currentColor so it inherits the gold accent.
 */
export default function EntrepreneurIcon({ className }: EntrepreneurIconProps) {
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
      {/* Hair + fringe */}
      <path d="M6.9 11.4C6.9 4.8 17.1 4.8 17.1 11.4c0-1.6-.9-2.6-2.1-2.9-1.1-.3-1.7-.9-3-.9s-1.9.6-3 .9c-1.2.3-2.1 1.3-2.1 2.9Z" />
      {/* Face */}
      <path d="M8.2 10.6v1.9c0 2.7 1.7 4.7 3.8 4.7s3.8-2 3.8-4.7v-1.9" />
      {/* Ears */}
      <path d="M8.2 11.2c-.9 0-1.5.7-1.5 1.5s.6 1.5 1.5 1.5M15.8 11.2c.9 0 1.5.7 1.5 1.5s-.6 1.5-1.5 1.5" />
      {/* Shoulders / torso */}
      <path d="M2.6 28.9v-4.5c0-1.7 1-3.2 2.6-3.8l4.6-1.7v-2.3M14.2 16.6v2.3l2.4.9" />
      {/* Collar */}
      <path d="M9.8 18.9 12 22.2l2.4-3.3" />
      {/* Tie */}
      <path d="m12 22.2-1.2 1.3.6 4.3.6.8.6-.8.6-4.3-1.2-1.3" />
      {/* Base line */}
      <path d="M2.6 28.9h11.9" />
      {/* Briefcase badge */}
      <circle cx="22.4" cy="22.2" r="7.3" />
      <rect x="18" y="20.4" width="8.8" height="6.2" rx="1" />
      <path d="M20.7 20.4v-1.3c0-.5.4-.9.9-.9h1.6c.5 0 .9.4.9.9v1.3M18 23.4h8.8" />
      <path d="M21.8 22.6h1.2v1.7h-1.2z" />
    </svg>
  );
}
