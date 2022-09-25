import React from "react";
import Head from "next/head";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";
import Card from "../components/elements/Card";

//shopify imports
import { storefront } from "../utils/index";
import { productsQuery } from "../utils/Graphql";

function shop({ products }) {
  console.log({ products });
  return (
    <>
      <Head>
        <title>Shop - The Petal Patch </title>
        <meta name="description" content="A Petal patch shop" />
        <meta
          name="keywords"
          content="buy bouqets, buy flowers, buy choclates, buy aniversary gifts, buy gifts, special days gifts"
        />
        <meta name="author" content="Davin Young" />
      </Head>
      <Navbar />
      <div className="flex flex-col py-[2vh] justify-end items-center w-[100vw] h-auto lg:h-[30vh] bg-[#f5f5f5]">
        <h3 className="text-[4vw] lg:text-[1.80vw] text-[#909090] font-medium">
          Shop / All Category
        </h3>
        <p className="text-[3vw] lg:text-[1.20vw] text-[#909090]">
          You&apos;re listing all products
        </p>
      </div>

      {/* you might also like section start */}

      <div className="w-[100vw]  h-auto ">
        <div className="flex pt-[4vh] pb-[5vh] flex-col items-center justify-center">
          <h1 className="mont text-[6vw] lg:text-[2.50vw] font-bold text-[#4f4038]">
            Shop
          </h1>
        </div>

        {/* cards grid start */}

        <div className="px-[5vw] py-[2vh] grid grid-cols-1 lg:grid-cols-4 gap-4 place-items-center place-content-center items-center justify-center">
          {/* NOTE:: loop over products here */}

          {products.edges.map((item) => {
            const product = item.node;
            const image = product.images.edges[0].node;
            return (
              <Card
                key={product.handle}
                productLink={`/products/${product.handle}`}
                productName={product.title}
                productPrice={product.priceRange.minVariantPrice.amount}
                productImage={image.transformedSrc}
              />
            );
          })}
        </div>
        {/* cards grid end */}
      </div>

      {/* you might also like section ends */}

      <Footer />
    </>
  );
}

export default shop;

export async function getStaticProps() {
  const { data } = await storefront(productsQuery);
  return {
    props: {
      //products
      products: data.products,
    },
  };
}
