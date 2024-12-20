import styled from "styled-components";
import { Header } from "../../components/Header/Header";
import { Sidebar } from "./Sidebar/Sidebar";
import { useState } from "react";
import { Registers } from "./Registers/Registers";
import { Items } from "./Items/Items";

export const Finance = () => {
  const [selected, setSelected] = useState<number[]>([]);
  const [category, setCategory] = useState(0);

  const handleSelect = (id: number) =>
    setSelected(
      selected.includes(id)
        ? selected?.filter((s) => s !== id)
        : [...selected, id]
    );

  const handleSelectAll = () => setSelected(Array.from(Array(20).keys()));

  const handleChangeCategory = (val: number) => setCategory(val);

  return (
    <StyledFinance className="flex">
      <Sidebar category={category} onChangeCategory={handleChangeCategory} />
      <div className="content">
        <Header />{" "}
        {category === 0 ? <Registers /> : category === 1 ? <Items /> : null}
      </div>
    </StyledFinance>
  );
};

const StyledFinance = styled.div`
  .content {
    width: 100%;
  }
`;
