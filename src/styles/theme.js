// src/styles/theme.js
const theme = {
  colors: {
    primary: '#3b82f6', // Blue 500
    secondary: '#10b981', // Green 500
    background: '#f9fafb', // Gray 50
    text: '#111827', // Gray 900
    accent: '#f43f5e', // Rose 500
    muted: '#6b7280', // Gray 400
    white: '#ffffff',
    black: '#000000',
    vividPink: {
      DEFAULT: '#f90651',
      light: '#fa5685',
      dark: '#c0043f',
    },
    blueKing: {
      DEFAULT: '#220b59',
      light: '#3a2475',
      dark: '#17083d',
    },
    spaceBlack: {
      DEFAULT: '#0b0619',
      light: '#201c34',
      dark: '#05030c',
    },
    offWhite: {
      DEFAULT: '#f9f9f9',
      light: '#ffffff',
      dark: '#f1f1f1',
    },
    gray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
    },
    red: {
      50: '#fef2f2',
      100: '#fee2e2',
      200: '#fecaca',
      300: '#fca5a5',
      400: '#f87171',
      500: '#ef4444',
      600: '#dc2626',
      700: '#b91c1c',
      800: '#991b1b',
      900: '#7f1d1d',
    },
    green: {
      50: '#ecfdf5',
      100: '#d1fae5',
      200: '#a7f3d0',
      300: '#6ee7b7',
      400: '#34d399',
      500: '#10b981',
      600: '#059669',
      700: '#047857',
      800: '#065f46',
      900: '#064e3b',
    },
    blue: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
    },
  },
  fonts: {
    main: 'Arial, sans-serif',
    heading: 'Georgia, serif',
    monospace: 'Courier New, monospace',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '40px',
    '3xl': '48px',
    '4xl': '56px',
    '5xl': '64px',
  },
  borderRadius: {
    none: '0',
    sm: '4px',
    md: '8px',
    lg: '12px',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.15)',
    xl: '0 20px 25px rgba(0, 0, 0, 0.2)',
  },
  transition: {
    default: 'all 0.3s ease',
    fast: 'all 0.2s ease',
    slow: 'all 0.5s ease',
  },
};

export default theme;
