import styled from "styled-components";
import { Title } from "../../Title";
import { BackButton } from "./BackButton";

interface Props {
  onBack: () => void;
  off?: boolean;
}

export const Header = ({ onBack, off }: Props) => {
  return (
    <StyledHeader className="flex items-center justify-between ">
      <div className="flex items-center">
        <BackButton onBack={onBack} />
        <Title
          title={`${off ? "Списання" : "Продаж"} товару`}
          className="!mb-0"
        />
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  margin: 8px 0 10px;
`;
