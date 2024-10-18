import Image from "next/image";
import img from "@/public/assets/home/callImage.svg"

const Call = () => {

    // bg-[url(/assets/home/callImage.svg)] 
    {/* <Image  src={img} alt="img" className="z-[-10] absolute right-0 opacity-10"/> */}
  return (
    <div className=" bg-[url(/assets/home/callImage.svg)] bg-no-repeat bg-cover overflow-x-hidden py-24">
      <section className="w-11/12 mx-auto " id="contactUs">
        <h1 style={{ fontFamily: "DMSans" }} className="text-white md:text-5xl text-3xl pb-10">
          Ready to build the next Unicorn project?
        </h1>
        <div className="mx-auto w-1/2 md:mx-0 md:w-full" >
          <button className="bg-white rounded-3xl py-3 px-6 text-xl text-[#01B14F] w-full md:w-[30%] xl:w-[15%]">
            <a href = "mailto: enquiries@secsystems.org"> Mail us now </a>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Call;
