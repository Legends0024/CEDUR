import { Element, Link as LinkScroll } from "react-scroll";
import Button from "../components/Button.jsx";
// import { features, details } from "../constants/data.js";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-36 md:pb-24 bg-[#ede7f6]">
      <Element name="hero">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-8">
          {/* Hero Image */}
          <div className="flex items-center justify-center mt-10 md:mt-0 md:ml-10 w-full md:w-1/2">
            <img
              src="/images/homepage.png"
              className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl h-auto object-contain drop-shadow-xl"
              alt="hero"
            />
          </div>

          {/* Hero Text */}
          <div className="relative z-2 w-full md:w-1/2 text-left mb-8 md:mb-0">
            <div className="uppercase text-[#a78bfa] font-semibold tracking-widest text-xs sm:text-sm mb-2">
              Payroll
            </div>
            <h1 className="mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-black leading-tight">
              Payroll, HR, benefits. Simplified.
            </h1>
            <p className="max-w-xl mb-8 text-base sm:text-lg text-black font-normal">
              Transform outdated payroll practices and build a better workplace for your business with{' '}
              <span className="font-bold text-black">CEDUR Payroll</span>.
            </p>
            <LinkScroll to="features" offset={-100} spy={true} smooth={true}>
              <Button
                icon="/images/zap.svg"
                className="bg-[#a78bfa] text-black hover:bg-[#b39ddb] px-6 sm:px-8 py-3 rounded-full font-semibold text-base sm:text-lg shadow transition"
              >
                Try it now
              </Button>
            </LinkScroll>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;
