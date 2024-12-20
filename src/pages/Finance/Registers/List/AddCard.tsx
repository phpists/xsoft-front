import { BiPlusCircle } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const AddCard = () => (
  <StyledAddCard
    className="flex flex-col gap-2 items-center justify-center"
    to="/register"
  >
    <BiPlusCircle size={20} />
    <div>Нова каса</div>
  </StyledAddCard>
);

const StyledAddCard = styled(NavLink)`
  border: 1px solid #dbdbdb;
  border-radius: 16px;
  height: 100%;
  position: relative;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  line-height: 22.4px;
  text-align: left;
  color: #111111;
  padding: 20px;
  background: #fff;
  min-width: 260px;
  width: 100%;
`;
