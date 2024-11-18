import styled from "styled-components";
import { BiPlus } from "react-icons/bi";
import { Button } from "../../../../../components/Button";
import { NavLink } from "react-router-dom";

export const AddButton = () => (
  <StyledAddButton to="/brand">
    <Button title="Новий бренд" Icon={<BiPlus />} />
  </StyledAddButton>
);

const StyledAddButton = styled(NavLink)`
  button {
    padding: 8.5px 14px;
    height: 34px;
    font-size: 12px;
  }
`;
