import localFont from 'next/font/local';

export const fontDisplay = localFont({
  src: [
    {
      path: './CLAYO.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './CLAYO-Italic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './CLAYO-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './CLAYO-Medium-Italic.otf',
      weight: '500',
      style: 'italic',
    },
    {
      path: './CLAYO-Semibold.otf',
      weight: '600',
      style: 'normal',
      },
  ],
  variable: '--font-display',
});