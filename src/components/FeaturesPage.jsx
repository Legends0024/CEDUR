import Features from "../sections/Features.jsx";
import Footer from "../sections/Footer.jsx";
import Header from "../sections/Header.jsx";

const FeaturesPage = () => {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <Features />
      </main>
      <Footer />
    </>
  );
};

export default FeaturesPage;
