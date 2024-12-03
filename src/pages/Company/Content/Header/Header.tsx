import styled from "styled-components";
import { BackButton } from "./BackButton";
import { Title } from "./Title";
import { Actions } from "./Actions/Actions";
import { useParams } from "react-router-dom";

interface Props {
  isMine: boolean;
}

export const Header = ({ isMine }: Props) => {
  const { id } = useParams();

  return (
    <StyledHeader className="flex items-center justify-between">
      <div className="flex items-center gap-6">
        <BackButton />
        <Title />
      </div>
      {id && isMine ? <Actions /> : null}
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  margin-bottom: 12px;
`;
