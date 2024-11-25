import styled from "styled-components";
import { Avatar } from "../Avatar/Avatar";

export const Users = () => (
  <StyledUsers className="flex items-center">
    <Avatar firstName="І" lastName="П" size={24} />
    <Avatar firstName="О" lastName="Ф" size={24} color="#9747FF" />
    <Avatar firstName="Ю" lastName="Я" size={24} color="#ED5E1E" />
  </StyledUsers>
);

const StyledUsers = styled.div`
  flex-direction: row-reverse;
  div {
    border: 1px solid #fff;
    margin-left: -10px;
  }
`;
