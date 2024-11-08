import styled from "styled-components";
import { Header } from "./Header/Header";
import { MainInfo } from "./MainInfo/MainInfo";
import { Button } from "../../../../components/Button";
import { Files } from "../../../../components/Files/Files";
import { Divider } from "../Divider";

export const Information = () => (
  <StyledInformation>
    <Header />
    <MainInfo />
    <Divider />
    <Files />
    <Button title="Зберегти зміни" className="!w-[155px] !ml-auto" />
  </StyledInformation>
);

const StyledInformation = styled.div`
  background: #fff;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 34px;
`;
