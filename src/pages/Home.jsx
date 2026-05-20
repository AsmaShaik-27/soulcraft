import Hero from "../components/home/Hero";
import Navbar from "../components/home/Navbar";
import Categories from "../components/home/Categories";
import FeaturedArtworks from "../components/home/FeaturedArtworks";
import WhyChoose from "../components/home/WhyChoose";
import FeaturedArtists from "../components/home/FeaturedArtists";
import Footer from "../components/home/Footer";
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedArtworks />
      <WhyChoose />
      <FeaturedArtists />
      <Footer />
      
    </>
  );
}

export default Home;