import styled from "styled-components";
import { Actions } from "./Actions/Actions";
import { Title } from "../../Title";

export const Header = () => {
  return (
    <StyledHeader className="flex items-center justify-between">
      <Title title="Бренди" />
      <Actions />
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  margin-bottom: 18px;
`;
