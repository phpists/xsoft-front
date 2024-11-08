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

interface Props {
  category: number;
  onChangeCategory: (val: number) => void;
}

export const Sidebar = ({ category, onChangeCategory }: Props) => {
  return (
    <StyledSidebar className="flex flex-col justify-between">
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
          active={category === 2}
          onClick={() => onChangeCategory(2)}
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
    </StyledSidebar>
  );
};

const StyledSidebar = styled.div`
  padding: 20px 8px 40px;
  border-right: 1px solid #dbdbdb;
  background: #fff;
  width: 284px;
  height: 100vh;
  flex-shrink: 0;
`;
