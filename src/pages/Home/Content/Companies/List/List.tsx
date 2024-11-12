import styled from "styled-components";
import { Card } from "./Card/Card";

interface Props {
  selected: undefined | number;
  onSelect: (id: undefined | number) => void;
}

export const List = ({ selected, onSelect }: Props) => (
  <StyledList className="flex items-center gap-3.5">
    <Card selected={selected === 1} onSelect={() => onSelect(1)} />
  </StyledList>
);

const StyledList = styled.div`
  border-radius: 16px;
  padding: 14px;
  background: #fff;
`;
