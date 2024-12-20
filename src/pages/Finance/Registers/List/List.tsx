import styled from "styled-components";
import { Card } from "./Card/Card";
import { AddCard } from "./AddCard";
import { useState } from "react";

export const List = () => {
  const [selected, setSelected] = useState(0);

  return (
    <StyledList>
      <Card title="Всі каси" total="2 400 ₴" />
      <div className="cards">
        <div className="cards-wrapper">
          <Card
            title="Основна каса"
            total="1 200 ₴"
            actions
            selected={selected === 0}
            onSelect={() => setSelected(0)}
          />
          <Card
            title="Готівка"
            total="1 200 ₴"
            actions
            selected={selected === 1}
            onSelect={() => setSelected(1)}
          />{" "}
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
    /* overflow: auto; */
    /* overflow-y: hidden; */
  }
`;
