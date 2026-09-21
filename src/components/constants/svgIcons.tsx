import React from "react";

// Shared custom type matching your setup
export type CustomIconProps = React.SVGProps<SVGSVGElement> & {
  size?: string | number;
  color?: string;
  strokeWidth?: string | number;
};

// 1. WhatsApp Icon (Fixed xmlns)
export const WhatsAppIcon = ({
  color = "currentColor",
  size = 35,
  strokeWidth = 2,
  ...props
}: CustomIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Outer Message Bubble Outline */}
      <path d="M2.18 21.33c-.08.3.19.57.49.49l4.61-1.2a9.6 9.6 0 0 0 4.76 1.21h.01c5.48 0 9.95-4.45 9.95-9.91C22 6.57 17.53 2.12 12.04 2.12c-5.48 0-9.96 4.45-9.96 9.91a9.77 9.77 0 0 0 1.33 4.95L2.18 21.33z" />

      {/* Inner Phone Handset Vector */}
      <path d="M9.1 8c.2 0 .4.01.6.43.13.29.35.82.52 1.25.14.33.25.6.28.66.06.13.1.28.02.45v.06c-.07.14-.12.24-.23.37l-.37.42c-.09.1-.17.2-.24.27-.13.13-.26.27-.11.53.15.25.67 1.1 1.44 1.77.82.74 1.54 1.05 1.9 1.21.07.03.13.06.17.08.26.13.41.11.56-.06.15-.17.65-.75.82-1.01.17-.25.34-.21.58-.12.24.09 1.5.71 1.76.84.05.02.1.05.14.07.18.09.3.15.35.23.06.12.06.63-.15 1.23-.22.6-1.27 1.18-1.74 1.22l-.14.01c-.43.05-.98.12-2.95-.66-2.43-.95-4.03-3.32-4.35-3.8-.03-.04-.05-.06-.06-.08l-.01-.01c-.14-.2-1.04-1.4-1.04-2.65 0-1.19.58-1.81.85-2.09.02-.02.04-.04.05-.05.24-.26.52-.32.69-.32z" />
    </svg>
  );
};

// 2. Instagram Icon
export const InstagramIcon = ({
  color = "currentColor",
  size = 24,
  strokeWidth = 2,
  ...props
}: CustomIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

// 3. LinkedIn Icon
export const LinkedInIcon = ({
  color = "currentColor",
  size = 24,
  strokeWidth = 2,
  ...props
}: CustomIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// 4. YouTube Icon (Fixed attributes syntax)
export const YouTubeIcon = ({
  color = "currentColor",
  size = 24,
  strokeWidth = 2,
  ...props
}: CustomIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="5" width="20" height="14" rx="4.5" ry="4.5" />
    <polygon points="10 15 15 12 10 9" />
  </svg>
);

// 5. GitHub Icon
export const GitHubIcon = ({
  color = "currentColor",
  size = 24,
  strokeWidth = 2,
  ...props
}: CustomIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);
