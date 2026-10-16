import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Feature from "./components/Feature";
import Pricing from "./components/Pricing";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

export default function Home() {
  return (
    <main className="min-h-screen bg-warm-white text-graphite">
      {/* Navigation */}
      <Navbar />
      {/* Hero Section */}
      <Hero />
      {/* Features Section */}
      <Feature />
      {/* Pricing Section */}
      <Pricing />
      {/* FAQ Section */}
      <Faq />
      {/* Contact Section */}
      <Contact />
      {/* Footer Section */}
      <Footer />      
      {/* Back to Top Section */}
      <BackToTop />
    </main>
  );
}