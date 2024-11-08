import styled from "styled-components";
import { Color } from "./Color/Color";
import { PersonalData } from "./PersonalData/PersonalData";
import { Divider } from "../Divider";
import { Category } from "./Category";
import { Additional } from "./Additional/Additional";
import { Files } from "../../../../components/Files/Files";
import { Button } from "../../../../components/Button";

export const Profile = () => (
  <StyledProfile>
    <Color />
    <PersonalData />
    <Divider />
    <Category />
    <Divider />
    <Additional />
    <Divider />
    <Files />
    <Button title="Зберегти зміни" className="!w-[155px] ml-auto" />
  </StyledProfile>
);

const StyledProfile = styled.div`
  background: #fff;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 34px;
`;
