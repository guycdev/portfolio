import Link from "next/link";
import { JSX } from "react";
import { BsTwitterX } from "react-icons/bs";
import { PiGithubLogo } from "react-icons/pi";
import { SiDevpost } from "react-icons/si";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";

export const AboutFooter = () => {
  const iconStyles =
    "text-primary w-8 h-8 hover:text-accent cursor-none clickable transition-all hover:scale-110 duration-300";

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
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          delay: index - index * 0.5,
        },
      }}
    >
      <LinkIcon className={iconStyles} />
    </MotionLink>
  ));

  return <div className="my-5 flex justify-end gap-8">{iconArr}</div>;
};
