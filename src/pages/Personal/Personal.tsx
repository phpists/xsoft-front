import styled from "styled-components";
import { Header } from "../../components/Header/Header";
import { Sidebar } from "./Sidebar/Sidebar";
import { useState } from "react";
import { Catalog } from "./Catalog/Catalog";
import { Objects } from "./Objects/Objects";
import { Resource } from "./Resource/Resource";
import { Departments } from "./Departments/Departments";

export const Personal = () => {
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
    <StyledProducts className="flex">
      <Sidebar category={category} onChangeCategory={handleChangeCategory} />
      <div className="content">
        <Header />{" "}
        {category === 0 ? (
          <Catalog
            selected={selected}
            onSelect={handleSelect}
            onSelectAll={handleSelectAll}
          />
        ) : category === 1 ? (
          <Objects
            selected={selected}
            onSelect={handleSelect}
            onSelectAll={handleSelectAll}
          />
        ) : category === 2 ? (
          <Resource
            selected={selected}
            onSelect={handleSelect}
            onSelectAll={handleSelectAll}
          />
        ) : category === 3 ? (
          <Departments
            selected={selected}
            onSelect={handleSelect}
            onSelectAll={handleSelectAll}
          />
        ) : null}
      </div>
    </StyledProducts>
  );
};

const StyledProducts = styled.div`
  .content {
    width: 100%;
  }
`;
