import styled from "styled-components";
import { Header } from "./Header/Header";
import { Locations } from "./Locations/Locations";

interface Props {
  selected: boolean;
  onSelect: () => void;
}

export const Card = ({ selected, onSelect }: Props) => (
  <StyledCard onClick={onSelect} className={`${selected && "selected"}`}>
    <Header />
    <Locations />
  </StyledCard>
);

const StyledCard = styled.div`
  border: 1px solid #dbdbdb;
  border-radius: 16px;
  width: 272px;
  height: 100%;
  position: relative;
  cursor: pointer;
  &.selected {
    border: 1px solid #111111;
  }
`;
