import { ExperienceNodeData } from "@/utils/interfaces";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  Image,
  Icon,
} from "@chakra-ui/react";
import Marquee from "react-fast-marquee";
import { PinContainer } from "@/components/ui/3d-pin";

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
          <div className="w-full flex justify-center ">
            <div className="absolute top-[12.5rem]">
              <PinContainer
                title="/zeroxgaming.com"
                href="https://www.zeroxgaming.com/"
              >
                <div className="flex basis-full flex-col p-4 tracking-tight text-accent/50 sm:basis-1/2 w-[30rem] gap-3 ">
                  <div className="flex flex-col">
                    <h3 className="max-w-xs  !m-0 font-bold  text-base text-accent">
                      {data.place}
                    </h3>
                    <p className="max-w-xs  !m-0 font-semibold text-base text-primary">
                      {data.role}
                    </p>
                  </div>
                  <div className="text-base !m-0 !p-0 font-normal">
                    <span className="text-primary ">{data.description}</span>
                  </div>
                  <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                  <div className="flex flex-col gap-10">
                    <Image src={data.img} className="rounded" />
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
