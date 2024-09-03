"use client";

import { cn } from "../../@/lib/utils";
import { AnimatedList } from "../../@/components/magicui/animated-list";
import "../globals.css"

export function AnimatedListDemo({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col p-6 overflow-hidden rounded-lg border bg-background md:shadow-xl",
        className,
      )}
    >
      <AnimatedList>
      <div className="border-b-2 pb-4 relative">
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
                      <div className="border-b-2 py-4 relative">
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
                      <div className="pt-4 relative">
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
      </AnimatedList>
    </div>
  );
}
