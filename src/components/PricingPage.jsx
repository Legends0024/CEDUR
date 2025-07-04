
import Pricing from "../sections/Pricing.jsx";
import Footer from "../sections/Footer.jsx";
import Header from "../sections/Header.jsx";


const PricingPage = () => {
  return (
    <>
      <Header />
      <main className="overflow-hidden pt-24 bg-gradient-to-br from-[#4e5d94] via-[#4e5d94]/80 to-[#6c8ae4] min-h-screen">
        <div className="pt-8 pb-8">
          <Pricing />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PricingPage;
