import { BiCartAlt, BiCut } from "react-icons/bi";
import styled from "styled-components";

interface Props {
  type?: string;
}

export const Type = ({ type }: Props) => (
  <StyledType className="flex items-center justify-center">
    {type ? <BiCartAlt size={20} /> : <BiCut size={20} />}
  </StyledType>
);

const StyledType = styled.div`
  height: 36px;
  width: 36px;
  border-radius: 4px;
  background: #ffffff;
  path {
    fill: #737373;
  }
`;
