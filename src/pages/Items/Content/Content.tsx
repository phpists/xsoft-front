import styled from "styled-components";
import { Header } from "./Header/Header";
import { ProductsTable } from "./ProductsTable/ProductsTable";
import { Categories } from "../Categories/Categories";
import { useEffect, useState } from "react";
import { useLazyGetProductsQuery } from "../../../store/products/products.api";
import { IProductResponse } from "../../../types/products";

export const Content = () => {
  const [getProducts] = useLazyGetProductsQuery();
  const [data, setData] = useState<IProductResponse[]>([]);
  const [selected, setSelected] = useState<number[]>([]);
  const [sortBy, setSortBy] = useState<string | undefined>(undefined);
  const [sortDesc, setSortDesc] = useState(false);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

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

  const handleGetClients = () => {
    setLoading(true);
    getProducts({ sortBy, q: search, sortDesc }).then((resp) => {
      setData(resp?.data?.data ?? []);
      setLoading(false);
    });
  };

  useEffect(() => {
    handleGetClients();
  }, [sortBy, search, sortDesc]);

  const handleDelete = (ids: number[], clearSelected?: boolean) => {
    setData(data?.filter((c) => !ids.includes(c.id)));
    clearSelected && setSelected([]);
  };

  return (
    <StyledContent>
      <Header search={search} onSearch={handleSearch} />
      <div className="flex w-full gap-2">
        <Categories />
        <ProductsTable
          selected={selected}
          onSelect={handleSelect}
          onSelectAll={handleSelectAll}
          data={data}
          loading={loading}
          onSort={handleChangeSortBy}
          onDelete={handleDelete}
        />
      </div>
    </StyledContent>
  );
};

const StyledContent = styled.div`
  padding: 10px 14px 14px;
  position: relative;
`;