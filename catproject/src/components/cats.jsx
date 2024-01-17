import React, { useEffect, useState } from "react";
import Nav from "./nav";
import AnimatedText from "./animatedText";

export default function Cats() {
  return (
    <section className="w-screen overflow-hidden h-screen items-center justify-center m-0 bg-fixed bg-center bg-cover custom-img">
      <div className="p-2 w-screen">
        <Nav />
      </div>

      <div className=" w-full h-full">
        <div className=" w-1/2 h-full">
          <AnimatedText
            text={"Discover And Learn More About our Feline friends"}
            className=" text-white font-semibold !text-6xl p-10 leading-8 sm:!text-4xl xs:!text-3xl"
          />
        </div>
      </div>
    </section>
  );
}
