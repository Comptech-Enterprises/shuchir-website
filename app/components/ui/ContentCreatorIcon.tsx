interface ContentCreatorIconProps {
  className?: string;
}

/**
 * Line-art creator at a laptop, flanked by a video and a text speech bubble,
 * with a pencil across the base. Strokes use currentColor so it inherits the
 * gold accent.
 */
export default function ContentCreatorIcon({ className }: ContentCreatorIconProps) {
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
      {/* Left bubble — video */}
      <path d="M2.9 5.4h7.6a1.3 1.3 0 0 1 1.3 1.3v4.2a1.3 1.3 0 0 1-1.3 1.3h-.6v2.4l-2.5-2.4H2.9a1.3 1.3 0 0 1-1.3-1.3V6.7a1.3 1.3 0 0 1 1.3-1.3Z" />
      <path d="m5.9 6.5 3.5 2.3-3.5 2.3z" />

      {/* Right bubble — text */}
      <path d="M29.1 5.4h-7.6a1.3 1.3 0 0 0-1.3 1.3v4.2a1.3 1.3 0 0 0 1.3 1.3h.6v2.4l2.5-2.4h4.5a1.3 1.3 0 0 0 1.3-1.3V6.7a1.3 1.3 0 0 0-1.3-1.3Z" />
      <path d="M22.3 6.9h5.4M22.3 8.9h5.4M22.3 10.9h5.4" />

      {/* Head */}
      <rect x="13.2" y="9.6" width="5.6" height="8.2" rx="2.8" />

      {/* Shoulders / arms */}
      <path d="m13.4 17.6-2.8 1.3a3 3 0 0 0-1.8 2.7v3.5M18.6 17.6l2.8 1.3a3 3 0 0 1 1.8 2.7v3.5" />

      {/* Laptop */}
      <path d="M12.6 18.6h6.8q1 0 1.2 1l.9 4.5q.2 1-.8 1h-9.4q-1 0-.8-1l.9-4.5q.2-1 1.2-1Z" />
      <circle cx="16" cy="21.9" r="1.1" />

      {/* Pencil */}
      <path d="M5 25.9h23a.9.9 0 0 1 .9.9v1a.9.9 0 0 1-.9.9H5l-2.9-1.4z" />
      <path d="M5 25.9v2.8M25.9 25.9v2.8" />
    </svg>
  );
}
