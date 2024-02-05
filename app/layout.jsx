/** @format */

import "./global.css";
import { inter } from "./font";
import Footer from "../components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={inter.variable}>
      <body className='flex flex-col min-h-screen font-semibold text-white bg-black font-inter'>
        <header>
          <div className='flex flex-col p-4 '>
            <div className='flex justify-center'>
              <img src='/images/Humaaans.png' alt='' />
            </div>
            <div>
              <h1 className='text-2xl font-extrabold text-center'>
                CineInsights
              </h1>
            </div>
          </div>
        </header>
        <main className='flex grow'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
