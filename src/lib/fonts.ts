/**
 * Font Configuration
 * Requirements: 8.4 - Font optimization
 * 
 * Uses next/font for automatic font optimization including:
 * - Font subsetting (only loads characters used)
 * - Self-hosting (no external requests to Google Fonts)
 * - Zero layout shift with size-adjust
 * - display: swap for better performance
 */

import localFont from 'next/font/local';

/**
 * Inter font - Primary sans-serif font
 * Used for body text and UI elements
 */
export const inter = localFont({
  src: '../../public/fonts/Inter-Regular.woff2',
  display: 'swap',
  variable: '--font-inter',
  preload: true,
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
  adjustFontFallback: false,
});

/**
 * JetBrains Mono font - Monospace font
 * Used for code snippets and technical content
 */
export const jetbrainsMono = localFont({
  src: '../../public/fonts/JetBrainsMono-Regular.woff2',
  display: 'swap',
  variable: '--font-jetbrains-mono',
  preload: false, // Only preload if code is shown above the fold
  fallback: ['Fira Code', 'Consolas', 'Monaco', 'monospace'],
  adjustFontFallback: false,
});

/**
 * Combined font variables for use in className
 */
export const fontVariables = `${inter.variable} ${jetbrainsMono.variable}`;

/**
 * Font class names for direct usage
 */
export const fontClassNames = {
  sans: inter.className,
  mono: jetbrainsMono.className,
};

/**
 * CSS custom properties for fonts
 * These are set as CSS variables and can be used in Tailwind
 */
export const fontCssVariables = {
  '--font-sans': inter.style.fontFamily,
  '--font-mono': jetbrainsMono.style.fontFamily,
} as const;
