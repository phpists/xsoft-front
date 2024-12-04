import styled from "styled-components";
import { BiPlus } from "react-icons/bi";
import { Button } from "../../../../components/Button";

interface Props {
  onClick: () => void;
}

export const AddButton = ({ onClick }: Props) => (
  <StyledAddButton onClick={onClick}>
    <Button title="Новий продаж" Icon={<BiPlus />} />
  </StyledAddButton>
);

const StyledAddButton = styled.button`
  button {
    padding: 8.5px 14px;
    height: 34px;
    font-size: 12px;
    border-radius: 4px;
  }
`;
