import { BiTrash } from "react-icons/bi";
import styled from "styled-components";

export const Header = () => (
  <StyledHeader className="flex items-center justify-between">
    <span>Філія </span>
    <button>
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
