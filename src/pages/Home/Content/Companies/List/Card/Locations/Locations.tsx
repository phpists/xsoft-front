import styled from "styled-components";
import { Label } from "./Label";
import { Select } from "../../../../../../../components/Select/Select";

export const Locations = () => (
  <StyledLocations>
    <Label />
    <Select
      value="1"
      options={[
        {
          title: "вулиця Івана Мазепи, 17, Дрогобич, Львівська область, 82100",
          value: "1",
        },
        {
          title: "вулиця Івана Мазепи, 17, Дрогобич, Львівська область, 82100",
          value: "2",
        },
      ]}
      className="!h-[44px]"
      hideArrow
      dropdownTop
      showCount
    />
  </StyledLocations>
);

const StyledLocations = styled.div`
  padding: 22px 14px;
`;
