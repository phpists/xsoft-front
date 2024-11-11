import styled from "styled-components";
import { Title } from "./Title";
import { CategoryCard } from "../../../components/CategoryCard/CategoryCard";
import {
  BiPieChartAlt2,
  BiCog,
  BiDiamond,
  BiUser,
  BiIdCard,
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
  const [modal, setModal] = useState(false);

  return (
    <div
      className={`flex flex-col justify-between menu-sidebar-wrapper ${
        sideMenuOpen && "open"
      }`}
    >
      <div>
        {modal && <CategoryModal onClose={() => setModal(false)} />}

        <Title title="Товари" arrow />
        <CategoryCard
          title="Загальний"
          Icon={<BiIdCard size={20} />}
          className="mb-3.5"
          active={category === 0}
          onClick={() => onChangeCategory(0)}
        />
        <CategoryCard
          title="Потребують закупівлі"
          Icon={<BiIdCard size={20} />}
          className="mb-3.5"
          active={category === 1}
          onClick={() => onChangeCategory(1)}
        />
        <Title title="Категорії товару" />

        <CategoryCard
          title="Категорія 1"
          Icon={<BiIdCard size={20} />}
          className="mb-3.5"
          editable
          onClick={() => setModal(true)}
        />
        <CategoryCard
          title="Категорія 1"
          Icon={<BiIdCard size={20} />}
          className="mb-3.5"
          editable
          onClick={() => setModal(true)}
        />
        <CategoryCard
          title="Категорія 1"
          Icon={<BiIdCard size={20} />}
          className="mb-3.5"
          editable
          onClick={() => setModal(true)}
        />
        <CategoryCard
          title="Категорія 1"
          Icon={<BiIdCard size={20} />}
          className="mb-3.5"
          editable
          onClick={() => setModal(true)}
        />
        <CategoryCard
          title="Категорія 1"
          Icon={<BiIdCard size={20} />}
          className="mb-3.5"
          editable
          onClick={() => setModal(true)}
        />
        <Button
          title="Додати категорію"
          type="dark"
          onClick={() => setModal(true)}
        />
      </div>
    </div>
  );
};
