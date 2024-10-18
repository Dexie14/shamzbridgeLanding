import ServCard from "@/components/Home/ServCard";
import serv from "@/public/assets/home/serv.svg";
import Image from "next/image";

const Service = () => {
  return (
    <div className="my-20 w-11/12 mx-auto" id="service">
      <h2
        className="text-4xl text-center text-primary"
        style={{ fontFamily: "DMSans" }}
      >
        Our Services
      </h2>
      <p className="text-xl text-[#4F4F4F] text-center md:w-[45%] my-8 mx-auto">
        Explore our diverse offerings and experience unparalleled excellence
        from tailored solutions to personalized consultations.
      </p>

      <section className="my-20">
        <div className="flex flex-wrap gap-12 items-center justify-center">
          <ServCard
            title="Programs/Projects Management"
            text="Partner with us for seamless project execution."
          />
          <ServCard
            title="Content Development"
            text="Unleash your creativity and transform ideas into impactful stories."
          />
          <ServCard
            title="Event Host/Management"
            text="Let us handle the details while you enjoy the moment."
          />
        </div>
      </section>
    </div>
  );
};

export default Service;
