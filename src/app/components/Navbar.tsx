import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-light-gray">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-extrabold text-yellow">
          <img
                    className="cursor-pointer"
                    width={150}
                    src="https://store.brth.uk/pitahaya/Pitahaya%20Labs%20-%20Logo%20png.png"
                    alt="Pitahaya Labs Logo"
                />
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-black hover:text-yellow transition-colors">
              About
            </Link>
            <Link href="#projects" className="text-black hover:text-yellow transition-colors">
              Projects
            </Link>
            <Link href="#reviews" className="text-black hover:text-yellow transition-colors">
              Reviews
            </Link>
            <Link href="#contact" className="btn-primary">
              Contact Us
            </Link>
          </div>

          <button className="md:hidden text-black">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
} 