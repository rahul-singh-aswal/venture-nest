import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Programs from "../components/Programs";
import Community from "../components/Community";
import Benefits from "../components/Benefits";
import Events from "../components/Events";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Programs />
      <Community />
      <Benefits />
      <Events />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
