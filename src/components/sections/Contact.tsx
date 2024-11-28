import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

import { EarthCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

// Social Media Icons Data
const socialMediaIcons = [
  {
    icon: FaInstagram,
    link: "https://www.instagram.com/zeecodesolutions/",
    name: "Instagram",
    style: "relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 shadow-xl border border-gray-500",
    whileHover: {
      scale: 1.2,
      boxShadow: `0px 0px 15px 2px rgba(255, 105, 180, 0.8)`,
      transform: "translateY(-5px)",
      background: "linear-gradient(to right, #4c51bf, #ec4899)",
      transition: "background 1s ease, transform 1s ease, box-shadow 1s ease",
    },
    iconStyle: {
      fontSize: "28px", // Larger icons for a more professional look
      textShadow: "1px 1px 2px #000, 0 0 25px #fff, 0 0 5px #fff",
    },
  },
  {
    icon: FaLinkedin,
    link: "https://www.linkedin.com/company/zeecode-solutions",
    name: "LinkedIn",
    style: "relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 shadow-xl border border-gray-500",
    whileHover: {
      scale: 1.2,
      boxShadow: `0px 0px 15px 2px rgba(0, 123, 181, 0.8)`,
      transform: "translateY(-5px)",
      background: "linear-gradient(to right, #0077b5, #0e76a8)",
      transition: "background 1s ease, transform 1s ease, box-shadow 1s ease",
    },
    iconStyle: {
      fontSize: "28px",
      textShadow: "1px 1px 2px #000, 0 0 25px #fff, 0 0 5px #fff",
    },
  },
  // {
  //   icon: FaFacebook,
  //   link: "https://www.facebook.com/yourcompany",
  //   name: "Facebook",
  //   style: "relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 shadow-xl border border-gray-500",
  //   whileHover: {
  //     scale: 1.2,
  //     boxShadow: `0px 0px 15px 2px rgba(24, 119, 242, 0.8)`,
  //     transform: "translateY(-5px)",
  //     background: "linear-gradient(to right, #1877f2, #42b72a)",
  //     transition: "background 1s ease, transform 1s ease, box-shadow 1s ease",
  //   },
  //   iconStyle: {
  //     fontSize: "28px",
  //     textShadow: "1px 1px 2px #000, 0 0 25px #fff, 0 0 5px #fff",
  //   },
  // },
  {
    icon: FaTwitter,
    link: "https://x.com/ZeecodeSolution",
    name: "Twitter",
    style: "relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 shadow-xl border border-gray-500",
    whileHover: {
      scale: 1.2,
      boxShadow: `0px 0px 15px 2px rgba(29, 161, 242, 0.8)`,
      transform: "translateY(-5px)",
      background: "linear-gradient(to right, #1da1f2, #a1c4fd)",
      transition: "background 1s ease, transform 1s ease, box-shadow 1s ease",
    },
    iconStyle: {
      fontSize: "28px",
      textShadow: "1px 1px 2px #000, 0 0 25px #fff, 0 0 5px #fff",
    },
  },
  {
    icon: FaEnvelope,
    link: "mailto:zeecodesolution@gmail.com",
    name: "Email",
    style: "relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 shadow-xl border border-gray-500",
    whileHover: {
      scale: 1.2,
      boxShadow: `0px 0px 15px 2px rgba(255, 105, 180, 0.8)`,
      transform: "translateY(-5px)",
      background: "linear-gradient(to right, #4c51bf, #ec4899)",
      transition: "background 1s ease, transform 1s ease, box-shadow 1s ease",
    },
    iconStyle: {
      fontSize: "28px",
      textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
    },
  }
];

const Contact = () => {
  return (
    <div className="flex justify-between gap-16 xl:gap-24 overflow-hidden xl:mt-12 px-4 xl:px-8">
      {/* Left Section */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="bg-black-100 flex-col rounded-2xl p-8 xl:p-16 shadow-lg max-w-xl mx-auto"
      >
        {/* Title */}
        <Header useMotion={false} {...config.contact} />

        {/* Description */}
        <p className="text-lg text-gray-300 mt-4 mb-8 leading-relaxed text-justify">
          At <span className="font-semibold text-white">Zeecode Solutions</span>, we offer best-in-class services and tailored solutions designed to accelerate your success. Whether you're interested in forming a strategic partnership or have any inquiries, we're here to assist and collaborate!
        </p>

        {/* Social Media Icons */}
        <div className="flex mt-8 justify-center xl:justify-start gap-6 md:gap-8">
          {socialMediaIcons.map(({ icon: Icon, link, name, style, whileHover, iconStyle }) => (
            <motion.div
              key={name}
              className="flex flex-col items-center group w-14 md:w-16" // Standardized width for professional look
            >
              <motion.a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={style}
                whileHover={whileHover}
              >
                <Icon
                  className="transition-all duration-300 ease-in-out"
                  style={iconStyle}
                />
              </motion.a>
              {/* Text shown only on hover of the icon */}
              <motion.p
                className="mt-2 text-sm text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
                style={{ textShadow: "0 0 10px rgba(255, 255, 255, 0.8)" }}
              >
                {name}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Right Section (Earth Canvas) */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="h-[350px] md:h-auto xl:h-auto xl:flex-1 xl:max-w-[800px] mx-auto mt-8 xl:mt-0"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
