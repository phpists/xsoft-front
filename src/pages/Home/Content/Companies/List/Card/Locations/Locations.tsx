import styled from "styled-components";
import { Label } from "./Label";
import { Select } from "../../../../../../../components/Select/Select";

interface Props {
  locations: string[];
}

export const Locations = ({ locations }: Props) => (
  <StyledLocations>
    <Label />
    <Select
      value={locations?.[0]}
      options={locations?.map((l) => ({ title: l, value: l }))}
      className="!h-[44px] locations-list"
      hideArrow
      dropdownTop
      showCount
    />
  </StyledLocations>
);

const StyledLocations = styled.div`
  padding: 22px 14px;
  .locations-list {
    .value {
      max-width: calc((100svw / 4) - 124px);
    }
  }
`;
