import AboutPage from "../components/AboutPage.jsx";
import Footer from "../sections/Footer.jsx";
import Header from "../sections/Header.jsx";

const AboutFullPage = () => {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <AboutPage />
      </main>
      <Footer />
    </>
  );
};

export default AboutFullPage;
