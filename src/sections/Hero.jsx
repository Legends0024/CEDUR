import { Element, Link as LinkScroll } from "react-scroll";
import Button from "../components/Button.jsx";
import { features, details } from "../constants/data.js";

const Hero = () => {
  return (
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32 bg-[#ede7f6]">
      <Element name="hero">
        <div className="container flex flex-col md:flex-row items-center justify-between">
          <div className="relative z-2 max-w-512 max-lg:max-w-388 text-left">
            <div className="caption small-2 uppercase text-[#a78bfa] font-semibold tracking-widest mb-2">
              Payroll
            </div>
            <h1 className="mb-6 text-5xl md:text-6xl font-extrabold text-black leading-tight">
              Payroll, HR, benefits. Simplified.
            </h1>
            <p className="max-w-440 mb-10 text-lg text-black font-normal">
              Transform outdated payroll practices and build a better workplace for
              your business with{" "}
              <span className="font-bold text-black">CEDUR Payroll</span>.
            </p>
            <LinkScroll to="features" offset={-100} spy smooth>
              <Button
                icon="/images/zap.svg"
                className="bg-[#a78bfa] text-black hover:bg-[#b39ddb] px-8 py-3 rounded-full font-semibold text-lg shadow transition"
              >
                Try it now
              </Button>
            </LinkScroll>
          </div>

          <div className="flex items-center mt-10 md:mt-0 md:ml-10">
            <img
              src="/images/homepage.png"
              className="w-[2700px] h-auto object-contain drop-shadow-xl"
              alt="hero"
            />
            
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;
