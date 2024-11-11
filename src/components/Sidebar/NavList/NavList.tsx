import styled from "styled-components";
import {
  BiHome,
  BiSolidHome,
  BiMap,
  BiSolidMap,
  BiCalendar,
  BiSolidCalendar,
  BiWallet,
  BiSolidWallet,
  BiHappy,
  BiSolidHappy,
  BiCartAlt,
  BiSolidCartAlt,
  BiUser,
  BiSolidUser,
  BiPieChartAlt2,
  BiSolidPieChartAlt2,
  BiCalculator,
  BiSolidCalculator,
  BiCog,
  BiSolidCog,
  BiCategoryAlt,
  BiSolidCategoryAlt,
  BiCodeBlock,
  BiSearch,
} from "react-icons/bi";
import { ReactComponent as BiSolidCodeBlock } from "../../../assets/integrations.svg";

import { Card } from "./Card";
import { SideMenuToggle } from "../SideMenuToggle";

const LINKS = [
  {
    title: "Домашня",
    Icon: BiHome,
    IconActive: BiSolidHome,
    link: "/",
  },
  {
    title: "Філії",
    Icon: BiMap,
    IconActive: BiSolidMap,
    link: "/filie",
  },
  {
    title: "Календар",
    Icon: BiCalendar,
    IconActive: BiSolidCalendar,
    link: "/calendar",
  },
  {
    title: "Фінанси",
    Icon: BiWallet,
    IconActive: BiSolidWallet,
    link: "/finance",
  },
  {
    title: "Клієнти",
    Icon: BiHappy,
    IconActive: BiSolidHappy,
    link: "/clients",
  },
  {
    title: "Товари",
    Icon: BiCartAlt,
    IconActive: BiSolidCartAlt,
    link: "/items",
  },
  {
    title: "Персонал",
    Icon: BiUser,
    IconActive: BiSolidUser,
    link: "/pesonal",
  },
  {
    title: "Аналітика",
    Icon: BiPieChartAlt2,
    IconActive: BiSolidPieChartAlt2,
    link: "/analitics",
  },
  {
    title: "Білінг",
    Icon: BiCalculator,
    IconActive: BiSolidCalculator,
    link: "/blling",
  },
  {
    title: "Налаштування",
    Icon: BiCog,
    IconActive: BiSolidCog,
    link: "/settings",
  },
  {
    title: "Віджети",
    Icon: BiCategoryAlt,
    IconActive: BiSolidCategoryAlt,
    link: "/widgets",
  },
  {
    title: "Інтеграції",
    Icon: BiCodeBlock,
    IconActive: BiSolidCodeBlock,
    link: "/intergrations",
  },
  {
    title: "Пошук",
    Icon: BiSearch,
    IconActive: BiSearch,
    link: "/search",
  },
];

export const NavList = () => {
  return (
    <StyledNavList>
      <div className="links-group">
        {LINKS?.slice(0, 2)?.map(({ title, link, Icon, IconActive }) => (
          <Card title={title} link={link} Icon={Icon} IconActive={IconActive} />
        ))}
      </div>
      <div className="links-group">
        {LINKS?.slice(2, 9)?.map(({ title, link, Icon, IconActive }) => (
          <Card title={title} link={link} Icon={Icon} IconActive={IconActive} />
        ))}
      </div>
      <div className="links-group">
        {LINKS?.slice(9)?.map(({ title, link, Icon, IconActive }) => (
          <Card title={title} link={link} Icon={Icon} IconActive={IconActive} />
        ))}
      </div>
    </StyledNavList>
  );
};

const StyledNavList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  .links-group {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
`;
