import styled from "styled-components";
import { Label } from "./Label";
import { Select } from "../../../../../components/Select/Select";

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
