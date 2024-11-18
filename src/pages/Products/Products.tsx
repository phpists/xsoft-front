import styled from "styled-components";
import { Header } from "../../components/Header/Header";
import { Sidebar } from "./Sidebar/Sidebar";
import { useEffect, useState } from "react";
import { Catalog } from "./Catalog/Catalog";
import { Brands } from "./Brands/Brands";
import { Storages } from "./Storages/Storages";
import { useLazyGetProductsQuery } from "../../store/products/products.api";
import { IMedia } from "../../types/global";

export const Products = () => {
  const [selected, setSelected] = useState<number[]>([]);
  const [category, setCategory] = useState(0);
  const [getProducts] = useLazyGetProductsQuery();
  const [data, setData] = useState([]);
  const [media, setMedia] = useState<IMedia[]>([]);
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

  const handleChangeCategory = (val: number) => setCategory(val);
  const handleSelectAll = () => null;
  // setSelected(data.length === selected.length ? [] : data?.map((c) => c.id));
  const handleChangeSortBy = (val: string) => {
    setSortBy(val);
    setSortDesc(val === sortBy ? !sortDesc : false);
  };
  const handleSearch = (val: string) => setSearch(val);

  //   const handleGetProducts = () => {
  //     setLoading(true);
  //     getProducts({ sortBy, q: search, sortDesc }).then((resp) => {
  //       setData(resp?.data?.data ?? []);
  //       setLoading(false);
  //     });
  //   };

  //   useEffect(() => {
  //     handleGetProducts();
  //   }, [sortBy, search, sortDesc]);

  //   const handleDeleteItems = (ids: number[], clearSelected?: boolean) => {
  //     setData(data?.filter((c) => !ids.includes(c.id)));
  //     clearSelected && setSelected([]);
  //   };

  return (
    <StyledProducts className="flex">
      <Sidebar category={category} onChangeCategory={handleChangeCategory} />
      <div className="content">
        <Header />{" "}
        <Catalog
          selected={selected}
          onSelect={handleSelect}
          onSelectAll={handleSelectAll}
        />
      </div>
    </StyledProducts>
  );
};

const StyledProducts = styled.div`
  .content {
    width: 100%;
  }
`;
