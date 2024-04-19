import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

/**
 * Adding the Tailwind antialiased class smooths out the font.
 * It's not necessary to use this class, but it adds a nice touch.
 *
 * https://tailwindcss.com/docs/font-smoothing
 */
export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
