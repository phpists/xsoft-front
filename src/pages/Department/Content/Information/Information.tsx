import styled from "styled-components";
import { MainInfo } from "./MainInfo/MainInfo";
import { Divider } from "../Divider";
import { Resources } from "./Resources";
import { Objects } from "./Objects";
import { Header } from "./Header/Header";
import { Personal } from "./Personal/Personal";

export const Information = () => (
  <StyledInformation>
    <Header />
    <MainInfo />
    <Divider />
    <Resources />
    <Divider />
    <Objects />
    <Divider />
    <Personal />
  </StyledInformation>
);

const StyledInformation = styled.div`
  background: #fff;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 34px;
  border-radius: 0 0 16px 0;
`;
