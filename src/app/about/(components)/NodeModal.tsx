import { ExperienceNodeData } from "@/utils/interfaces";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  Image,
  Icon,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { PinContainer } from "@/components/ui/3dPin";
import AnimatedText from "@/components/AnimatedText";

interface NodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: ExperienceNodeData;
}

const NodeModal = ({ isOpen, onClose, data }: NodeModalProps) => {
  const MotionImage = motion(Image);

  const extractLink = (link: string) => {
    const pattern = /https?:\/\/(?:www\.)?([^\/]+)/;
    const match = link.match(pattern);
    return match ? match[1] : link;
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <a href={data.link} target="_blank">
          <div className="flex w-full justify-center ">
            <div className="absolute top-[12.5rem]">
              <PinContainer title={extractLink(data.link)} href={data.link}>
                <div className="flex justify-stretch gap-2">
                  <div className="flex w-[30rem] basis-full flex-col gap-3 p-4 tracking-tight text-accent/50 sm:basis-1/2 ">
                    <div className="flex flex-col">
                      <h3 className="!m-0  max-w-xs text-base  font-bold text-accent">
                        <AnimatedText words={data.place} />
                      </h3>
                      <p className="!m-0  max-w-xs text-base font-semibold text-primary">
                        <AnimatedText words={data.role} />
                      </p>
                    </div>
                    <div className="space-y-1">
                      {data.bullets &&
                        data.bullets.map((bullet, index) => {
                          return (
                            <div
                              className="flex items-center gap-2"
                              key={index}
                            >
                              <div className="h-2 w-2 rounded-full bg-primary" />
                              <p className="text-secondary">
                                <AnimatedText words={bullet} />
                              </p>
                            </div>
                          );
                        })}
                    </div>
                    <div className="flex flex-col gap-10">
                      {data.img && !data.code && (
                        <MotionImage
                          src={data.img}
                          className="rounded"
                          alt="image alt"
                          initial={{ height: "0px", opacity: 0 }}
                          animate={{
                            height: "unset",
                            opacity: 1,
                            transition: { delay: 0.5, duration: 0.5 },
                          }}
                        />
                      )}
                      <motion.div
                        initial={{
                          opacity: 0,
                        }}
                        animate={{
                          opacity: 1,
                          transition: {
                            delay: 0.33,
                            duration: 0.5,
                          },
                        }}
                      >
                        <Marquee autoFill>
                          {data.stack.map((icon, index) => (
                            <Icon
                              key={index}
                              as={icon.icon}
                              boxSize={12}
                              mx={8}
                            />
                          ))}
                        </Marquee>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </PinContainer>
            </div>
          </div>
        </a>
      </ModalContent>
    </Modal>
  );
};

export default NodeModal;
