// import { Link as LinkScroll } from "react-scroll";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import clsx from "clsx";


const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Removed unused NavLink component


  return (
    <header
      className={clsx(
        "fixed top-0 left-0 z-50 w-full py-4 transition-all duration-500 bg-white",
        hasScrolled && "py-2 bg-white/90 backdrop-blur-[8px]",
      )}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between rounded-full bg-white shadow-lg px-4 py-2 mt-2 md:px-8 md:py-3 md:mt-4">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 min-w-[100px]">
            <img src="/images/cedur.png" alt="logo" className="h-10 w-auto object-contain" />
          </a>

          {/* Main nav */}
          <nav className="hidden md:flex items-center gap-7 text-base font-semibold text-gray-800">
            <Link to="/features" className="hover:text-purple-700 transition-colors">Features</Link>
            <Link to="/pricing" className="hover:text-purple-700 transition-colors">Pricing</Link>
            <Link to="/about" className="hover:text-purple-700 transition-colors">About</Link>
            <Link to="/support" className="hover:text-purple-700 transition-colors">Support</Link>
          </nav>
          {/* Mobile menu button */}
          <button
            className="md:hidden flex items-center px-2 py-1 border rounded text-gray-700 border-gray-300 hover:bg-gray-100 focus:outline-none"
            onClick={() => setShowMobileMenu((v) => !v)}
            aria-label="Open navigation menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>

          {/* Right actions */}
          <div className="hidden md:flex items-center gap-4 min-w-[200px] justify-end">
            <Link to="/signin" className="text-gray-700 font-medium hover:text-purple-700 transition-colors">Sign in</Link>
            <Link to="/signup" className="px-4 py-2 bg-purple-800 text-white rounded-md font-bold hover:bg-purple-900 transition-colors">Get Started</Link>
          </div>
        </div>
        {/* Mobile menu */}
        {showMobileMenu && (
          <div className="md:hidden mt-2 bg-white rounded-lg shadow-lg p-4 flex flex-col gap-4">
            <Link to="/features" className="hover:text-purple-700 transition-colors" onClick={() => setShowMobileMenu(false)}>Features</Link>
            <Link to="/pricing" className="hover:text-purple-700 transition-colors" onClick={() => setShowMobileMenu(false)}>Pricing</Link>
            <Link to="/about" className="hover:text-purple-700 transition-colors" onClick={() => setShowMobileMenu(false)}>About</Link>
            <Link to="/support" className="hover:text-purple-700 transition-colors" onClick={() => setShowMobileMenu(false)}>Support</Link>
            <Link to="/signin" className="text-gray-700 font-medium hover:text-purple-700 transition-colors" onClick={() => setShowMobileMenu(false)}>Sign in</Link>
            <Link to="/signup" className="px-4 py-2 bg-purple-800 text-white rounded-md font-bold hover:bg-purple-900 transition-colors text-center" onClick={() => setShowMobileMenu(false)}>Get Started</Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
