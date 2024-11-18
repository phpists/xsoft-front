import { BiLoader } from "react-icons/bi";
import styled from "styled-components";

export const Loading = () => (
  <StyledLoading className="flex items-center justify-center">
    <BiLoader size={40} className="animate-spin " />
  </StyledLoading>
);

const StyledLoading = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: #fff;
  svg {
    animation-duration: 2s;
  }
`;
