import "./globals.css";

export const metadata = {
  title: "Giftify Demo Platform",
  description: "Web, Admin and Mobile demo platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
