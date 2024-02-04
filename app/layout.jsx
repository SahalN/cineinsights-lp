/** @format */
import Footer from "../components/footer";
import "./global.css";
import { inter } from "./font";

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={inter.variable}>
      <body className='flex flex-col min-h-screen  bg-black text-white font-semibold font-inter'>
        <header className='flex'>
          <div>Hello</div>
        </header>
        <main className='flex grow'>{children}</main>
        <footer className='flex'>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
