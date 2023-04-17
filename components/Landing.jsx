import { servicesMin } from "@/constants";
import { handleHover } from "@/constants/functions";
import React from "react";

function Landing() {
  return (
    <div className="landing">
      <div className="bg-blur-grad mt-28 ">
        <div className=" ">
          <h1 className="text-5xl font-bold">
            Hire Security and{" "}
            <span className="text-[#485ED8]"> Penetration</span> Testers
          </h1>
          <p className="text-xl mt-9  max-w-[900px]">
            Prevent your system, application, or network from potential security
            breaches and vulnerabilities with the help of our penetration
            testing services. Hire security testers to ensure that your
            business-critical data stays beyond the reach of hackers.
          </p>
          <div className="flex mt-20  w-fit border rounded-lg overflow-hidden hover-card">
            <input
              type="email"
              className=" z-10  border-0 outline-none text-black font-semibold p-2 w-[300px] placeholder:text-[#485ED8]"
              placeholder="Enter your email address"
            />
            <button
              className="px-6 py-2  blue-h-border rounded-lg cursor-pointer z-10"
              onClick={() => alert("1")}
            >
              Subscribe
            </button>
          </div>
        </div>
        <div>
          <div className="grid place-items-center mt-40  py-10">
            <h1 className="text-4xl font-semibold tracking-tighter p-4 ">
              What We Test
            </h1>
            <p className="text-lg text-center max-w-[900px] my-4">
              We test your system, application, or network for potential
              security breaches and vulnerabilities. We ensure that your
              business-critical data stays beyond the reach of hackers.
            </p>
            <div
              className="items mt-10 bg-white  text-black p-5 rounded-lg cursor-pointer hover-card"
              onMouseMove={(e) => handleHover(e)}
            >
              <div className="hover-el"></div>
              <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12">
                {servicesMin.map((service, index) => (
                  <li
                    key={index}
                    className="flex flex-col gap-2 items-center w-[90px] text-center"
                  >
                    <span
                      className={`${
                        "item-" + index
                      } flex flex-col items-center sprite-icon`}
                    ></span>
                    <p className="font-semibold">{service}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
