import Image from "next/image";
import HeroImg from "@/public/assets/HeroImage.svg";
import frame from "@/public/assets/home/FrameHero.svg";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      data-aos="zoom-in-down"
      data-aos-duration="300"
      className="bg-background lg:relative md:static mt-32"
    >
      <section className="md:flex justify-between items-center w-11/12 mx-auto py-10">
        <div className="md:w-[55%] mb-20 md:mb-0">
          <h2
            style={{ fontFamily: "DMSans" }}
            className="text-center sm:text-left lg:text-5xl md:text-4xl text-3xl font-DM_SanS text-primary font-bold leading-[35.80px]"
          >
            Shamzbridge is your all-in-one Global People Platform
          </h2>
          <p className="my-8 text-center sm:text-left md:w-[88%] text-base lg:text-xl text-slate font-medium">
            Build an Organization of High Repute, Immerse yourself in
            Transferable skills In-Demand skills Marketable skillset
            Transferable skills for Self Sustenance
          </p>
          <div className="mx-auto w-1/2 md:mx-0 md:w-full">
            <Link href="#footer">
              <button className="bg-button rounded-3xl py-3 px-6 text-white w-full md:w-[35%]">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 pt-10 pb-20 relative lg:static">
          <div>
            <Image src={HeroImg} alt="Hero" className="z-10 relative" />
          </div>
          <div>
            <Image
              src={frame}
              alt="frame"
              className="absolute right-0 bottom-0 z-0"
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Hero;
