import styled from "styled-components";
import { BiPlus } from "react-icons/bi";
import { Button } from "../../../../../components/Button";
import { NavLink } from "react-router-dom";

export const AddButton = () => (
  <StyledAddButton to="/client">
    <Button title="Додати клієнта" Icon={<BiPlus />} />
  </StyledAddButton>
);

const StyledAddButton = styled(NavLink)`
  button {
    padding: 13px 14px;
    height: 40px;
    font-size: 12px;
  }
`;
