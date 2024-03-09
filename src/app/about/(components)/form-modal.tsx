import { BiMailSend } from "react-icons/bi";
import { SignupFormDemo } from "./form";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const childVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const FormModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <motion.div
        className="clickable group relative flex h-fit w-fit items-center overflow-hidden"
        variants={childVariants}
      >
        <BiMailSend
          onClick={onOpen}
          className="pear h-10 w-10 text-primary transition-all hover:text-accent"
        />
        <span className="relative bottom-3 right-2 flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary  opacity-75 transition-all duration-300 group-hover:scale-125 group-hover:bg-accent"></span>
          <span className="relative inline-flex h-3 w-3 rounded-full bg-secondary transition-all duration-300 group-hover:scale-125 group-hover:bg-accent"></span>
        </span>
      </motion.div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent className="!rounded-2xl border border-neutral-500">
          <SignupFormDemo />
        </ModalContent>
      </Modal>
    </>
  );
};
