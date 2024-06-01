import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";
import "./_styles/globals.css";
export const metadata = {
  title: {
		template: '%s | beije.',
		default: 'beije.',
	},
	description: 'The Wild Oasis - A place to relax and enjoy nature',
};
import localFont from "next/font/local";

const gordita = localFont({
  name: "Gordita",
  src: "../GorditaRegular.otf",
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`flex h-dvh w-dvw flex-col overflow-x-hidden bg-light ${gordita.className}`}
      >
        <header className="w-full">
          <Navbar />
        </header>
        <main className="flex-1">{children}</main>
        <footer className="w-full bg-dark text-light">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
