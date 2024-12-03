import styled from "styled-components";
import { Title } from "./Title";
import { CategoryCard } from "../../../components/CategoryCard/CategoryCard";
import {
  BiHappy,
  BiPaperPlane,
  BiMessageRounded,
  BiPieChartAlt2,
  BiCog,
  BiUser,
  BiPackage,
  BiDiamond,
} from "react-icons/bi";
import { useAppSelect } from "../../../hooks/redux";
import { AddButton } from "./AddButton";
import { Calendar } from "../../../components/Calendar/Calendar";

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
        <div className="my-6">
          <Calendar />
        </div>
        <CategoryCard
          title="Персонал"
          Icon={<BiUser size={20} />}
          className="mb-2"
        />
        <CategoryCard
          title="Об’єкти"
          Icon={<BiPackage size={20} />}
          className="mb-2"
        />{" "}
        <CategoryCard title="Ресурси" Icon={<BiDiamond size={20} />} />
        <AddButton />
      </div>
    </div>
  );
};
