import { DM_Sans } from "next/font/google";
import "./globals.css";

const DMSans = DM_Sans({ subsets: ["latin"], display: "swap" });
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
  title: "Shamzbridge",
  description: "Shamzbridge Human Resource Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/shamsLogo.svg" />
      </head>
      <body className={DMSans.className} style={{ fontFamily: "DMSansMedium" }}>
        <ToastContainer/>
        {children}
      </body>
    </html>
  );
}
