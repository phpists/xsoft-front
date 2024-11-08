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

export const Sidebar = () => {
  return (
    <StyledSidebar className="flex flex-col justify-between">
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
