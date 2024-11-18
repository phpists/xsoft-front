import styled from "styled-components";
import { Header } from "./Header/Header";
import { MainInfo } from "./MainInfo/MainInfo";
import { Affiliaties } from "./Affiliaties/Affiliaties";

export const Information = () => (
  <StyledInformation>
    <Header />
    <MainInfo />
    <Affiliaties />
  </StyledInformation>
);

const StyledInformation = styled.div`
  background: #fff;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 34px;
`;
