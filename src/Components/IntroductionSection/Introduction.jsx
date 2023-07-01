import React from "react";
import Typewriter from "typewriter-effect";

const Introduction = () => {
  
  return (
    <section id="introduction">
      <div className="bg-[url(https://leatherbangladesh.com.bd/wp-content/uploads/2015/09/slider_landing_01.jpg)] min-h-[500px] h-screen w-full bg-cover flex justify-center items-center bg-slate-300 bg-blend-multiply">
        <div className="text-white font-Inter text-center space-y-4">
          <h1 className="text-2xl border-b-2 border-yellow-500 w-fit mx-auto tracking-tighter">
            Welcome
          </h1>
          <h2 className="tracking-tighter text-4xl">Mohaiminur Rahman Mukta</h2>
          <h3 className="text-2xl flex justify-center gap-3">
            <span>I am</span>
            <span className="text-yellow-500">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("React JS Developer")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Front-End Website Developer")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("MERN stack Developer")
                    .pauseFor(1000)
                    .start()
                }}
              />
            </span>
          </h3>
          <a href='https://drive.google.com/uc?export=download&id=1_eOTGDDuZsdh89FbaNoDT-gM-8csHzKN' className="px-5 inline-block py-2 border text-xs rounded-md shadow-sm">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
