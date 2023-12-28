import { useState } from "react";
import CV from "../assets/images/curriculum.pdf"
export default function IndexNav() {
  const [show, isShow] = useState(false);
  return (
    
    <>
      <div id="hamburger" className=" relative z-50">
        <div className="absolute">
          <div className="fixed right-[-10px] top-[50%] rotate-[270deg]">
            <div className="">
              <div className="w-full">
                <button
                  aria-label="menuButton"
                  onClick={() => {
                    isShow(!show);
                  }}
                  className="bg-primary  font-bold px-4 py-1 rounded-t-xl cursor-pointer"
                >
                  {show ? (
                    <svg
                      className="h-4"
                      height="1em"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"></path>
                      </g>
                    </svg>
                  ) : (
                    <svg
                      className="h-4"
                      height="1em"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path d="M3 19h18a1.002 1.002 0 0 0 .823-1.569l-9-13c-.373-.539-1.271-.539-1.645 0l-9 13A.999.999 0 0 0 3 19z"></path>
                      </g>
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
        {show ? (
          <div className=" overflow-y-none  transition-transform ease-in-out delay-150">
            <div
              className={` animate-menu -z-10 top-[0px] left-[0px]  fixed bg-primary  h-[100%] custom w-[100%]`}
            >
              <div id="backMenuBackground" className=" h-[100%] custom w-[100%] flex items-center justify-center">
                <ul className="flex flex-col text-4xl font-bold text-center space-y-10">
                  <a id="backMenuButtons" onClick={() => isShow(false)} aria-label="Home" href="/">
                    <h3 className="bg-gradient-to-r from-[#45cafc] to-[#616161] inline-block text-transparent bg-clip-text">Home</h3>
                  </a>
                  <a id="backMenuButtons"
                    onClick={() => isShow(false)}
                    aria-label="about"
                    href="/#about"
                  ><h3 className="bg-gradient-to-r from-[#45cafc] to-[#616161] inline-block text-transparent bg-clip-text">
                    About</h3>
                  </a>
                  <a id="backMenuButtons"
                    onClick={() => isShow(false)}
                    aria-label="projects"
                    href="/projects"
                  ><h3 className="bg-gradient-to-r from-[#45cafc] to-[#616161] inline-block text-transparent bg-clip-text">
                    Projects</h3>

                  </a>
                  <a id="backMenuButtons" href={CV} download><h3 className="bg-gradient-to-r from-[#45cafc] to-[#616161] inline-block text-transparent bg-clip-text"> Download CV</h3></a>
                </ul>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
