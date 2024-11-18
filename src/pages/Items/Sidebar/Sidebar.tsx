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
          title="Склади"
          Icon={<BiDiamond size={20} />}
          className="mb-3.5"
          options={[
            { title: "Всі ресурси", value: "1" },
            { title: "Записи", value: "2" },
          ]}
          active={category === 3}
          onClick={() => onChangeCategory(3)}
        />
        <CategoryCard
          title="Обіг товарів"
          Icon={<BiUser size={20} />}
          className="mb-[34px]"
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
          className="mb-3.5"
        />{" "}
        <CategoryCard
          title="Абонементи"
          Icon={<BiIdCard size={20} />}
          className="mb-3.5"
        />
      </div>
      <div>
        <CategoryCard
          title="Аналітика"
          Icon={<BiPieChartAlt2 size={20} />}
          className="mb-2"
        />
        <CategoryCard title="Налаштування" Icon={<BiCog size={20} />} />
      </div>
    </div>
  );
};
