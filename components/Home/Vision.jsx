import vision from "@/public/assets/VissionImage.svg";
import Image from "next/image";

const Vision = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="800"
      className="w-[88%] mx-auto md:flex justify-between items-center py-10"
    >
      <section className="md:w-[48%]">
        <Image src={vision} alt="vision" className="" />
      </section>
      <section className="md:w-[48%]">
        <h4 className="bg-white rounded-3xl  mt-4 sm:mt-0 border-2 border-primary border-opacity-50 px-3 py-1 text-slate text-3xl w-[120px] text-center">
          Vision
        </h4>
        <p className="text-slate lg:text-xl text-base mt-5 lg:w-11/12">
          To become a premier organization dedicated to enhancing both personal
          and professional capacities of individuals and businesses, fostering
          efficiency, heightened productivity, and innovation.
        </p>
      </section>
    </div>
  );
};

export default Vision;
