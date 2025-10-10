import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { CategorySection } from "./components/CategorySection";
import { FeaturedExplore } from "./components/FeaturedExplore";
import { ExploreGrid } from "./components/ExploreGrid";
import { BlogSection } from "./components/BlogSection";
import { MapSection } from "./components/MapSection";
import { VideoSection } from "./components/VideoSection";
import { InstagramSection } from "./components/InstagramSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <CategorySection />
      <FeaturedExplore />
      <ExploreGrid />
      <BlogSection />
      <MapSection />
      <VideoSection />
      <InstagramSection />
      <Footer />
    </div>
  );
}
