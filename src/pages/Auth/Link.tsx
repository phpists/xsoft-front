import { NavLink } from "react-router-dom";
import styled from "styled-components";

interface Props {
  title: string;
  link: string;
}

export const Link = ({ title, link }: Props) => (
  <StyledLink to={link}>{title}</StyledLink>
);

const StyledLink = styled(NavLink)`
  font-size: 12px;
  font-weight: 400;
  line-height: 16.8px;
  letter-spacing: 0.02em;
  text-align: left;
  color: #989898;
  transition: all 0.3s;
  &:hover {
    color: #0095f6;
  }
`;
