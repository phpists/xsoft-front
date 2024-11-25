import styled from "styled-components";
import { SectionTitle } from "../../../../../components/SectionTitle";
import { Card } from "./Card";
import { AddButton } from "../../../../../components/AddButton";

export const Locations = () => (
  <StyledLocations>
    <SectionTitle title="Філія / Локація" />
    <div className="flex flex-col gap-3.5">
      <Card />
      <AddButton title="Додати філію" />
    </div>
  </StyledLocations>
);

const StyledLocations = styled.div`
  padding: 14px;
  background: #f7f7f7;
  margin-bottom: 34px;
  border-radius: 8px;
`;
