import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

//Components
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Comunidad Cristiana de la Villa",
  description: "Sitio web de la Comunidad Cristiana de la Villa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
