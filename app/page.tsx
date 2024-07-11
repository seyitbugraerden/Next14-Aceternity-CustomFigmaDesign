import AboutUs from "@/components/AboutUs";
import { BentoGridDemo } from "@/components/BentoGridDemo";
import { ImagesSliderDemo } from "@/components/ImagesSliderDemo";
import { StickyScrollRevealDemo } from "@/components/StickyScrollRevealDemo";
import ThreeDCardDemo from "@/components/ThreeCardDemo";

export default function Home() {
  return (
    <>
      <ImagesSliderDemo />
      <AboutUs />
      <StickyScrollRevealDemo />
      <BentoGridDemo />
      <section>
        <h4 className="text-center pt-16 pb-8">Blog</h4>
        <div className="grid grid-cols-3 gap-24 scale-[0.9] origin-top">
          <ThreeDCardDemo />
          <ThreeDCardDemo className="lg:hidden"/>
          <ThreeDCardDemo className="lg:hidden"/>
        </div>
      </section>
    </>
  );
}
