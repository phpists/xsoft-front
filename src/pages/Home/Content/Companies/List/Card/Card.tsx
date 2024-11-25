import styled from "styled-components";
import { Header } from "./Header/Header";
import { Locations } from "./Locations/Locations";

interface Props {
  selected: boolean;
  onSelect: () => void;
  title: string;
  category?: string;
  color: string;
  locations: string[];
  id: number;
}

export const Card = ({
  selected,
  onSelect,
  title,
  category,
  color,
  locations,
  id,
}: Props) => (
  <StyledCard onClick={onSelect} className={`${selected && "selected"}`}>
    <Header title={title} category={category} color={color} id={id} />
    <Locations locations={locations} />
  </StyledCard>
);

const StyledCard = styled.div`
  border: 1px solid #dbdbdb;
  border-radius: 16px;
  height: 100%;
  position: relative;
  cursor: pointer;
  &.selected {
    border: 1px solid #111111;
  }
`;
