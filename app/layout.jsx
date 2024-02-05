/** @format */
import Footer from "../components/footer";
import "./global.css";
import { inter } from "./font";

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={inter.variable}>
      <body className='flex flex-col min-h-screen  bg-black text-white font-semibold font-inter'>
        <header>
          <div className='flex flex-col p-4  '>
            <div className='flex justify-center'>
              <img src='/images/Humaaans.png' alt='' />
            </div>
            <div>
              <h1 className='font-extrabold text-center text-2xl'>
                CineInsights
              </h1>
            </div>
          </div>
        </header>
        <main className='flex grow'>{children}</main>
        <footer className='flex'>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
