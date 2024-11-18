import styled from "styled-components";
import { Header } from "../../components/Header/Header";
import { Sidebar } from "./Sidebar/Sidebar";
import { useState } from "react";
import { Content } from "./Content/Content";
import { Brands } from "./Brands/Brands";
import { Storages } from "./Storages/Storages";

export const Items = () => {
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
    <StyledItems className="flex">
      <Sidebar category={category} onChangeCategory={handleChangeCategory} />
      <div className="content">
        <Header />{" "}
        {category === 0 ? (
          <Content />
        ) : category === 1 ? (
          <Brands
            selected={selected}
            onSelect={handleSelect}
            onSelectAll={handleSelectAll}
          />
        ) : category === 3 ? (
          <Storages
            selected={selected}
            onSelect={handleSelect}
            onSelectAll={handleSelectAll}
          />
        ) : null}
      </div>
    </StyledItems>
  );
};

const StyledItems = styled.div`
  .content {
    width: 100%;
  }
`;
