import styled from "styled-components";
import { Label } from "./Label";
import { Select } from "../../../../../components/Select/Select";
import { ILocation } from "../../Content";

interface Props {
  locations: ILocation[];
}

export const Locations = ({ locations }: Props) => (
  <StyledLocations>
    <Label />
    <Select
      value={locations?.[0]?.title}
      options={locations.map(({ title }) => ({ title, value: title }))}
      className="!h-[44px] bg-white"
      hideArrow
      showCount
    />
  </StyledLocations>
);

const StyledLocations = styled.div`
  padding: 14px;
  background: #efefef;
  border-radius: 8px;
  margin-bottom: 14px;
`;
