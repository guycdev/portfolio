import { BiMailSend } from "react-icons/bi";
import { SignupFormDemo } from "./form";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
} from "@chakra-ui/react";

export const FormModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <BiMailSend
        onClick={onOpen}
        className="text-primary w-10 h-10 hover:text-accent clicker transition-all"
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent className="border border-neutral-500 !rounded-2xl">
          <SignupFormDemo />
        </ModalContent>
      </Modal>
    </>
  );
};
