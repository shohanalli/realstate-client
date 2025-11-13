import React from "react";

const MakepropertySec = () => {
  return (
    <div>
      <section
        className="relative bg-fixed bg-center py-10 bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://i.ibb.co.com/TBNnJsXb/Screenshot-30.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 container mx-auto px-6 py-20 text-white">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-5">
            Market Your Property With Realty
          </h2>
          <p className="text-base text-center font-bold font-black/30">
            No obligation market appraisal for your property today. Our virtual
            options are still <br /> available if you prefer
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center mt-10">
            <div className="flex flex-col items-center justify-center w-40 h-40 md:w-48 md:h-48 border-1 border-white rounded-full text-center">
              <h3 className="text-4xl font-bold mb-1">26+</h3>
              <p className="text-base">Years of Business</p>
            </div>
            <div className="flex flex-col items-center justify-center w-40 h-40 md:w-48 md:h-48 border-1 border-white rounded-full text-center">
              <h3 className="text-4xl font-bold mb-1">120+</h3>
              <p className="text-sm">Properties sold</p>
            </div>
            <div className="flex flex-col items-center justify-center w-40 h-40 md:w-48 md:h-48 border-1 border-white rounded-full text-center">
              <h3 className="text-4xl font-bold mb-1">50+</h3>
              <p className="text-sm">Happy customers</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MakepropertySec;
