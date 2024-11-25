import styled from "styled-components";
import { Title } from "./Title";
import { CategoryCard } from "../../../components/CategoryCard/CategoryCard";
import {
  BiPieChartAlt2,
  BiCog,
  BiDiamond,
  BiUser,
  BiIdCard,
  BiSolidUser,
  BiPackage,
  BiCut,
  BiSolidPieChartAlt2,
} from "react-icons/bi";
import { useAppSelect } from "../../../hooks/redux";
import { Button } from "../../../components/Button";
import { CategoryModal } from "../../../components/CategoryModal/CategoryModal";
import { useState } from "react";

interface Props {
  category: number;
  onChangeCategory: (val: number) => void;
}

export const Sidebar = ({ category, onChangeCategory }: Props) => {
  const { sideMenuOpen } = useAppSelect((app) => app.app);

  return (
    <div
      className={`flex flex-col justify-between menu-sidebar-wrapper ${
        sideMenuOpen && "open"
      }`}
    >
      <div>
        <Title title="Персонал" arrow />
        <CategoryCard
          title="Персонал"
          Icon={<BiSolidUser size={20} />}
          className="mb-2"
          active={category === 0}
          onClick={() => onChangeCategory(0)}
        />
        <CategoryCard
          title="Об’єкти"
          Icon={<BiPackage size={20} />}
          className="mb-2"
          active={category === 1}
          onClick={() => onChangeCategory(1)}
        />
        <CategoryCard
          title="Ресурси"
          Icon={<BiDiamond size={20} />}
          className="mb-2"
          active={category === 2}
          onClick={() => onChangeCategory(2)}
        />
        <CategoryCard
          title="Відділи"
          Icon={<BiIdCard size={20} />}
          className="mb-2"
          active={category === 3}
          onClick={() => onChangeCategory(3)}
        />
      </div>
      <div>
        <CategoryCard
          title="Послуги"
          Icon={<BiCut size={20} />}
          className="mb-2 notActive"
        />{" "}
        <CategoryCard
          title="Аналітика"
          Icon={<BiPieChartAlt2 size={20} />}
          className="mb-2 notActive"
        />{" "}
        <CategoryCard
          title="Налаштування"
          Icon={<BiCog size={20} />}
          className="mb-2 notActive"
        />
      </div>
    </div>
  );
};
