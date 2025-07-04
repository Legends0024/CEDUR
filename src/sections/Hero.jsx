import { Element, Link as LinkScroll } from "react-scroll";
// import Button from "../components/Button.jsx";
// import { features, details } from "../constants/data.js";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-36 md:pb-24 bg-[#ede7f6]">
      <Element name="hero">
        <div className="container mx-auto flex flex-col items-center justify-center px-4 md:px-8 min-h-[80vh]">
          {/* Hero Text */}
          <div className="relative z-2 w-full md:w-2/3 text-center mb-12">
            <div className="uppercase text-[#a78bfa] font-semibold tracking-widest text-xs sm:text-sm mb-2">
              Payroll
            </div>
            <h1 className="mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-black leading-tight">
              Payroll, HR, benefits. Simplified.
            </h1>
            <p className="max-w-2xl mx-auto mb-8 text-base sm:text-lg text-black font-normal">
              Transform outdated payroll practices and build a better workplace for your business with{' '}
              <span className="font-bold text-black">CEDUR Payroll</span>.
            </p>
            <LinkScroll to="features" offset={-100} spy={true} smooth={true}>
              {/* Add a button or call to action here if needed */}
            </LinkScroll>
          </div>

          {/* Hero Image at the bottom, centered */}
          <div className="flex items-end justify-center w-full md:w-2/3 mt-4">
            <img
              src="/images/homepage.png"
              className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl h-auto object-contain drop-shadow-2xl rounded-2xl border border-[#e6dbf7] bg-white"
              alt="hero"
              style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)' }}
            />
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;
