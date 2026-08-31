interface EntrepreneurGearIconProps {
  className?: string;
  /** Fill used to occlude the gear behind the foreground shapes. */
  bg?: string;
}

/**
 * Line-art businessman in front of a gear containing a growth chart, flanked by
 * a coin and a briefcase — used for the "Entrepreneur" expertise card. Strokes
 * use currentColor so it inherits the gold accent; foreground shapes are filled
 * with the section background so they read as sitting in front of the gear.
 */
export default function EntrepreneurGearIcon({
  className,
  bg = '#0A0A0A',
}: EntrepreneurGearIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* ── Gear (12 teeth, root r=18.4 / tip r=22.4 about 32,24) ── */}
      <path d="M28.49 5.94L29.46 1.74L34.54 1.74L35.51 5.94A18.4 18.4 0 0 1 37.99 6.6L40.93 3.46L45.32 5.99L44.07 10.11A18.4 18.4 0 0 1 45.89 11.93L50.01 10.68L52.54 15.07L49.4 18.01A18.4 18.4 0 0 1 50.06 20.49L54.26 21.46L54.26 26.54L50.06 27.51A18.4 18.4 0 0 1 49.4 29.99L52.54 32.93L50.01 37.32L45.89 36.07A18.4 18.4 0 0 1 44.07 37.89L45.32 42.01L40.93 44.54L37.99 41.4A18.4 18.4 0 0 1 35.51 42.06L34.54 46.26L29.46 46.26L28.49 42.06A18.4 18.4 0 0 1 26.01 41.4L23.07 44.54L18.68 42.01L19.93 37.89A18.4 18.4 0 0 1 18.11 36.07L13.99 37.32L11.46 32.93L14.6 29.99A18.4 18.4 0 0 1 13.94 27.51L9.74 26.54L9.74 21.46L13.94 20.49A18.4 18.4 0 0 1 14.6 18.01L11.46 15.07L13.99 10.68L18.11 11.93A18.4 18.4 0 0 1 19.93 10.11L18.68 5.99L23.07 3.46L26.01 6.6A18.4 18.4 0 0 1 28.49 5.94Z" />
      <circle cx="32" cy="24" r="14.5" />

      {/* ── Growth chart inside the gear ── */}
      <path d="M21 32.2h22.6" />
      <rect x="22.6" y="29" width="4.3" height="3.2" />
      <rect x="27.9" y="26" width="4.3" height="6.2" />
      <rect x="33.2" y="23" width="4.3" height="9.2" />
      <rect x="38.5" y="20" width="4.3" height="12.2" />
      <path d="M21.4 27.2C27 24.6 35 20.6 42.6 15.5" />
      <path d="m38.9 15.9 3.7-.4-.4 3.7" />

      {/* ── Coin ── */}
      <circle cx="10.5" cy="45" r="8.4" fill={bg} />
      <circle cx="10.5" cy="45" r="6.2" />
      <path d="M12.9 41.6c-.6-.7-1.5-1.1-2.5-1.1-1.6 0-2.7.8-2.7 2 0 1.3 1.1 1.8 2.7 2.1 1.6.4 2.7.8 2.7 2.1 0 1.2-1.1 2-2.7 2-1 0-1.9-.4-2.5-1.1M10.4 39v12" />

      {/* ── Briefcase ── */}
      <rect x="45" y="40.5" width="16" height="13" rx="2" fill={bg} />
      <path d="M50.4 40.5v-2.2c0-.8.6-1.4 1.4-1.4h3.4c.8 0 1.4.6 1.4 1.4v2.2M45 45.6h16" />
      <path d="M51.4 43.9h3.2v3.4h-3.2z" />

      {/* ── Businessman ── */}
      <circle cx="32" cy="40.4" r="6.2" fill={bg} />
      <path d="M19.5 58v-1.6c0-5.6 5.6-10 12.5-10s12.5 4.4 12.5 10V58Z" fill={bg} />
      <path d="M19.5 58h25" />
      <path d="m28.6 47.2 3.4 4.3 3.4-4.3" />
      <path d="m32 51.5-1.9 1.9.9 4.6h2l.9-4.6z" />
    </svg>
  );
}
