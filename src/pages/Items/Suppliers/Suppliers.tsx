import styled from "styled-components";
import { Header } from "./Header/Header";
import { SuppliersTable } from "./SuppliersTable/SuppliersTable";
import { useEffect, useState } from "react";
import { useLazyGetSuppliersQuery } from "../../../store/suppliers/suppliers.api";
import { ISupplierResponse, SuppliersResponse } from "../../../types/suppliers";

export const Suppliers = () => {
  const [data, setData] = useState<ISupplierResponse[]>([]);
  const [getSuppliers] = useLazyGetSuppliersQuery();
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
    getSuppliers({
      sortBy,
      q: search,
      sortDesc,
    }).then((resp) => {
      setData(resp?.data?.response.data ?? []);
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
    <StyledSuppliers>
      <Header search={search} onSearch={handleSearch} />
      <SuppliersTable
        selected={selected}
        onSelect={handleSelect}
        onSelectAll={handleSelectAll}
        data={data}
        onSort={handleChangeSortBy}
        loading={loading}
        onDelete={handleDelete}
      />
    </StyledSuppliers>
  );
};

const StyledSuppliers = styled.div`
  padding: 10px 14px 14px;
  position: relative;
`;
