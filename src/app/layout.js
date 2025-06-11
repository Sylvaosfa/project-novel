import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SideProvider } from "@/Context/SideContext";
import { SearchContextProvider } from "@/Context/SearchContext";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Osfa Market | Handmade & Vintage Finds",
  description: "Discover unique handmade items, jewelry, gifts, and more at Osfa Market.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SideProvider>
     <SearchContextProvider>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        {children}
      </body>
      </SearchContextProvider>
        </SideProvider>
    </html>
  );
}
