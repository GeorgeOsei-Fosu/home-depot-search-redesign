// Simple line icons for the tab bar and Services (not in the Figma file).
// They use currentColor, so they take the color of the surrounding text.
const PATHS = {
  shop: <path d="M3 10.5 12 3l9 7.5M5 9v11h14V9M10 20v-6h4v6" />,
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" />
    </>
  ),
  store: <path d="M3 9.5 5 4h14l2 5.5M3 9.5h18M4.5 9.5V20h15V9.5M9.5 20v-5h5v5" />,
  cart: (
    <>
      <path d="M2 3h3l2.4 11.5h11.2L21 7H6.2" />
      <circle cx="9" cy="19" r="1.6" />
      <circle cx="17" cy="19" r="1.6" />
    </>
  ),
  truck: (
    <>
      <path d="M2 6h11v10H2zM13 9h4.5l3.5 3.5V16h-8" />
      <circle cx="6" cy="17.5" r="1.8" />
      <circle cx="17" cy="17.5" r="1.8" />
    </>
  ),
  wrench: <path d="M14.5 6.5a4 4 0 0 0 5 5L12 19a2.1 2.1 0 0 1-3-3l7.5-7.5a4 4 0 0 1-2-2zM14.5 6.5 17 4l3 3-2.5 2.5" />,
  calculator: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M8 7h8M8 11h1M11.5 11h1M15 11h1M8 14.5h1M11.5 14.5h1M15 14.5h1M8 18h1M11.5 18h1M15 18h1" />
    </>
  ),
  play: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m10 9 5 3-5 3z" />
    </>
  ),
  back: <path d="M15 5 8 12l7 7" />,
  chevron: <path d="m9 5 7 7-7 7" />,
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  pin: (
    <>
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
};

export default function Icon({ name, size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  );
}
