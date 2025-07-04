import Header from "./sections/Header.jsx";
import Hero from "./sections/Hero.jsx";
// import Features from "./sections/Features.jsx";
import PricingPage from "./components/PricingPage.jsx";
import FeaturesPage from "./components/FeaturesPage.jsx";
import AboutFullPage from "./components/AboutFullPage.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInPage from "./components/SignInPage.jsx";
import Faq from "./sections/Faq.jsx";
import Testimonials from "./sections/Testimonials.jsx";
import Footer from "./sections/Footer.jsx";
import SupportPage from "./components/SupportPage.jsx";

const App = () => {
  return (
    <Router>
      <main className="overflow-hidden">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Faq />
              <Testimonials />
              <Footer />
            </>
          } />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/about" element={<AboutFullPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/signin" element={<SignInPage />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
