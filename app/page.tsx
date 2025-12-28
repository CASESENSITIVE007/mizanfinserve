// import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar  from "../components/Navbar";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import WhyChooseUs from "../components/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Services/>
      {/* <Banner/> */}
      <WhyChooseUs/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  );
}
