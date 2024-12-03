import { BiZoomIn } from "react-icons/bi";
import styled from "styled-components";
import { Dropdown } from "./Dropdown";

export const Zoom = () => {
  return (
    <StyledZoom>
      <BiZoomIn size={20} />
      <Dropdown />
    </StyledZoom>
  );
};

const StyledZoom = styled.button`
  padding: 10px 0;
  position: relative;
  .dropdown {
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s;
  }
  &:focus {
    .dropdown {
      opacity: 1;
      visibility: visible;
    }
  }
`;
