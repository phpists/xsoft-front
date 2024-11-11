import styled from "styled-components";
import { Header } from "./Header/Header";
import { MainInfo } from "./MainInfo/MainInfo";
import { Divider } from "../Divider";
import { Category } from "./Category/Category";
import { Selling } from "./Selling/Selling";
import { Materials } from "./Materials";
import { Availability } from "./Availability";
import { Files } from "../../../../components/Files/Files";

export const Information = () => (
  <StyledInformation>
    <Header />
    <MainInfo />
    <Divider />
    <Category />
    <Divider />
    <Selling />
    <Divider />
    <Materials />
    <Divider />
    <Availability />
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
