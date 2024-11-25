import { BiTrash } from "react-icons/bi";
import styled from "styled-components";

interface Props {
  onDelete: () => void;
  number: number;
}

export const Header = ({ onDelete, number }: Props) => (
  <StyledHeader className="flex items-center justify-between">
    <span>Філія {number}</span>
    <button onClick={onDelete}>
      <BiTrash size={20} />
    </button>
  </StyledHeader>
);

const StyledHeader = styled.div`
  margin-bottom: 16px;
  font-size: 16px;
  font-weight: 500;
  line-height: 22.4px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  button {
    padding: 4px;
  }
`;
