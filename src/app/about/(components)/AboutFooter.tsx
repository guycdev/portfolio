import Link from "next/link";
import { JSX } from "react";
import { BsTwitterX } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";
import { PiGithubLogo } from "react-icons/pi";
import { SiDevpost } from "react-icons/si";
import { motion } from "framer-motion";

export const AboutFooter = () => {
  const iconStyles =
    "text-primary w-10 h-10 hover:text-accent cursor-none transition-all";

  const icons = [
    { link: "https://www.linkedin.com/feed/", icon: LiaLinkedin },
    { link: "https://www.linkedin.com/feed/", icon: BsTwitterX },
    { link: "https://www.linkedin.com/feed/", icon: PiGithubLogo },
    { link: "https://www.linkedin.com/feed/", icon: SiDevpost },
  ];

  const MotionLink = motion(Link);

  const iconArr = icons.map(({ link, icon: LinkIcon }, index) => (
    <MotionLink
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

  return <div className="flex my-5 justify-end gap-8">{iconArr}</div>;
};
