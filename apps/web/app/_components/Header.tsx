import ScrollFloatingAnimation from "./ScrollFloatingEffect";
import FlexBox from "./FlexBox";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <div className="fixed top-0 z-[999] w-full">
      <ScrollFloatingAnimation>
        <FlexBox className="items-center justify-between text-sm">
          <FlexBox className="items-center gap-1">
            <div className="h-11 w-11 overflow-hidden rounded-full">
              <Image
                src="/logo.webp"
                alt="logo of the company"
                priority
                height={50}
                width={50}
              />
            </div>
            <p className="text-lg">Pixel Sync</p>
          </FlexBox>
          {/* <Nav /> */}
          <FlexBox className="items-center gap-2 border-l border-gray-100 pl-2">
            <Link
              href="/login"
              className="rounded-full border border-gray-200 px-3 py-2 transition-all duration-300 hover:bg-gray-200"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="bg-primary hover:bg-secondary rounded-full px-4 py-2 text-sm text-white transition-all duration-300"
            >
              Get Started
            </Link>
          </FlexBox>
        </FlexBox>
      </ScrollFloatingAnimation>
    </div>
  );
}

export default Header;
