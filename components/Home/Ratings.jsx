"use client";
import CountUp from "react-countup";

const Ratings = () => {
  const RateData = [
    {
      heading: 50,
      description: "clients",
      hasPlus: true,
      format: "standard",
    },
    {
      heading: 20000,
      description: "projects",
      hasPlus: true,
      format: "standard",
    },
    {
      heading: 3000000,
      description: "community",
      hasPlus: true,
      format: "millions",
    },
    {
      heading: 5,
      description: "user ratings",
      hasPlus: false,
      format: "standard",
    },
  ];

  const formatNumber = (value, format) => {
    if (format === "millions") {
      return `${(value / 1000000).toFixed(1)}M`;
    }
    return value.toLocaleString();
  };

  return (
    <section>
      <div className="sm:w-9/12 my-14 mx-auto w-[90%]">
        <div className="flex flex-wrap justify-around text-center gap-y-5">
          {RateData.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <h4 className="text-slate sm:text-5xl text-2xl font-semibold mb-5">
                <CountUp
                  end={item.heading}
                  duration={5}
                  formattingFn={(value) => formatNumber(value, item.format)}
                />
                {item.hasPlus && "+"}
              </h4>
              <p className="italic uppercase text-slate sm:text-sm font-bold">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ratings;
