import Link from "next/link";
import FlexBox from "./FlexBox";
import Section from "./Section";
import LandingPageWhiteBoard from "./LandingPageWhiteBoard";

function Home() {
  return (
    <Section divClassName="mt-20 grid min-h-[40rem] grid-cols-2">
      <FlexBox className="flex-col items-center justify-center gap-7">
        <h1 className="text-7xl font-bold text-cyan-500">
          Unleash Your Creativity
        </h1>
        <p className="text-lg leading-relaxed tracking-wide">
          Collaborate, design, and innovate with ease in a space built for
          creators. Start your journey today and bring your ideas to life.
        </p>
        <Link
          href=""
          className="rounded-lg bg-cyan-500 px-5 py-3 text-xl font-medium shadow-[0_4px_0_0_#000] transition-all duration-300 hover:translate-y-1 hover:shadow-none"
        >
          Start Creating
        </Link>
      </FlexBox>

      <LandingPageWhiteBoard />
    </Section>
  );
}

export default Home;
