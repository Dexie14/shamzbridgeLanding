import Vision from "./Vision";
import Ratings from "./Ratings";
import Mission from "./Mission";

const AboutSection = () => {
  return (
    <div className="w-11/12 py-10 px-3 mx-auto mb-20" id="about">
      <h3
        style={{ fontFamily: "DMSans" }}
        className="text-4xl text-primary text-center"
      >
        About Us
      </h3>
      <p className="text-xl text-slate text-center my-5 md:w-[85%] mx-auto ">
        Our journey began with a simple yet ambitious goal: to provide service
        beyond compare. Over the years, we have evolved and grown, expanding our
        offerings to meet the diverse needs of our clients. From tailored
        solutions to comprehensive consultations, we leverage our extensive
        knowledge and experience to drive transformative change and help our
        clients succeed in today's dynamic business environment.
      </p>

      <Ratings />
      <Vision />
      <Mission />
    </div>
  );
};

export default AboutSection;
