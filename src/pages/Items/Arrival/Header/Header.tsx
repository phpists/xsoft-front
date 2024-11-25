import styled from "styled-components";
import { Title } from "../../Title";
import { Actions } from "./Actions/Actions";
import { BackButton } from "./BackButton";

export const Header = () => {
  return (
    <StyledHeader className="flex items-center justify-between ">
      <div className="flex items-center">
        <BackButton />
        <Title title={"Прихід товару"} className="!mb-0" />
      </div>
      <Actions />
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  margin: 8px 0 5px;
`;
