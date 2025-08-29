import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/code.jpg";
import { checklistItems } from "../constants";

const Workflow = () => {
  return (
    <div className="mt-20">
      {/* Heading */}
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide leading-snug">
        Fuel your body with{" "}
        <span className="bg-gradient-to-r from-cyan-500 to-green-500 text-transparent bg-clip-text">
          Complete nutrition.
        </span>
      </h2>

      {/* Section Layout */}
      <div className="flex flex-wrap justify-center items-center mt-12">
        
        {/* Product Image */}
        <div className="p-5 w-full lg:w-1/3 flex justify-center">
          <div className="relative group">
            <img
              src={codeImg}
              alt="Strive Protein"
              className="rounded-2xl shadow-lg transform group-hover:scale-105 transition duration-500"
            />
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 to-green-500 opacity-20 blur-2xl group-hover:opacity-30 transition duration-500"></div>
          </div>
        </div>

        {/* Checklist */}
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div
              key={index}
              className="flex mb-10 hover:scale-[1.02] transition duration-300"
            >
              {/* Icon */}
              <div className="text-green-400 mx-6 bg-neutral-900 h-12 w-12 flex justify-center items-center rounded-full shadow-md shadow-green-500/20">
                <CheckCircle2 className="w-6 h-6" />
              </div>

              {/* Text */}
              <div>
                <h5 className="mt-1 mb-2 text-xl font-semibold text-white">
                  {item.title}
                </h5>
                <p className="text-md text-neutral-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
