import Hero from "../components/home/Hero";
import Navbar from "../components/home/Navbar";
import FeaturedArtists from "../components/home/FeaturedArtists";
import FeaturedCollections from "../components/home/FeaturedCollections";
import CommissionProcess from "../components/home/CommissionProcess";
import FeaturedProducts from "../components/home/FesturedProducts";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Testimonials from "../components/home/Testimonials";
import Footer from "../layouts/Footer";
import CTASection from "../components/home/CTASection";


function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedCollections />
      <FeaturedProducts />
      <CommissionProcess />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
      <Footer />
      
    </>
  );
}

export default Home;