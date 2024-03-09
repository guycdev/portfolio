import { ExperienceNodeData } from "@/utils/interfaces";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  Image,
  Icon,
} from "@chakra-ui/react";
import Marquee from "react-fast-marquee";
import { PinContainer } from "@/components/ui/3dPin";

interface NodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: ExperienceNodeData;
}

const NodeModal = ({ isOpen, onClose, data }: NodeModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <a href="https://www.google.com/" target="_blank">
          <div className="flex w-full justify-center ">
            <div className="absolute top-[12.5rem]">
              <PinContainer
                title="/zeroxgaming.com"
                href="https://www.zeroxgaming.com/"
              >
                <div className="flex w-[30rem] basis-full flex-col gap-3 p-4 tracking-tight text-accent/50 sm:basis-1/2 ">
                  <div className="flex flex-col">
                    <h3 className="!m-0  max-w-xs text-base  font-bold text-accent">
                      {data.place}
                    </h3>
                    <p className="!m-0  max-w-xs text-base font-semibold text-primary">
                      {data.role}
                    </p>
                  </div>
                  <div className="!m-0 !p-0 text-base font-normal">
                    <span className="text-header ">{data.description}</span>
                  </div>
                  <div className="mt-4 flex w-full flex-1 rounded-lg bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                  <div className="flex flex-col gap-10">
                    {data.img && (
                      <Image
                        src={data.img}
                        className="rounded"
                        alt="image alt"
                      />
                    )}
                    <Marquee autoFill>
                      {data.icons.map((icon, index) => (
                        <Icon key={index} as={icon} boxSize={12} mx={8} />
                      ))}
                    </Marquee>
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
