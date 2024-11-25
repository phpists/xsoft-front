import styled from "styled-components";
import { Button } from "../../../Button";
import { Actions } from "./Actions";
import { Select } from "../../../Select/Select";

const ACTIONS_OPTIONS = [
  { title: "Обрати все", value: "all" },
  { title: "Вибрати парні", value: "count" },
  { title: "Вибрати не парні", value: "not_count" },
  { title: "Вибрати будні", value: "weekdays" },
  { title: "Вибрати вихідні", value: "weekends" },
];

interface Props {
  onClose: () => void;
  onSelectAction: (action: string) => void;
}

export const Selecting = ({ onClose, onSelectAction }: Props) => (
  <StyledSelecting className="flex items-center gap-3.5">
    <Button
      title="Вибрати всі дні"
      type="light"
      className="max-w-[145px]"
      onClick={() => onSelectAction("all")}
    />
    <Actions />
    <Button
      title="Скасувати"
      type="light"
      className="max-w-[92px]"
      onClick={onClose}
    />
    <Select
      label="Швидкий вибір"
      options={ACTIONS_OPTIONS}
      className="max-w-[145px] !h-[44px] selecting-select"
      onChange={(val) => onSelectAction(val.toString())}
    />
  </StyledSelecting>
);

const StyledSelecting = styled.div`
  .selecting-select {
    padding: 13.5px 14px;
    .label,
    .value {
      font-size: 12px;
      font-weight: 500;
      line-height: 16.8px;
      letter-spacing: 0.02em;
      color: #111111;
    }
    .dropdown {
      left: unset;
      right: 0;
      max-height: max-content;
    }
  }
`;
