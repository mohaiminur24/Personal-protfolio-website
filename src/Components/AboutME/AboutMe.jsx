import React from "react";
import Container from "../ReUseableComponents/Container";
import imgME from "../../../public/MohaiMinur_transparentBackground.png";
import { RiFacebookFill,RiYoutubeLine,RiGithubFill,RiLinkedinFill } from "react-icons/ri";


const AboutMe = () => {
  return (
    <section id="aboutme">
      <Container>
        <h1 className="text-2xl font-inter text-center font-bold">
          Know <span className="border-b-2 border-yellow-500">Me</span> More
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-16">
          <div>
            <h1 className="text-lg font-bold">
              I am <span className="text-yellow-500">junior React js</span>{" "}
              Website Developer
            </h1>
            <div className="mt-5 space-y-2">
              <p className="text-sm font-Raleway">
                I am a junior Front-end website developer. I am an experienced
                React.js front-end developer with expertise in Express.js, JWT,
                MongoDB, and JavaScript. I can build interactive and
                user-friendly web applications, collaborate effectively with
                backend developers, and solve complex problems. My adaptability,
                strong communication skills, and proven track record make me a
                valuable asset to any team.
              </p>
              <p className="text-sm font-Raleway pb-5">
                Passionate about exploring the world and continuously expanding
                my knowledge, I thrive on combining my love for travel and
                learning new technologies. I seek out diverse cultural
                experiences that fuel my creativity and broaden my perspective.
                I aim to bring a unique perspective and a thirst for innovation
                to my work as a tech professional.
              </p>

              <div className="flex gap-5 flex-wrap">
                <a className="p-3 border-yellow-500 rounded-md shadow-sm border hover:bg-yellow-100" target="_blank" href="https://www.linkedin.com/in/font-end-website-developer/"><RiLinkedinFill/></a>
                <a className="p-3 border-yellow-500 rounded-md shadow-sm border hover:bg-yellow-100" target="_blank" href="https://github.com/DeveloperMMR"><RiGithubFill/></a>
                <a className="p-3 border-yellow-500 rounded-md shadow-sm border hover:bg-yellow-100" target="_blank" href="https://www.youtube.com/channel/UCTREYx96uQjixXpSllqzQtQ"><RiYoutubeLine/></a>
                <a className="p-3 border-yellow-500 rounded-md shadow-sm border hover:bg-yellow-100" target="_blank" href="https://web.facebook.com/developermmr/"><RiFacebookFill/></a>
              </div>
            </div>
          </div>
          <img className="w-3/5 mx-auto" src={imgME} alt="" />
        </div>
      </Container>
    </section>
  );
};

export default AboutMe;
