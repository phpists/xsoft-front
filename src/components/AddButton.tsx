import styled from "styled-components";
import { BiPlus } from "react-icons/bi";

interface Props {
  title: string;
  onClick?: () => void;
  error?: boolean;
}

export const AddButton = ({ title, onClick, error }: Props) => (
  <StyledAddButton
    className={`flex items-center gap-1 ${error && "error"}`}
    onClick={onClick}
  >
    <BiPlus size={14} />
    {title}
  </StyledAddButton>
);

const StyledAddButton = styled.div`
  font-size: 12px;
  font-weight: 700;
  line-height: 16.8px;
  letter-spacing: 0.02em;
  color: #0095f6;
  width: max-content;
  cursor: pointer;
  path {
    fill: #0095f6;
  }
  &.error {
    color: #d92d20;
    path {
      fill: #d92d20;
    }
  }
`;
