import React from "react";
import Image from "next/image";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";
import rr from "../public/reenerogger.jpeg";
import alicia from "../public/alicia.jpeg";
function about() {
  return (
    <>
      <Navbar />
      <div className="py-[4vh] flex flex-col justify-center items-center w-[100vw] h-auto ">
        <div className="mt-[20vh] flex lg:flex-row flex-col items-center lg:items-start justify-around  w-[80%]">
          <div className="w-[100%] lg:w-[40%]">
            <Image src={rr}></Image>
          </div>

          {/* text div start */}
          <div className="space-y-[4vh] lg:w-[50%]">
            <h1 className="text-[5vw] lg:text-[2.50vw] font-semibold">
              <span className="font-normal">Meet</span> Renee, & Roger
            </h1>
            <h2 className="italic text-[3vw] lg:text-[1.80vw]">
              Renee was born and raised in New York, she came to Fort Myers 17
              years ago with a dream. The Petal Patch was that dream! She has
              almost 30 years of experience and specializes in large events and
              sophisticated arrangements. With an amazing ability and eye for
              design, she will be sure to fulfill your needs! Roger originally
              from Maine the two met 20years ago. She makes them and he helps
              take them. Renee and Roger in their spare time love to do animal
              rescue, they foster puppies for paws crossed rescue, and its not
              uncommon to have some bottle feeding kittens. We love to help the
              rescues and save lives. You may even see a foster pup when you pop
              in the shop.{" "}
            </h2>
          </div>

          {/* div end text */}
        </div>

        <div className="mt-[20vh] flex lg:flex-row flex-col items-center lg:items-start justify-around  w-[80%]">
          <div className="w-[100%] lg:w-[40%]">
            <Image src={alicia}></Image>
          </div>

          {/* text div start */}
          <div className="space-y-[4vh] lg:w-[50%]">
            <h1 className="text-[5vw] lg:text-[2.50vw] font-semibold">
              <span className="font-normal">Meet</span> Alicia,
            </h1>
            <h2 className="italic text-[3vw] lg:text-[1.80vw]">
              Alicia is a New Yorker also. She is a crucial part of our team and
              will be sure to always deliver your arrangements with a beautiful
              smile! We hit the jackpot the day she walked through our door!
              Alicia has a beautiful family that she loves spending time with
              and plays hockey when she can.
            </h2>
          </div>

          {/* div end text */}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default about;
