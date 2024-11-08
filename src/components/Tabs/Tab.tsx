import styled from "styled-components";
import { ITab } from "./Tabs";

interface Props extends ITab {
  onClick: () => void;
  active: boolean;
}

export const Tab = ({ title, Icon, onClick, active }: Props) => (
  <StyledTab
    onClick={onClick}
    className={`flex items-center justify-center gap-2 ${active && "active"}`}
  >
    <Icon />
    {title}
  </StyledTab>
);

const StyledTab = styled.button`
  font-size: 12px;
  font-weight: 400;
  line-height: 16.8px;
  letter-spacing: 0.02em;
  text-align: left;
  color: #737373;
  border-radius: 100px;
  padding: 8px;
  cursor: pointer;
  transition: all 0.3s;
  svg {
    height: 16px;
    width: 16px;
    path {
      fill: #737373;
      transition: all 0.3s;
    }
  }
  &.active,
  &:hover {
    background: #efefef;
    color: #111111;
    path {
      fill: #111111;
    }
  }
`;
