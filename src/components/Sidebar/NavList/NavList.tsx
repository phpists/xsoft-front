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
import { useAppSelect } from "../../../hooks/redux";

export const NavList = () => {
  const { user } = useAppSelect((state) => state.auth);

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
      className: "notActive",
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
    ...(true
      ? [
          {
            title: "Персонал",
            Icon: BiUser,
            IconActive: BiSolidUser,
            link: "/pesonal",
          },
        ]
      : []),
    {
      title: "Аналітика",
      Icon: BiPieChartAlt2,
      IconActive: BiSolidPieChartAlt2,
      link: "/analitics",
      className: "notActive",
    },
    {
      title: "Білінг",
      Icon: BiCalculator,
      IconActive: BiSolidCalculator,
      link: "/blling",
      className: "notActive",
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
      className: "notActive",
    },
    {
      title: "Інтеграції",
      Icon: BiCodeBlock,
      IconActive: BiSolidCodeBlock,
      link: "/intergrations",
      className: "notActive",
    },
    {
      title: "Пошук",
      Icon: BiSearch,
      IconActive: BiSearch,
      link: "/search",
      className: "notActive",
    },
  ];
  return (
    <StyledNavList>
      <div className="links-group">
        {LINKS?.slice(0, 2)?.map(
          ({ title, link, Icon, IconActive, className }) => (
            <Card
              title={title}
              link={link}
              Icon={Icon}
              IconActive={IconActive}
              className={className}
            />
          )
        )}
      </div>
      <div className="links-group">
        {LINKS?.slice(2, 9)?.map(
          ({ title, link, Icon, IconActive, className }) => (
            <Card
              title={title}
              link={link}
              Icon={Icon}
              IconActive={IconActive}
              className={className}
            />
          )
        )}
      </div>
      <div className="links-group">
        {LINKS?.slice(9)?.map(
          ({ title, link, Icon, IconActive, className }) => (
            <Card
              title={title}
              link={link}
              Icon={Icon}
              IconActive={IconActive}
              className={className}
            />
          )
        )}
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
