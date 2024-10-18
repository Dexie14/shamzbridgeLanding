import serv from "@/public/assets/home/serv.svg";
import Image from "next/image";

const ServCard = ({ title, text }) => {
  return (
    <div className="py-8 px-3 flex flex-col justify-center bg-white border-[1.5px]  rounded-2xl items-center h-[300px] md:max-w-[45%] lg:max-w-[30%]">
      <div className="bg-slate flex justify-center w-[60px] h-[60px] rounded-2xl">
        <Image src={serv} alt="serv" className="" />
      </div>

      <h3 className="mt-10 text-2xl text-center">{title}</h3>
      <p className="text-slate text-sm text-center my-5">{text}</p>
    </div>
  );
};

export default ServCard;
