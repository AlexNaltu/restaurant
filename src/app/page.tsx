import Chefs from "@/components/Chefs";
import Container from "@/components/Container";
import Gallery from "@/components/Gallery";
import OurStory from "@/components/OurStory";
import Review from "@/components/Review";
import Special from "@/components/Special";
import TrueTaste from "@/components/TrueTaste";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <div>
      <OurStory />
      <Special />
      <TrueTaste />
      <Review />
      <Chefs />
      <Gallery />
    </div>
  );
}
