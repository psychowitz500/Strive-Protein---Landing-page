import { features } from "../constants";

const FeatureSection = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      {/* Heading */}
      <div className="text-center">
        <span className="bg-neutral-900 text-green-500 rounded-full h-6 text-sm font-medium px-3 py-1 uppercase tracking-wider shadow-md">
          Nutrition
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide leading-snug">
          Why Choose{"  "}
          <span className="bg-gradient-to-r from-cyan-400 to-green-400 text-transparent bg-clip-text">
            Strive?
          </span>
        </h2>
      </div>

      {/* Features Grid */}
      <div className="flex flex-wrap justify-center mt-10 lg:mt-20 gap-y-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/3 px-6 flex"
          >
            {/* Icon Container */}
            <div className="flex-shrink-0 mx-4 h-12 w-12 flex justify-center items-center rounded-full 
              bg-neutral-900 text-green-400 shadow-md shadow-green-500/20 
              transform hover:scale-110 transition duration-300">
              {feature.icon}
            </div>

            {/* Text */}
            <div className="ml-2">
              <h5 className="mt-1 mb-3 text-xl font-semibold text-white hover:text-green-400 transition duration-300">
                {feature.text}
              </h5>
              <p className="text-md text-neutral-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
