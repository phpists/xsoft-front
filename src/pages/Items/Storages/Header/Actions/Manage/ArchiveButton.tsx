import { BiArchive } from "react-icons/bi";
import styled from "styled-components";

export const ArchiveButton = () => (
  <StyledArchiveButton className="flex items-center justify-center">
    <BiArchive size={20} />
  </StyledArchiveButton>
);

const StyledArchiveButton = styled.button`
  width: 40px;
  height: 34px;
  border-radius: 4px;
  background: #ffffff;
  transition: all 0.3s;
  path: {
    fill: #737373;
  }
  &:hover {
    background: #000;
    color: #fff;
    path: {
      fill: #fff;
    }
  }
`;
