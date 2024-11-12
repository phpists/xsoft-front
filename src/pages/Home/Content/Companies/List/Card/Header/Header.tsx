import styled from "styled-components";
import { Avatar } from "./Avatar";
import { Title } from "./Title";
import { Type } from "./Type";
import { EditButton } from "./EditButton";

export const Header = () => (
  <StyledHeader className="flex items-center gap-3.5">
    <Avatar />
    <div>
      <Title />
      <Type />
    </div>
    <EditButton />
  </StyledHeader>
);

const StyledHeader = styled.div`
  padding: 14px 14px 22px;
  border-bottom: 1px solid #dbdbdb;
`;
