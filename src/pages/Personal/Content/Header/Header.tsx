import styled from "styled-components";
import { BackButton } from "./BackButton";
import { Title } from "./Title";
import { Actions } from "./Actions/Actions";

export const Header = () => (
  <StyledHeader className="flex items-center justify-between">
    <div className="flex items-center gap-6">
      <BackButton />
      <Title />
    </div>
    <Actions />
  </StyledHeader>
);

const StyledHeader = styled.div`
  margin-bottom: 12px;
`;
