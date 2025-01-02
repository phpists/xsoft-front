import styled from "styled-components";
import { BiPlus } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { Button } from "../../../../components/Button";

export const AddButton = () => (
  <StyledAddButton to="/items">
    <Button title="Новий продаж" Icon={<BiPlus />} />
  </StyledAddButton>
);

const StyledAddButton = styled(NavLink)`
  button {
    padding: 8.5px 14px;
    height: 34px;
    font-size: 12px;
    border-radius: 4px;
  }
`;
