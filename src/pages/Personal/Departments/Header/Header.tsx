import styled from "styled-components";
import { Title } from "../../Title";
import { Actions } from "./Actions/Actions";

export const Header = () => {
  return (
    <StyledHeader className="flex items-center justify-between">
      <div className="flex items-center">
        <Title title="Відділи" />
      </div>
      <Actions />
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  margin-bottom: 18px;
`;
