import mission from "@/public/assets/MissionImage.svg";
import Image from "next/image";

const Mission = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      className="w-[88%] mx-auto md:flex flex-row-reverse justify-between items-center py-10"
    >
      <section className="md:w-[48%]">
        <Image src={mission} alt="mission" className="" />
      </section>
      <section className="md:w-[48%]">
        <h4 className="bg-white rounded-3xl mt-4 sm:mt-0 border-2 border-primary border-opacity-50 px-3 py-1 text-slate text-3xl w-[120px] text-center">
          Mission
        </h4>
        <p className="text-slate lg:text-xl text-base mt-5 lg:w-11/12">
          Our mission is to cultivate an empowering atmosphere for skill
          acquisition and capacity enhancement that heralds a holistic growth
          and developent for individuals and organizations
        </p>
      </section>
    </div>
  );
};

export default Mission;
