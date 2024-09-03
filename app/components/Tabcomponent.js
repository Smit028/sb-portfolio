import { useState } from "react";
import "../globals.css";
import Image from "next/image";

// ANIMATED LIST
import { cn } from "../../@/lib/utils";
import { AnimatedList } from "../../@/components/magicui/animated-list";
import { BentoCard, BentoGrid } from "../../@/components/magicui/bento-grid";
import img2 from "../assets/img2.jpeg";

function ArTabbing() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div style={{ fontFamily: "Quicksand, sans-serif" }}>
      <div className="tabs py-2 px-2 text-2xl font-bold">
        <button
          className={`${
            activeTab === 1 ? "active border-b-4 p-2" : "p-2"
          } flex-1 text-center py-2`}
          onClick={() => setActiveTab(1)}
        >
          About me
        </button>
        <button
          className={`${
            activeTab === 2 ? "active border-b-4 p-2" : "p-2"
          } flex-1 text-center py-2`}
          onClick={() => setActiveTab(2)}
        >
          Resume
        </button>
        <button
          className={`${
            activeTab === 3 ? "active border-b-4 p-2" : "p-2"
          } flex-1 text-center py-2`}
          onClick={() => setActiveTab(3)}
        >
          Work
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 1 && (
          <div>
            <div className="mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="p-6 border-r-2">
                  <h2 className="text-2xl font-extrabold">Experience</h2>
                  <div className="mx-auto">
                    <div className="grid gap-2 h-[70vh]">
                      <div className="bg-gray-100 p-2 rounded-2xl border-2 border-black relative">
                        <div className="flex justify-between items-center mb-2">
                          <span className="px-2 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full">
                            2024
                          </span>
                        </div>

                        <div>
                          <p className="text-sm text-gray-500">Team Because</p>
                          <p className="text-base font-semibold">
                            Frontend Developer Intern
                          </p>
                          <div className="flex justify-between items-center mt-6">
                            {/* <span className="text-sm font-medium text-gray-600">Nov</span> */}
                            <div className="relative flex-1 mx-2 h-2">
                              <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-400"></div>
                              </div>
                              <div className="absolute left-0 w-2.5 h-2.5 bg-[gray] rounded-full"></div>
                              <div className="absolute right-0 w-2.5 h-2.5 bg-[gray] rounded-full"></div>
                            </div>

                            {/* <span className="text-sm font-medium text-gray-600">Present</span> */}
                          </div>
                          <div className="relative flex-1 mx-2 h-2 md:pb-4">
                            <div className="absolute left-0 text-sm">Jan</div>
                            <div className="absolute right-0 text-sm">Apr</div>
                          </div>
                        </div>

                        <div className="absolute top-2 right-2">
                          <svg
                            className="h-8 w-8 text-green-500"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            {" "}
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />{" "}
                            <polyline points="22 4 12 14.01 9 11.01" />
                          </svg>
                        </div>
                      </div>

                      <div className="bg-gray-100 p-2 rounded-2xl border-2 border-black relative">
                        <div className="flex justify-between items-center mb-2">
                          <span className="px-2 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full">
                            2023-Present
                          </span>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Freelancer</p>
                          <p className="text-base font-semibold">
                            ( Full-Stack , Hosting , Cloud )
                          </p>
                        </div>
                        <div className="absolute top-2 right-2">
                          <svg
                            className="h-10 w-10 text-green-500"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            {" "}
                            <path stroke="none" d="M0 0h24v24H0z" />{" "}
                            <path d="M9 4.55a8 8 0 0 1 6 14.9m0 -4.45v5h5" />{" "}
                            <path
                              d="M11 19.95a8 8 0 0 1 -5.3 -12.8"
                              strokeDasharray=".001 4.13"
                            />
                          </svg>
                        </div>

                        <div className="flex justify-between items-center mt-6">
                          {/* <span className="text-sm font-medium text-gray-600">Nov</span> */}
                          <div className="relative flex-1 mx-2 h-2">
                            <div className="absolute inset-0 flex items-center">
                              <div className="w-full border-t border-gray-400"></div>
                            </div>
                            <div className="absolute left-0 w-2.5 h-2.5 bg-[gray] rounded-full"></div>
                            <div className="absolute right-0 w-2.5 h-2.5 bg-[gray] rounded-full"></div>
                          </div>

                          {/* <span className="text-sm font-medium text-gray-600">Present</span> */}
                        </div>
                        <div className="relative flex-1 mx-2 h-2 md:pb-4">
                          <div className="absolute left-0 text-sm">Mar</div>
                          <div className="absolute right-0 text-sm">
                            Present
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-100 p-2 rounded-2xl border-2 border-black relative">
                        <div className="flex justify-between items-center mb-2">
                          <span className="px-2 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full">
                            2019-Present
                          </span>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">
                            Ahuja Career Institute
                          </p>
                          <p className="text-base font-semibold">
                            Physics Department Head
                          </p>
                        </div>
                        <div className="absolute top-2 right-2">
                          <svg
                            className="h-10 w-10 text-green-500"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            {" "}
                            <path stroke="none" d="M0 0h24v24H0z" />{" "}
                            <path d="M9 4.55a8 8 0 0 1 6 14.9m0 -4.45v5h5" />{" "}
                            <path
                              d="M11 19.95a8 8 0 0 1 -5.3 -12.8"
                              strokeDasharray=".001 4.13"
                            />
                          </svg>
                        </div>

                        <div className="flex justify-between items-center mt-6">
                          {/* <span className="text-sm font-medium text-gray-600">Nov</span> */}
                          <div className="relative flex-1 mx-2 h-2">
                            <div className="absolute inset-0 flex items-center">
                              <div className="w-full border-t border-gray-400"></div>
                            </div>
                            <div className="absolute left-0 w-2.5 h-2.5 bg-[gray] rounded-full"></div>
                            <div className="absolute right-0 w-2.5 h-2.5 bg-[gray] rounded-full"></div>
                          </div>

                          {/* <span className="text-sm font-medium text-gray-600">Present</span> */}
                        </div>
                        <div className="relative flex-1 mx-2 h-2 md:pb-4">
                          <div className="absolute left-0 text-sm">Aug</div>
                          <div className="absolute right-0 text-sm">
                            Present
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" p-6 border-r-2 rounded-lg">
                  <div className="border-b-2">
                    <div className="pb-2 px-2 rounded-lg max-w-sm">
                      <h2 className="text-2xl font-extrabold pb-2">
                        Expertise
                      </h2>
                      <p className="text-base font-semibold">
                        Programming Languages , Frameworks/Libraries ,Version
                        Control , DevOps & Cloud Platforms , Data Structures &
                        Algorithms
                      </p>
                    </div>
                  </div>
                  <div className="border-b-2">
                    <div className="p-2 rounded-lg max-w-sm">
                      <h2 className="text-2xl font-extrabold pb-2">
                        Hardskill
                      </h2>
                      <div className="px-4">
                        <div className="bg-gray-900 rounded-3xl max-w-sm mx-auto p-4">
                          <div className="relative">
                            {/* Image section */}
                            <Image
                              src={img2} // Replace with your image path
                              alt="Workspace"
                              className="rounded-3xl w-full h-2/3 px-2 pb-2"
                            />

                            {/* Icon section */}
                            <div className="absolute bottom-2   flex -space-x-2">
                              <Image
                                src={img2}
                                alt="Ai"
                                className="w-12 h-12 rounded-full bg-yellow-500 p-1"
                              />
                              <Image
                                src={img2}
                                alt="Ps"
                                className="w-12 h-12 rounded-full bg-blue-500 p-1"
                              />
                              <Image
                                src={img2}
                                alt="Ae"
                                className="w-12 h-12 rounded-full bg-indigo-500 p-1"
                              />
                              <Image
                                src={img2}
                                alt="Id"
                                className="w-12 h-12 rounded-full bg-red-500 p-1"
                              />
                              <Image
                                src={img2}
                                alt="Procreate"
                                className="w-12 h-12 rounded-full bg-pink-500 p-1"
                              />
                              <Image
                                src={img2}
                                alt="C4D"
                                className="w-12 h-12 rounded-full bg-purple-500 p-1"
                              />
                              <Image
                                src={img2}
                                alt="C4D"
                                className="w-12 h-12 rounded-full bg-purple-500 p-1"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className="p-2 rounded-lg max-w-sm">
                      <h2 className="text-2xl font-extrabold pb-2">
                        Softskill
                      </h2>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-bold">
                          #Creativity
                        </span>
                        <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-bold">
                          #Teamwork
                        </span>
                        <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-bold">
                          #Time_Management
                        </span>
                        <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-bold">
                          #Flexibility
                        </span>
                        <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-bold">
                          #Communication
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" p-6 border-r-2 rounded-lg">
                  <h2 className="text-2xl font-extrabold">Education</h2>
                  <div className="mx-auto">
                    <div className="grid h-[80vh] md:px-4">
                      <AnimatedList>
                        <div className="relative">
                          <div className="absolute top-2 right-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              x="0px"
                              y="0px"
                              width="40"
                              height="40"
                              viewBox="0 0 48 48"
                            >
                              <path
                                fill="#545B54"
                                d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"
                              ></path>
                              <path
                                fill="#fff"
                                d="M34.586,14.586l-13.57,13.586l-5.602-5.586l-2.828,2.828l8.434,8.414l16.395-16.414L34.586,14.586z"
                              ></path>
                            </svg>
                          </div>
                          <div className="p-3 text-base bg-black  text-white rounded-3xl h-full">
                            <span className="px-2 py-1 bg-white text-black text-sm font-semibold rounded-full">
                              2019-2020
                            </span>
                            <div className="flex h-[85%] items-end">
                              <div>
                                <div className="text-xl text-[gray]">
                                  Shree Durga
                                </div>
                                <div className="text-2xl text-white">
                                  Secondary School
                                </div>
                                <div className="text-lg text-[gray]">
                                  (Pt-81 , Pr-95)
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-b-2  pb-4 relative">
                          <div className="absolute top-2 right-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              x="0px"
                              y="0px"
                              width="40"
                              height="40"
                              viewBox="0 0 48 48"
                            >
                              <path
                                fill="#545B54"
                                d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"
                              ></path>
                              <path
                                fill="#fff"
                                d="M34.586,14.586l-13.57,13.586l-5.602-5.586l-2.828,2.828l8.434,8.414l16.395-16.414L34.586,14.586z"
                              ></path>
                            </svg>
                          </div>
                          <div className="p-3 text-base bg-black  text-white rounded-3xl h-full">
                            <span className="px-2 py-1 bg-white text-black text-sm font-semibold rounded-full">
                              2020-2021
                            </span>
                            <div className="flex h-[85%] items-end">
                              <div>
                                <div className="text-xl text-[gray]">
                                  Sardar Patel High School
                                </div>
                                <div className="text-2xl text-white">
                                  Higher Secondary School
                                </div>
                                <div className="text-lg text-[gray]">
                                  (Pt-, Pr-)
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-b-2 pt-4 pb-4 relative">
                          <div className="absolute top-8 right-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              x="0px"
                              y="0px"
                              width="40"
                              height="40"
                              viewBox="0 0 48 48"
                            >
                              <path
                                fill="#545B54"
                                d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"
                              ></path>
                              <path
                                fill="#fff"
                                d="M34.586,14.586l-13.57,13.586l-5.602-5.586l-2.828,2.828l8.434,8.414l16.395-16.414L34.586,14.586z"
                              ></path>
                            </svg>
                          </div>
                          <div className="p-3 text-base bg-black  text-white rounded-3xl h-full">
                            <span className="px-2 py-1 bg-white text-black text-sm font-semibold rounded-full">
                              2021-Present
                            </span>
                            <div className="flex h-[85%] items-end">
                              <div>
                                <div className="text-xl text-[gray]">
                                  L.J. University
                                </div>
                                <div className="text-2xl text-white">
                                  Computer Science & Engineering
                                </div>
                                <div className="text-lg text-[gray]">
                                  (CGPA 8.4/10)
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </AnimatedList>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {activeTab === 2 && (
          <div>
            <BentoGrid className="lg:grid-rows-3">
              {features.map((feature) => (
                <BentoCard key={feature.name} {...feature} />
              ))}
            </BentoGrid>
          </div>
        )}
        {activeTab === 3 && (
          <div>
            <p>Content for Work tab</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ArTabbing;
