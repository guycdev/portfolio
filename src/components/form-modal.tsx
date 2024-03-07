import { SignupFormDemo } from "./form";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";

export const FormModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButton aria-label="open contact form modal" onClick={onOpen} />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent className="border border-neutral-500 !rounded-2xl">
          <SignupFormDemo />
        </ModalContent>
      </Modal>
    </>
  );
};
