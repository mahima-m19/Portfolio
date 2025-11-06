// For Next.js App Router (app/layout.tsx)
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[var(--body-bg)]">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}