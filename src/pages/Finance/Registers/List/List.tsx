import styled from "styled-components";
import { Card } from "./Card/Card";
import { AddCard } from "./AddCard";

export const List = () => {
  return (
    <StyledList>
      <Card title="Всі каси" total="2 400 ₴" />
      <div className="cards">
        <div className="cards-wrapper">
          <Card title="Основна каса" total="1 200 ₴" actions />
          <Card title="Готівка" total="1 200 ₴" actions />{" "}
        </div>
        <AddCard />
      </div>
    </StyledList>
  );
};

const StyledList = styled.div`
  display: grid;
  grid-template-columns: 442px 1fr;
  gap: 40px;
  grid-template-rows: 172px;
  margin-bottom: 22px;
  .cards {
    display: grid;
    grid-template-columns: 1fr 260px;
    gap: 10px;
  }
  .cards-wrapper {
    display: flex;
    align-items: center;
    gap: 10px;
    overflow: auto;
    overflow-y: hidden;
  }
`;
