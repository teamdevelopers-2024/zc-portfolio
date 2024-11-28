import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { TProject } from "../../types";

const ProjectCard: React.FC<{ index: number } & TProject> = ({
  index,
  name,
  description,
  tags,
  image,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      {/* Tilt component with glare effect */}
      <Tilt
        glareEnable
        glareColor="#aaa6c3"
        glarePosition="all"
        glareBorderRadius="1rem"
        tiltEnable
        tiltMaxAngleX={30}
        tiltMaxAngleY={30}
      >
        <div className="bg-tertiary w-auto rounded-2xl p-5">
          {/* Card Image */}
          <div className="relative h-[230px] justify-center flex">
            <img
              src={image}
              alt={name}
              className={`h-full w-auto rounded-2xl object-scale-down`}
            />
            {/* <div className="card-img_hover absolute inset-0 m-3 flex justify-end">
              <div
                onClick={() => window.open(sourceCodeLink, "_blank")}
                className="black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
              >
                <img
                  src={github}
                  alt="github"
                  className="h-1/2 w-1/2 object-contain"
                />
              </div>
            </div> */}
          </div>
          {/* Card Content */}
          <div className="mt-5 w-full">
            <h3 className="w-full lg:text-md text-md md:text-md xl:text-xl font-bold text-white">{name}</h3>
            <p className="text-secondary mt-2 text-[14px] text-justify">{description}</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2 ">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};


const Works = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.works} />

      <div className="flex w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary mt-3 max-w-3xl text-[17px] leading-[30px]"
        >
          {config.sections.works.content}
        </motion.p>
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 gap-x-10">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
