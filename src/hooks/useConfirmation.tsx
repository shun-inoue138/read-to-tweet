import { useState } from "react";
import Button from "src/components/Button";
import OutlineButton from "src/components/OutlineButton";
import { useModal } from "./useModal";

export type MyDialogProps = {
  onClose: (value: string) => void;
  question: string;
};

export const useConfirmationModal = () => {
  const { MyModal, openModal, closeModal } = useModal();
  const [modalConfig, setModalConfig] = useState<MyDialogProps | undefined>();

  const Confirmation = (props: MyDialogProps) => {
    const { onClose, question } = props;

    return (
      <MyModal>
        <div className="p-9">
          <p className="mb-8 text-2xl font-mono">{question}</p>
          <ul className="flex gap-20   justify-center">
            <li>
              <OutlineButton
                buttonColor="red"
                onClick={() => {
                  onClose("yes");
                  closeModal();
                }}
              >
                YES
              </OutlineButton>
            </li>
            <li>
              <OutlineButton
                buttonColor="blue"
                onClick={() => {
                  onClose("no");
                  closeModal();
                }}
              >
                NO
              </OutlineButton>
            </li>
          </ul>
        </div>
      </MyModal>
    );
  };

  return {
    Confirmation,
    openConfirmationModal: openModal,
    modalConfig,
    setModalConfig,
  };
};
