import styled from "styled-components";
import { Header } from "./Header/Header";
import { BrandsTable } from "./BrandsTable/BrandsTable";
import { useEffect, useState } from "react";
import { useLazyGetBrandsQuery } from "../../../store/brands/brands.api";
import { IBrandResponse } from "../../../types/brands";

export const Brands = () => {
  const [data, setData] = useState<IBrandResponse[]>([]);
  const [getBrands] = useLazyGetBrandsQuery();
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
    getBrands({
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
    <StyledBrands>
      <Header />
      <BrandsTable
        selected={selected}
        onSelect={handleSelect}
        onSelectAll={handleSelectAll}
        data={data}
        loading={loading}
        onDelete={handleDelete}
      />
    </StyledBrands>
  );
};

const StyledBrands = styled.div`
  padding: 10px 14px 14px;
  position: relative;
`;
