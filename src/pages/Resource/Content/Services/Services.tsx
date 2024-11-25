import styled from "styled-components";
import { SectionTitle } from "../../../../components/SectionTitle";
import { Input } from "../../../../components/Input/Input";
import { Service } from "./Service/Service";
import { Divider } from "../Divider";
import { Files } from "../../../../components/Files/Files";
import { Button } from "../../../../components/Button";

export const Services = () => (
  <StyledInformation>
    <SectionTitle title="Послуга" />
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
