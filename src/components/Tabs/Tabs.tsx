import styled from "styled-components";
import { Tab } from "./Tab";

export interface ITab {
  title: string;
  Icon: any;
}

interface Props {
  tabs: ITab[];
  active: number;
  onChange: (tab: number) => void;
}

export const Tabs = ({ tabs, active, onChange }: Props) => (
  <StyledTabs tabsCount={tabs?.length}>
    {tabs?.map(({ title, Icon }, i) => (
      <Tab
        key={i}
        title={title}
        Icon={Icon}
        active={active === i}
        onClick={() => onChange(i)}
      />
    ))}
  </StyledTabs>
);

interface StyledTabsProps {
  tabsCount: number;
}

const StyledTabs = styled.div<StyledTabsProps>`
  display: grid;
  grid-template-columns: repeat(${({ tabsCount }) => tabsCount}, 1fr);
  gap: 2px;
`;
