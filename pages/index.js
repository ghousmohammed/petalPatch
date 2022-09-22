import Head from "next/head";
import Image from "next/image";
import CardsNav from "../components/elements/CardsNav";
import Awards from "../components/global/Awards";
import Footer from "../components/global/Footer";
import HeroSlider from "../components/global/HeroSlider";
import Info from "../components/global/Info";
import Navbar from "../components/global/Navbar";
import Testimonials from "../components/global/Testimonials";
import Trending from "../components/global/Trending";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <CardsNav />
      <Trending />
      <Info />
      <Testimonials />
      <Awards />
      <Footer />
    </>
  );
}
