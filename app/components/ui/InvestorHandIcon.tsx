interface InvestorHandIconProps {
  className?: string;
}

/**
 * Line-art open hand holding a stack of coin blocks, with a dollar coin and a
 * connected line chart above — used for the "Investor" expertise card. Strokes
 * use currentColor so it inherits the gold accent.
 */
export default function InvestorHandIcon({ className }: InvestorHandIconProps) {
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
      {/* ── Dollar coin ── */}
      <path d="M29.2 19.4A9 9 0 1 1 28.4 8.8" />
      <path d="M24.4 10.4c-.8-.9-2-1.4-3.3-1.4-2 0-3.4 1.1-3.4 2.6 0 1.6 1.4 2.2 3.4 2.7 2 .5 3.4 1.1 3.4 2.7 0 1.5-1.4 2.6-3.4 2.6-1.3 0-2.5-.5-3.3-1.4M21 7.2v14.4" />

      {/* ── Line chart ── */}
      <path d="M35.4 18.2 40.6 12M45.4 12.2l4.8 5.6M54 17.6l3.4-3.8" />
      <circle cx="33.4" cy="20.2" r="2.4" />
      <circle cx="43" cy="10.4" r="2.4" />
      <circle cx="52.2" cy="19.6" r="2.4" />
      <circle cx="59.2" cy="12.2" r="2.4" />

      {/* ── Coin blocks ── */}
      <rect x="23" y="25.4" width="13.4" height="5.2" />
      <path d="M27.5 25.4v5.2M31.9 25.4v5.2" />
      <rect x="20.6" y="30.6" width="17.4" height="5.6" />
      <path d="M29.3 30.6v5.6" />

      {/* ── Cuff ── */}
      <rect x="3.4" y="40.6" width="7.6" height="19.6" rx="1.8" />
      <path d="M7.2 45v2.8" />

      {/* ── Open hand ── */}
      <path d="M11 43.2c7.5-1 16 1.6 22.6 6.4 5 3.4 6.2 2.8 8.8-1 3.6-4.6 9.4-9.6 12.8-10.6a4.8 4.8 0 0 1 3.4 8.8C51.4 51 40 57.6 33 59.4c-7.4 1.8-15.6 1.4-22 .6" />
      {/* Thumb crease */}
      <path d="M21 53.4c4.4 1 8.8 1.8 13.2 2.2" />
    </svg>
  );
}
