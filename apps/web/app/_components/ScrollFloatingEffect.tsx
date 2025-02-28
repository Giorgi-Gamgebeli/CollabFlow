"use client";

import { useTransform, useScroll, useSpring } from "framer-motion";
import MotionComponent from "./MotionComponent";

function ScrollFloatingAnimation({ children }: { children: React.ReactNode }) {
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    mass: 5,
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  });

  const y = useTransform(smoothProgress, (value) => {
    return (value - scrollYProgress.get()) * 80;
  });

  return (
    <MotionComponent
      style={{ y }}
      as="header"
      className="fixed top-0 left-1/2 z-[999] mx-auto mt-10 flex w-[30rem] -translate-x-1/2 flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white/90 px-2 py-0.5 font-medium backdrop-blur-sm dark:bg-[#0c122c7c] dark:shadow-sm dark:shadow-slate-800 dark:backdrop-blur-md"
    >
      {children}
    </MotionComponent>
  );
}

export default ScrollFloatingAnimation;
