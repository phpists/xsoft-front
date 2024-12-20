import styled from "styled-components";
import { Header } from "./Header/Header";
import { ResourceTable } from "./ResourceTable/ResourceTable";
import { useState } from "react";
import { useGetCashCategoriesQuery } from "../../../store/finance/finance.api";

export const Items = () => {
  const { data, refetch } = useGetCashCategoriesQuery({});
  const [selected, setSelected] = useState<number[]>([]);

  const handleSelect = (id: number) =>
    setSelected(
      selected.includes(id)
        ? selected?.filter((s) => s !== id)
        : [...selected, id]
    );

  const handleSelectAll = () => setSelected(Array.from(Array(20).keys()));

  const handleDelete = (ids: number[], clearSelected?: boolean) => {
    // setData(data?.filter((c) => !ids.includes(c.id)));
    clearSelected && setSelected([]);
  };

  return (
    <StyledItems>
      <Header onRefetchData={() => refetch()} />
      <ResourceTable
        selected={selected}
        onSelect={handleSelect}
        onSelectAll={handleSelectAll}
        data={data}
        onRefetchData={() => refetch()}
        onDelete={handleDelete}
      />
    </StyledItems>
  );
};

const StyledItems = styled.div`
  padding: 10px 14px 14px;
  position: relative;
`;
