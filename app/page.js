import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Indie_Flower } from "next/font/google";
import Container from "./components/Container";
import Navigation from "./components/Navigation";
import Image from "next/image";

const indieFlower = Indie_Flower({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-handwriting",
});

const Home = () => {
  return (
    <main className="min-h-screen bg-white">
      <Container>
        <Navigation />
        {/* Rest of your page content */}
      </Container>
    </main>
  );
};

export default Home;
