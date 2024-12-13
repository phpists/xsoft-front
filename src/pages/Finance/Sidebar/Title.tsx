import { BiArrowBack } from "react-icons/bi";
import styled from "styled-components";
import { useActions } from "../../../hooks/actions";

interface Props {
  title: string;
  arrow?: boolean;
}

export const Title = ({ title, arrow }: Props) => {
  const { toggleSideMenu } = useActions();

  return (
    <StyledTitle className="flex items-center justify-between">
      {title}
      {arrow ? (
        <button onClick={() => toggleSideMenu()}>
          <BiArrowBack size={20} />
        </button>
      ) : null}
    </StyledTitle>
  );
};

const StyledTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  line-height: 25.2px;
  letter-spacing: 0.02em;
  text-align: left;
  color: #111111;
  margin-bottom: 14px;
`;
