import { Element } from "react-scroll";
import { features, details } from "../constants/data.js";
import Button from "../components/Button.jsx";

const Features = () => {
  // Only remove the feature with title "Run payroll in minutes with smart technology."
  const filteredFeatures = features.filter(
    (f) => f.title !== "Run payroll in minutes with smart technology."
  );

  return (
    <section className="bg-[#e6dbf7]">
      <Element name="features">
        <div className="container bg-[#e6dbf7]">
          <div className="relative flex md:flex-wrap flex-nowrap md:overflow-hidden max-md:flex-col md:g7 max-md:gap-3">
            {filteredFeatures.map(
              ({ id, icon, caption, title, text, button }) => (
                <div
                  key={id}
                  className="relative z-2 md:px-10 px-5 md:pb-10 pb-5 flex-50 max-md:g7 max-md:flex-320"
                >
                  <div className="w-full flex justify-start items-start">
                    <div className="-ml-3 mb-12 flex items-center justify-center flex-col">
                      {/* Restore any content here if needed, but keep image removed as requested */}
                    </div>
                  </div>

                  <p className="caption mb-5 max-md:mb-6 text-black">{caption}</p>
                  <h2 className="max-w-400 mb-7 h3 text-white max-md:mb-6 max-md:h5">
                    {title}
                  </h2>
                  <p className="mb-11 body-1 max-md:mb-8 max-md:body-3 text-white">
                    {text}
                  </p>
                  <Button icon={button.icon}>{button.title}</Button>
                </div>
              )
            )}

            <ul className="relative flex justify-around flex-grow px-[5%] max-md:hidden">
              {details.map(({ id, icon, title }) => (
                <li key={id} className="relative pt-16 px-4 pb-14">
                  <div className="flex items-center justify-center mx-auto mb-3 transition-all duration-500 shadow-500 size-20">
                    <img
                      src={icon}
                      alt={title}
                      className="size-17/20 object-contain z-20"
                    />
                  </div>
                  <h3 className="relative z-2 max-w-36 mx-auto my-0 base-small text-center uppercase text-white">
                    {title}
                  </h3>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Features;
