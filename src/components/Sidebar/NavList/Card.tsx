import { NavLink } from "react-router-dom";
import styled from "styled-components";

interface Props {
  title: string;
  link: string;
  Icon: any;
  IconActive: any;
}

export const Card = ({ title, link, Icon, IconActive }: Props) => (
  <StyledCard to={link} title={title}>
    <Icon />
    <IconActive className="active" />
    <div>{title}</div>
  </StyledCard>
);

const StyledCard = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  font-size: 9.5px;
  font-weight: 400;
  line-height: 11.2px;
  letter-spacing: 0.02em;
  text-align: center;
  color: #000000;
  padding: 4px;
  border-radius: 8px;
  transition: all 0.3s;
  div {
    opacity: 0;
    transition: all 0.3s;
    max-width: 45px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  svg {
    &.active {
      display: none;
    }
  }
  &.active,
  &:hover {
    background: #efefef;
    div {
      opacity: 1;
    }
    svg {
      display: none;
      &.active {
        display: block;
      }
    }
  }
  svg {
    width: 20px;
    height: 20px;
  }
`;
