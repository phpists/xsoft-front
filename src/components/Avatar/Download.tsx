import { BiCamera } from "react-icons/bi";
import styled from "styled-components";

export const Download = () => (
  <StyledDownload className="flex items-center justify-center">
    <BiCamera size={14} />
  </StyledDownload>
);

const StyledDownload = styled.button`
  position: absolute;
  right: -5px;
  bottom: -5px;
  width: 22px;
  height: 22px;
  border-radius: 100%;
  background: #ffffff;
  border: 2px solid #efefef;
  path {
    fill: #000;
  }
`;
