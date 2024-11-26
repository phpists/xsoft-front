import styled from "styled-components";
import { Header } from "./Header/Header";
import { MainInfo } from "./MainInfo/MainInfo";
import { Branches } from "./Branches/Branches";
import { Divider } from "../Divider";
import { Additional } from "./Additional";
import { Files } from "../../../../components/Files/Files";

export const Information = () => (
  <StyledInformation>
    <Header />
    <MainInfo />
    <Branches />
    <Divider />
    <Additional />
    <Divider />
    <Files />
  </StyledInformation>
);

const StyledInformation = styled.div`
  background: #fff;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 34px;
`;
