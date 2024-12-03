import styled from "styled-components";
import { Modal } from "../Modal/Modal";
import { Input } from "../Input/Input";
import { AddButton } from "../AddButton";
import { Button } from "../Button";

interface Props {
  onClose: () => void;
}

export const ScheduleModal = ({ onClose }: Props) => (
  <StyledScheduleModal>
    <Modal onClose={onClose}>
      <div className="title">Змінити графік роботи</div>
      <div className="date">
        <span>На дату </span>
        <div>12 квітня</div>
      </div>
      <div className="flex items-center gap-3.5 mb-6">
        <Input label="Початок" time labelActive />
        <Input label="Кінець" time labelActive />
      </div>
      <AddButton title="Додати перерву" />
      <Button title="Зберегти" className="mt-6" />
    </Modal>
  </StyledScheduleModal>
);

const StyledScheduleModal = styled.div`
  .title {
    font-size: 18px;
    font-weight: 600;
    line-height: 25.2px;
    letter-spacing: 0.02em;
    text-align: left;
    margin-bottom: 14px;
  }
  .date {
    font-size: 14px;
    font-weight: 400;
    line-height: 19.6px;
    margin-bottom: 24px;
    span {
      font-size: 12px;
      line-height: 16.8px;
      letter-spacing: 0.02em;
      color: #737373;
      margin-bottom: 2px;
    }
  }
`;
