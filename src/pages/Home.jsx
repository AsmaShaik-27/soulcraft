import Hero from "../components/home/Hero";
import Navbar from "../components/home/Navbar";
import FeaturedArtists from "../components/home/FeaturedArtists";
import FeaturedCollections from "../components/home/FeaturedCollections";
import CommissionProcess from "../components/home/CommissionProcess";


function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedCollections />
      <CommissionProcess />
      
    </>
  );
}

export default Home;