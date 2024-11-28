import { motion } from "framer-motion";

import { styles } from "../../constants/styles";
import { ComputersCanvas } from "../canvas";

const Hero = () => {
  return (
    <section className={`relative mx-auto md:h-screen w-full`}>
      <div
        className={`absolute inset-0 top-[120px] mx-auto max-w-7xl ${styles.paddingX} flex flex-col items-start gap-5`}
      >
        

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            We're Glad You're Here! <span className="text-[#6f6f6f]">Explore</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2 text-base`}>
            IT'S NOT JUST A WEBSITE-IT'S THE ESSENCE<br></br>OF OUR PASSION , PURPOSE<br/>AND CREATIVITY.
          </p>
        </div>
        <div className=" w-full flex xs:hidden justify-center">
        <a href="#about">
          <div className="border-secondary flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 p-2">
            <motion.div
              animate={{
                y: [0, 27, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="bg-secondary mb-1 h-3 w-3 rounded-full"
            />
          </div>
        </a>
      </div>
      </div>

      <ComputersCanvas />

      <div className="xs:bottom-10 absolute xs:flex hidden w-full items-center justify-center">
        <a href="#about">
          <div className="border-secondary flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 p-2">
            <motion.div
              animate={{
                y: [0, 27, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="bg-secondary mb-1 h-3 w-3 rounded-full"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
