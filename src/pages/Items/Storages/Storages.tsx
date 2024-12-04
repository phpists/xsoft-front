import styled from "styled-components";
import { Header } from "./Header/Header";
import { StoragesTable } from "./StoragesTable/StoragesTable";
import { useEffect, useState } from "react";
import { useLazyGetWarehousesQuery } from "../../../store/warehouses/warehouses.api";
import { IWarehouseResponse } from "../../../types/warehouses";

export const Storages = () => {
  const [data, setData] = useState<IWarehouseResponse[]>([]);
  const [getStorages] = useLazyGetWarehousesQuery();
  const [selected, setSelected] = useState<number[]>([]);
  const [sortBy, setSortBy] = useState<string | undefined>(undefined);
  const [sortDesc, setSortDesc] = useState(false);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<number | undefined>(
    undefined
  );

  const handleSelectCategory = (val?: number) => setSelectedCategory(val);

  const handleSelect = (id: number) =>
    setSelected(
      selected.includes(id)
        ? selected?.filter((s) => s !== id)
        : [...selected, id]
    );

  const handleSelectAll = () =>
    setSelected(data.length === selected.length ? [] : data?.map((c) => c.id));

  const handleChangeSortBy = (val: string) => {
    setSortBy(val);
    setSortDesc(val === sortBy ? !sortDesc : false);
  };
  const handleSearch = (val: string) => setSearch(val);

  const handleGetData = () => {
    setLoading(true);
    getStorages({
      sortBy,
      q: search,
      sortDesc,
    }).then((resp) => {
      setData(resp?.data ?? []);
      setLoading(false);
    });
  };

  useEffect(() => {
    handleGetData();
  }, [sortBy, search, sortDesc, selectedCategory]);

  const handleDelete = (ids: number[], clearSelected?: boolean) => {
    setData(data?.filter((c) => !ids.includes(c.id)));
    clearSelected && setSelected([]);
  };

  return (
    <StyledStorages>
      <Header onSearch={handleSearch} search={search} />
      <StoragesTable
        selected={selected}
        onSelect={handleSelect}
        onSelectAll={handleSelectAll}
        data={data}
        loading={loading}
        onSortBy={handleChangeSortBy}
        onDelete={handleDelete}
      />
    </StyledStorages>
  );
};

const StyledStorages = styled.div`
  padding: 10px 14px 14px;
  position: relative;
`;
