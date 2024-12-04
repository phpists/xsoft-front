import styled from "styled-components";
import { Title } from "./Title";
import { CategoryCard } from "../../../components/CategoryCard/CategoryCard";
import {
  BiHappy,
  BiPaperPlane,
  BiMessageRounded,
  BiPieChartAlt2,
  BiCog,
  BiDiamond,
  BiUser,
  BiIdCard,
} from "react-icons/bi";
import { useAppSelect } from "../../../hooks/redux";

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
        <Title />
        <CategoryCard
          title="Обіг товарів"
          Icon={<BiUser size={20} />}
          className="mb-3.5"
          active={[4, 5, 6, 7].includes(category)}
          onClick={() => onChangeCategory(4)}
        //   options={[
        //     { title: "Продаж товару", value: 5 },
        //     { title: "Прихід товару", value: 7 },
        //     { title: "Списання товару", value: 6 },
        //   ]}
          value={category}
          onChange={(val: string | number) => onChangeCategory(Number(val))}
        />
        <CategoryCard
          title="Склади"
          Icon={<BiDiamond size={20} />}
          className="mb-[34px]"
          active={category === 3}
          onClick={() => onChangeCategory(3)}
        />
        <CategoryCard
          title="Каталог товарів"
          Icon={<BiIdCard size={20} />}
          className="mb-3.5"
          active={category === 0}
          onClick={() => onChangeCategory(0)}
        />
        <CategoryCard
          title="Бренди"
          Icon={<BiIdCard size={20} />}
          className="mb-3.5"
          active={category === 1}
          onClick={() => onChangeCategory(1)}
        />
        <CategoryCard
          title="Постачальники"
          Icon={<BiIdCard size={20} />}
          className="mb-[34px]"
          active={category === 2}
          onClick={() => onChangeCategory(2)}
        />
        <CategoryCard
          title="Сертифікати"
          Icon={<BiIdCard size={20} />}
          className="mb-3.5 notActive"
        />{" "}
        <CategoryCard
          title="Абонементи"
          Icon={<BiIdCard size={20} />}
          className="mb-3.5 notActive"
        />
      </div>
      <div>
        <CategoryCard
          title="Аналітика"
          Icon={<BiPieChartAlt2 size={20} />}
          className="mb-2 notActive"
        />
        <CategoryCard
          title="Налаштування"
          Icon={<BiCog size={20} />}
          className="notActive"
        />
      </div>
    </div>
  );
};
