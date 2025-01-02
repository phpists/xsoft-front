import styled from "styled-components";
import { Title } from "../../Title";
import { BackButton } from "./BackButton";

interface Props {
  onBack: () => void;
}

export const Header = ({ onBack }: Props) => {
  return (
    <StyledHeader className="flex items-center justify-between ">
      <div className="flex items-center">
        <BackButton onBack={onBack} />
        <Title title={"Борг"} className="!mb-0" />
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  margin: 8px 0 10px;
`;
