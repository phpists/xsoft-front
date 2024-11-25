import { BiPencil } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

interface Props {
  id: number;
}

export const EditButton = ({ id }: Props) => (
  <StyledEditButton to={`/company/${id}`} onClick={(e) => e.stopPropagation()}>
    <BiPencil size={20} />
  </StyledEditButton>
);

const StyledEditButton = styled(NavLink)`
  position: absolute;
  top: 0;
  right: 0;
  padding: 14px;
`;
