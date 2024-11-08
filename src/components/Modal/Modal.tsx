import { ReactNode } from "react";
import styled from "styled-components";
import { CloseButton } from "./CloseButton";

interface Props {
  onClose: () => void;
  children: ReactNode;
}

export const Modal = ({ onClose, children }: Props) => (
  <StyledModal>
    <div className="modal-content">
      <CloseButton onClose={onClose} />
      {children}
    </div>
    <div className="overlay" onClick={onClose}></div>
  </StyledModal>
);

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #11111166;
  backdrop-filter: blur(6px);
  z-index: 30;
  display: flex;
  align-items: center;
  justify-content: center;
  .overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 20;
  }
  .modal-content {
    background: #ffffff;
    border-radius: 8px;
    padding: 24px;
    width: 340px;
    position: relative;
    z-index: 31;
  }
`;
