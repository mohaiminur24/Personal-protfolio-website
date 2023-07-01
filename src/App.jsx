import React from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import imgMe from "../public/MohaiMinur_transparentBackground.png";
import Introduction from "./Components/IntroductionSection/Introduction";
import { FaHome, FaUserCircle, FaBuffer } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import { BiSolidContact } from "react-icons/bi";
import AboutMe from "./Components/AboutME/AboutMe";
import { GiSkills } from "react-icons/gi";
import Skill from "./Components/SkillSection/Skill";

function App() {
  const menubar = (
    <>
      <li className="px-5 rounded-md py-1 shadow-sm hover:bg-slate-200 flex gap-2 justify-start items-center">
        <FaHome className="text-lg" />
        <a className="tracking-tighter" href="#introduction">
          Introducation
        </a>
      </li>
      <li className="flex gap-2 justify-start items-center px-5 rounded-md py-1 shadow-sm hover:bg-slate-200">
        <FaUserCircle className="text-lg" />
        <a className="tracking-tighter" href="#aboutme">
          About ME
        </a>
      </li>
      <li className="flex gap-2 justify-start items-center px-5 rounded-md py-1 shadow-sm hover:bg-slate-200">
        <FaBuffer className="text-lg" />
        <a className="tracking-tighter" href="#skill">
          Skill
        </a>
      </li>
      <li className="flex gap-2 justify-start items-center px-5 rounded-md py-1 shadow-sm hover:bg-slate-200">
        <GiSkills className="text-lg" />
        <a className="tracking-tighter" href="#Project">
          Project
        </a>
      </li>
      <li className="flex gap-2 justify-start items-center px-5 rounded-md py-1 shadow-sm hover:bg-slate-200">
        <PiStudentFill className="text-lg" />
        <a className="tracking-tighter" href="#Education">
          Education
        </a>
      </li>
      <li className="flex gap-2 justify-start items-center px-5 rounded-md py-1 shadow-sm hover:bg-slate-200">
        <BiSolidContact className="text-lg" />
        <a className="tracking-tighter" href="#contact">
          Contact with me
        </a>
      </li>
    </>
  );
  return (
    <>
      <div className="drawer font-Inter">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content bg-slate-100 scroll-smooth">
          <Introduction />
          <AboutMe/>
          <Skill/>

          <label
            htmlFor="my-drawer"
            className="px-4 py-2 border top-1 right-1 bg-slate-500 bg-opacity-75 rounded-md shadow-md fixed z-50"
          >
            <HiMenuAlt3 className="text-2xl text-white" />
          </label>
        </div>
        <div className="drawer-side h-full">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="p-4 w-80 h-full bg-slate-100 text-base-content">
            <img
              className="w-3/5 mx-auto rounded-md "
              src={imgMe}
              alt="MohaiMinur Rahman Mukta"
            />
            <h1 className="text-center  text-xs mb-5 mt-1 font-Cinzel ">
              Front-end website developer(React js)
            </h1>
            <div className="space-y-2">{menubar}</div>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
