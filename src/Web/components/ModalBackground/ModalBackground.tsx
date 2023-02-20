import { ReactNode, MouseEvent } from "react";
import styles from "./ModalBackground.module.css";

type ModalBackgroundProps = {
  children?: ReactNode;
  isOpen: boolean;
  openModal: (e: MouseEvent) => void;
};

const ModalBackground = ({
  children,
  isOpen,
  openModal,
}: ModalBackgroundProps) => {
  const { modal } = styles;

  const isOpenClass = isOpen ? modal : "";

  return <div className={isOpenClass}>{children}</div>;
};

export default ModalBackground;
