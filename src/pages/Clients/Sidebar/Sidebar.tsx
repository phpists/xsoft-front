import styled from "styled-components";
import { Title } from "./Title";
import { CategoryCard } from "../../../components/CategoryCard/CategoryCard";
import {
  BiHappy,
  BiPaperPlane,
  BiMessageRounded,
  BiPieChartAlt2,
  BiCog,
} from "react-icons/bi";
import { useAppSelect } from "../../../hooks/redux";

export const Sidebar = () => {
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
          title="Клієнтська база"
          Icon={<BiHappy size={20} />}
          className="mb-2"
        />
        <CategoryCard
          title="Комунікація"
          Icon={<BiPaperPlane size={20} />}
          className="mb-2"
        />
        <CategoryCard title="Відгуки" Icon={<BiMessageRounded size={20} />} />
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
