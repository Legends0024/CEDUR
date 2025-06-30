import { Link as LinkScroll } from "react-scroll";
import { useEffect, useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const NavLink = ({ title }) => (
    <LinkScroll
      onClick={() => setIsOpen(false)}
      to={title}
      offset={-100}
      spy
      smooth
      activeClass="nav-active"
      className="text-sm font-semibold text-purple-600 hover:text-purple-800 transition-colors duration-200 uppercase px-2 py-1"
    >
      {title.charAt(0).toUpperCase() + title.slice(1)}
    </LinkScroll>
  );
  NavLink.propTypes = {
    title: PropTypes.string.isRequired,
  };

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 z-50 w-full py-4 transition-all duration-500 bg-white",
        hasScrolled && "py-2 bg-white/90 backdrop-blur-[8px]",
      )}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between rounded-full bg-white shadow-lg px-8 py-3 mt-4">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 min-w-[140px]">
            <img src="/images/cedur.png" alt="logo" width={40} height={40} className="h-10 w-10 object-contain" />
            <span className="font-black text-2xl text-gray-900 tracking-tight">Cedur</span>
          </a>

          {/* Main nav */}
          <nav className="flex items-center gap-7 text-base font-semibold text-gray-800">
            <a href="features.html" className="hover:text-purple-700 transition-colors">Features</a>
            <LinkScroll
              to="pricing"
              offset={-100}
              spy
              smooth
              className="hover:text-purple-700 transition-colors cursor-pointer"
            >
              Pricing
            </LinkScroll>
            <a href="about.html" className="hover:text-purple-700 transition-colors">About</a>
            <a href="#support" className="hover:text-purple-700 transition-colors">Support</a>
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-4 min-w-[260px] justify-end">
            <a href="#signin" className="text-gray-700 font-medium hover:text-purple-700 transition-colors">Sign in</a>
            <a href="#get-started" className="px-4 py-2 bg-purple-800 text-white rounded-md font-bold hover:bg-purple-900 transition-colors">Get Started</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
