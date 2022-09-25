import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../../components/global/Navbar";
import Footer from "../../components/global/Footer";
import Card from "../../components/elements/Card";

//shopify
import { storefront } from "../../utils/index";
import { singleProductQuery, checkoutMutationQuery } from "../../utils/Graphql";

function SingleProductPage({ product, products }) {
  const [isLoading, setIsLoading] = useState(false);
  const [productQuantity, setProductQuantity] = useState(1);
  const [randomProduct, setRandomProduct] = useState();
  const image = product.images.edges[0].node;
  const variantId = product.variants.edges[0].node.id;

  //you might also like
  useEffect(() => {
    setRandomProduct(Math.floor(Math.random() * 90 + 10));
  }, []);
  const relatedProducts = products.edges
    .filter((item) => item.node.handle !== product.handle)
    .slice(randomProduct, randomProduct + 4);

  //checkout Function
  async function checkout() {
    setIsLoading(true);
    const { data } = await storefront(checkoutMutationQuery, {
      variantId,
      productQuantity,
    });
    const { webUrl } = data.checkoutCreate.checkout;
    window.location.href = webUrl;
  }

  //product Quantity Increase function
  const handleProductQuantityIncrease = () => {
    if (productQuantity >= 100) {
      setProductQuantity(100);
    } else {
      setProductQuantity((productQuantity += 1));
    }
  };

  //product Quantity Increase function
  const handleProductQuantityDecrease = () => {
    if (productQuantity <= 1) {
      setProductQuantity(1);
    } else {
      setProductQuantity((productQuantity -= 1));
    }
  };

  return (
    <>
      <Head>
        <title>{product.title} - Petal Patch</title>
      </Head>
      <Navbar />
      <div className="flex py-[2vh] justify-center items-end w-[100vw] h-auto lg:h-[25vh] bg-[#f5f5f5]">
        <h3 className="text-[4vw] lg:text-[1.20vw] text-[#909090] font-medium">
          Shop &nbsp; / &nbsp; {product.title}
        </h3>
      </div>

      <div className="flex flex-col justify-center items-center lg:flex-row w-[100vw] h-auto ">
        {/* left site start */}
        <div className="flex mt-[5vh] justify-center lg:justify-end items-center w-[95%] lg:w-[40%] h-full ">
          <div className="w-[85%] lg:px-[4vh] py-[4vh] flex justify-center items-center bg-[#f5f5f5]">
            <Image src={image.transformedSrc} width={400} height={600}></Image>
          </div>
        </div>
        {/* left site end */}

        {/* right site start */}
        <div className="w-[80%] lg:w-[60%] flex flex-col h-full py-[6vh]">
          {/* first info */}
          <div className="px-[1vw] space-y-[2vh]">
            <h1 className="text-[5vw] lg:text-[1.80vw] font-medium text-[#52433a]">
              {product.title}
            </h1>
            <div className="w-full h-[1px]  bg-[#f5f5f5]"></div>
          </div>
          {/* first info end */}

          {/* second info start */}
          <div className="pt-[3vh] px-[1vw] space-y-[1vh]">
            <h2 className="text-[5vw] lg:text-[1.30vw] text-[#74b447] font-semibold">
              ${product.priceRange.minVariantPrice.amount}
            </h2>
            <p className="text-[#afafaf] text-[3vw] lg:text-[1vw] lg:w-[80%]">
              {product.description}
            </p>
          </div>
          {/* second info end */}

          {/* third info start */}
          <div className="pt-[3vh] px-[1vw] space-y-[2vh]">
            <p>Quantity</p>

            <div className="flex items-center justify-evenly w-[34vw] lg:w-[10vw] h-[6vh] border-[1px] border-[#e5e5e5]">
              <svg
                onClick={handleProductQuantityDecrease}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="cursor-pointer w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M5.25 12a.75.75 0 01.75-.75h12a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="border-l-[1px] border-r-[1px] border-[#e5e5e5] py-[1vh] px-[4vh]">
                {productQuantity}
              </p>
              <svg
                onClick={handleProductQuantityIncrease}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="cursor-pointer w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          {/* third info end */}

          {/* fourth info start */}

          <div className="pt-[3vh] px-[1vw] space-y-[2vh]">
            <button
              onClick={checkout}
              className="flex  justify-center items-center text-white font-medium bg-[#65aa35] rounded-full w-[40vw] lg:w-[14vw] h-[6vh] transition hover:bg-[#4e3e36]"
            >
              {isLoading && (
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              )}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </span>

              {(isLoading && "PURCHASING") || "PURCHASE"}
            </button>
          </div>
          {/* fourth info end */}

          {/* fifth info start */}

          <div className="pt-[5vh] px-[1vw] space-y-[2vh]">
            <div className="px-[4vw] py-[2vh]  border-[1px] rounded-[14px] w-[80vw] lg:w-[50vw] h-auto">
              <h2 className="text-[4vw] lg:text-[1.10vw] font-medium">
                Shipment Information
              </h2>
              <p className="text-[2.50vw] lg:text-[1vw]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
                neque autem atque. Sed et nisi,
              </p>
            </div>
            <div className="px-[4vw] py-[2vh]  border-[1px] rounded-[14px] w-[80vw] lg:w-[50vw] h-auto">
              <h2 className="text-[4vw] lg:text-[1.10vw] font-medium">
                Shipment Information
              </h2>
              <p className="text-[2.50vw] lg:text-[1vw]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
                neque autem atque. Sed et nisi,
              </p>
            </div>
            <div className="px-[4vw] py-[2vh]  border-[1px] rounded-[14px] w-[80vw] lg:w-[50vw] h-auto">
              <h2 className="text-[4vw] lg:text-[1.10vw] font-medium">
                Shipment Information
              </h2>
              <p className="text-[2.50vw] lg:text-[1vw]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
                neque autem atque. Sed et nisi,
              </p>
            </div>
          </div>

          {/* fifth info end */}
        </div>
        {/* right site end */}
      </div>

      {/* you might also like section start */}

      <div className="w-[100vw] py-[5vh] h-auto ">
        <div className="flex pt-[14vh] pb-[5vh] flex-col items-center justify-center">
          <h1 className="mont text-[5vw] lg:text-[2.50vw] font-bold text-[#4f4038]">
            You Might Also Like
          </h1>
          <h2 className="text-[4vw] lg:text-[2vw]">🌼🌸🌷</h2>
        </div>

        {/* cards grid start */}

        <div className="px-[5vw] grid grid-cols-1 lg:grid-cols-4 gap-4 place-items-center place-content-center items-center justify-center">
          {/* <Card />
          <Card />
          <Card />
          <Card /> */}

          {relatedProducts.map((item) => {
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

export default SingleProductPage;

export async function getStaticPaths() {
  const { data } = await storefront(`
    {
      products(first: 100) {
        edges {
          node {
            handle
          }
        }
      }
    }
  `);
  return {
    paths: data.products.edges.map((product) => ({
      params: { handle: product.node.handle },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { data } = await storefront(singleProductQuery, {
    handle: params.handle,
  });

  return {
    props: {
      product: data.productByHandle,
      products: data.products,
    },
  };
}
