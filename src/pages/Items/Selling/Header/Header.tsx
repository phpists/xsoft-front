import styled from "styled-components";
import { Title } from "../../Title";
import { Actions } from "./Actions/Actions";
import { BackButton } from "./BackButton";

interface Props {
  off?: boolean;
  onBack: () => void;
}

export const Header = ({ off, onBack }: Props) => {
  return (
    <StyledHeader className="flex items-center justify-between ">
      <div className="flex items-center">
        <BackButton onBack={onBack} />
        <Title
          title={off ? "Списання товару" : "Продаж товару"}
          className="!mb-0"
        />
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  margin: 8px 0 5px;
`;
