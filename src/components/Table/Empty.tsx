import { BiLoader } from "react-icons/bi";
import styled from "styled-components";

export const Empty = () => (
  <StyledEmpty className="flex items-center justify-center">Пусто</StyledEmpty>
);

const StyledEmpty = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: #fff;
  font-size: 18px;
  font-weight: 400;
  line-height: 22.4px;
  text-align: center;
  color: #737373;
  height: 100%;
`;
