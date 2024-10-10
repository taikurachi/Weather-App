import localFont from "next/font/local";
import "./globals.css";

const futura = localFont({
  src: "./fonts/futuraBook.ttf",
  variable: "--font-futura-book",
  weight: "400",
});

export const metadata = {
  title: "Dynamic Weather App",
  description: "Dynamic Weather App made with love",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${futura.variable} ${futura.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
