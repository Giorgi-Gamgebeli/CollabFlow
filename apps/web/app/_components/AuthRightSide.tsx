"use client";

import { useEffect } from "react";
import { layerAnimation } from "../_animations/authAnimation";
import { useAnimate } from "framer-motion";
import MotionComponent from "./MotionComponent";
import Image from "next/image";
import sketchImg from "../../public/sketch.png";
import userJourneyImg from "../../public/userJourney.png";
import designImg from "../../public/design.png";

function AuthRightSide() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    layerAnimation(animate);
  }, [animate]);
  return (
    <div
      className="flex h-full w-full items-center justify-center overflow-hidden bg-white"
      ref={scope}
    >
      <MotionComponent
        className="bg-brand-400 relative h-20 w-20 rounded-full"
        initial={{ y: -500 }}
        id="secondLayer"
      >
        <div className="absolute z-10">
          <MotionComponent
            className="h-32 w-[300rem] -rotate-45 bg-gray-900"
            id="line1"
          />
          <MotionComponent
            className="h-32 w-[300rem] -rotate-45 bg-gray-900"
            id="line2"
          />
          <MotionComponent
            className="h-32 w-[300rem] -rotate-45 bg-gray-900"
            id="line3"
          />
        </div>

        <div className="absolute top-0 left-0 z-20 h-72 w-80 -rotate-45 overflow-hidden">
          <MotionComponent
            className="hidden h-full w-full translate-x-[100%] items-center gap-80"
            id="headingSlider"
          >
            <h2 className="flex min-w-full justify-end text-3xl font-medium text-white">
              Sketch It Out
            </h2>
            <h2 className="flex min-w-full justify-end text-3xl font-medium text-white">
              User Journey
            </h2>
            <h2 className="flex min-w-full justify-end text-3xl font-medium text-white">
              Design
            </h2>
          </MotionComponent>
        </div>

        <div className="mt-60">
          <MotionComponent
            className="hidden h-full w-full translate-x-[100%] rotate-3 items-center gap-[100%]"
            id="imageSlider"
          >
            <Image
              src={sketchImg}
              alt="something"
              className="flex min-w-full justify-end text-3xl font-medium text-white"
            />
            <Image
              src={userJourneyImg}
              alt="something"
              className="flex min-w-full justify-end text-3xl font-medium text-white"
            />
            <Image
              src={designImg}
              alt="something"
              className="flex min-w-full justify-end text-3xl font-medium text-white"
            />
          </MotionComponent>
        </div>
      </MotionComponent>
    </div>
  );
}

export default AuthRightSide;
