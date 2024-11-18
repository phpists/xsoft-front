import styled from "styled-components";
import { Modal } from "./Modal/Modal";

interface Props {
  title: string;
  subtitle: string;
  submitText: string;
  onClose: () => void;
  onSubmit: () => void;
}

export const Confirm = ({
  title,
  subtitle,
  submitText,
  onClose,
  onSubmit,
}: Props) => (
  <StyledConfirm>
    <Modal onClose={onClose}>
      <div>
        <div className="title">{title}</div>
        <div className="subtitle">{subtitle}</div>
        <button className="submit-btn" onClick={onSubmit}>
          {submitText}
        </button>
      </div>
    </Modal>
  </StyledConfirm>
);

const StyledConfirm = styled.div`
  .title {
    font-size: 14px;
    font-weight: 700;
    line-height: 19.6px;
    text-align: center;
    text-align: center;
    margin-bottom: 14px;
  }
  .subtitle {
    font-size: 14px;
    font-weight: 400;
    line-height: 19.6px;
    text-align: center;
    margin-bottom: 14px;
    color: #737373;
  }
  .submit-btn {
    display: block;
    padding: 8px 14px;
    border-radius: 8px;
    background: #d92d20;
    font-size: 12px;
    font-weight: 500;
    line-height: 16.8px;
    letter-spacing: 0.02em;
    color: #ffffff;
    margin: 0 auto;
  }
`;
