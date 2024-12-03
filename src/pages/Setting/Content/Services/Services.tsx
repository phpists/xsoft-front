import styled from "styled-components";
import { Service } from "./Service/Service";

export const Services = () => (
  <StyledInformation>
    <Service />
  </StyledInformation>
);

const StyledInformation = styled.div`
  background: #fff;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 34px;
  border-radius: 0 0 16px 0;
  .vendors-select {
    .value {
      max-width: 300px;
    }
  }
`;
