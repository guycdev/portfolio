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
        className="clicker h-10 w-10 text-primary transition-all hover:text-accent"
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent className="!rounded-2xl border border-neutral-500">
          <SignupFormDemo />
        </ModalContent>
      </Modal>
    </>
  );
};
