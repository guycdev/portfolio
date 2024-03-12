import { JSX } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsTwitterX } from "react-icons/bs";
import { PiGithubLogo } from "react-icons/pi";
import { SiDevpost } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

// Define animation variants for the parent
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

// Define animation variants for the children
const childVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const AboutFooter = ({
  children,
  iconStyles,
}: {
  children: JSX.Element;
  iconStyles: string;
}) => {
  const icons = [
    { link: "https://www.linkedin.com/feed/", icon: FaLinkedin },
    { link: "https://www.linkedin.com/feed/", icon: BsTwitterX },
    { link: "https://www.linkedin.com/feed/", icon: PiGithubLogo },
    { link: "https://www.linkedin.com/feed/", icon: SiDevpost },
  ];

  const MotionLink = motion(Link);

  const iconArr = icons.map(({ link, icon: LinkIcon }, index) => (
    <MotionLink
      key={link + index}
      href={link}
      variants={childVariants}
      className="flex items-center"
      target="_blank"
    >
      <LinkIcon className={iconStyles} />
    </MotionLink>
  ));

  return (
    <motion.div
      className="3xl:gap-5 flex gap-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {iconArr}
      {children}
    </motion.div>
  );
};
