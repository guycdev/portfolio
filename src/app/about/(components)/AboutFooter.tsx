import { JSX } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsTwitterX } from "react-icons/bs";
import { PiGithubLogo } from "react-icons/pi";
import { SiDevpost } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";
import { Tooltip } from "@chakra-ui/react";

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
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/feed/",
      icon: FaLinkedin,
    },
    {
      label: "Twitter",
      link: "https://www.linkedin.com/feed/",
      icon: BsTwitterX,
    },
    {
      label: "GitHub",
      link: "https://www.linkedin.com/feed/",
      icon: PiGithubLogo,
    },
    {
      label: "DevPost",
      link: "https://www.linkedin.com/feed/",
      icon: SiDevpost,
    },
    {
      label: "Resume",
      link: "https://www.linkedin.com/feed/",
      icon: IoDocumentTextSharp,
    },
  ];

  const MotionLink = motion(Link);

  const iconArr = icons.map(({ link, icon: LinkIcon, label }, index) => (
    <Tooltip label={label} placement="top" className="bg-primary">
      <MotionLink
        key={link + index}
        href={link}
        variants={childVariants}
        className="flex items-center"
        target="_blank"
      >
        <LinkIcon className={iconStyles} />
      </MotionLink>
    </Tooltip>
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
