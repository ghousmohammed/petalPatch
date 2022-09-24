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

//shopify imports
import { storefront } from "../utils/index";
import { productsQuery } from "../utils/Graphql";

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>Welcome - The Petal Patch </title>
        <meta name="description" content="A Petal patch shop" />
        <meta
          name="keywords"
          content="buy bouqets, buy flowers, buy choclates, buy aniversary gifts, buy gifts, special days gifts"
        />
        <meta name="author" content="Davin Young" />
      </Head>
      <Navbar />
      <HeroSlider />
      <CardsNav />
      <Trending productsFromShopify={products} />
      <Info />
      <Testimonials />
      <Awards />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const { data } = await storefront(productsQuery);
  return {
    props: {
      //products
      products: data.products,
    },
  };
}
