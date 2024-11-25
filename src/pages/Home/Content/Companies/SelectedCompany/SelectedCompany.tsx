import styled from "styled-components";
import { Empty } from "./Empty/Empty";

interface Props {
  selected: undefined | string;
}

export const SelectedCompany = ({ selected }: Props) => (
  <StyledSelectedCompany className={`${selected && "selected"}`}>
    {selected ? null : <Empty />}
  </StyledSelectedCompany>
);

const StyledSelectedCompany = styled.div`
  &.selected {
    background: #ffffff;
    border-radius: 16px;
  }
`;
