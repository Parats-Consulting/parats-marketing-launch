import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Outcomes from "@/components/Outcomes";
import Services from "@/components/Services";
import HowWeWork from "@/components/HowWeWork";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <Hero />
        <Outcomes />
        <Services />
        <HowWeWork />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
