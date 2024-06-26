import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <div>
        <Navbar></Navbar>
      </div>
      <div className="container mt-20 mx-auto px-12 py-12">
        <HeroSection></HeroSection>
        <AboutSection></AboutSection>
      </div>
    </main>
  );
}
