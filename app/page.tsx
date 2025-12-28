import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import GridBackground from "../components/GridBackground";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* 1. This stays at the bottom */}
      <GridBackground />
      
      <div className="relative z-10">
        <Navbar />
        
        {/* 2. Hero has its own dark background, so it will hide the grid */}
        <Hero />
        
        {/* 3. IMPORTANT: Go into these components and 
              change their 'bg-white' or 'bg-[#0a0c10]' to 'bg-transparent' */}
        <div className="bg-transparent">
          <Services />
          <WhyChooseUs />
          <Testimonials />
        </div>
        
        <Contact />
        <Footer />
      </div>
    </div>
  );
}