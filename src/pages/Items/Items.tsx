import styled from "styled-components";
import { Header } from "../../components/Header/Header";
import { Sidebar } from "./Sidebar/Sidebar";
import { useState } from "react";
import { Content } from "./Content/Content";
import { Brands } from "./Brands/Brands";
import { Storages } from "./Storages/Storages";
import { Suppliers } from "./Suppliers/Suppliers";
import { Circulation } from "./Circulation/Circulation";
import { Selling } from "./Selling/Selling";
import { Arrival } from "./Arrival/Arrival";

export const Items = () => {
  const [selected, setSelected] = useState<number[]>([]);
  const [category, setCategory] = useState(
    Number(localStorage.getItem("items_category")) ?? 0
  );

  const handleSelect = (id: number) =>
    setSelected(
      selected.includes(id)
        ? selected?.filter((s) => s !== id)
        : [...selected, id]
    );

  const handleSelectAll = () => setSelected(Array.from(Array(20).keys()));
  const handleChangeCategory = (val: number) => {
    setCategory(val);
    localStorage.setItem("items_category", val.toString());
  };

  return (
    <StyledItems className="flex">
      <Sidebar category={category} onChangeCategory={handleChangeCategory} />
      <div className="content">
        <Header />{" "}
        {category === 0 ? (
          <Content />
        ) : category === 1 ? (
          <Brands />
        ) : category === 2 ? (
          <Suppliers
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
        ) : category === 4 ? (
          <Circulation
            selected={selected}
            onSelect={handleSelect}
            onSelectAll={handleSelectAll}
          />
        ) : category === 5 ? (
          <Selling />
        ) : category === 6 ? (
          <Selling off />
        ) : category === 7 ? (
          <Arrival />
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
