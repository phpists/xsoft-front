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
  BiWallet,
  BiFolder,
  BiFile,
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
        <Title title="Фінанси" arrow />
        <CategoryCard
          title="Фінанси"
          Icon={<BiWallet size={20} />}
          className="mb-2"
          active={category === 0}
          onClick={() => onChangeCategory(0)}
        />
        <CategoryCard
          title="Статті платежів"
          Icon={<BiFolder size={20} />}
          className="mb-2"
          active={category === 1}
          onClick={() => onChangeCategory(1)}
        />
        <CategoryCard
          title="Контрагенти"
          Icon={<BiUser size={20} />}
          className="mb-2"
          active={category === 2}
          onClick={() => onChangeCategory(2)}
        />
        <CategoryCard
          title="Документи"
          Icon={<BiFile size={20} />}
          className="mb-2"
          active={category === 3}
          onClick={() => onChangeCategory(3)}
        />
      </div>
    </div>
  );
};
