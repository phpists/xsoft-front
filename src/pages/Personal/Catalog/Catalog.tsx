import styled from "styled-components";
import { Header } from "./Header/Header";
import { PersonalTable } from "./PersonalTable/PersonalTable";
import { useEffect, useState } from "react";
import { useLazyGetStaffQuery } from "../../../store/personal/personal.api";
import { IPersonaResponse } from "../../../types/personal";

export const Catalog = () => {
  const [getStaff] = useLazyGetStaffQuery();
  const [data, setData] = useState<IPersonaResponse[]>([]);
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
    getStaff({ sortBy, q: search, sortDesc }).then((resp) => {
      console.log(resp);
      setData(resp?.data?.data ?? []);
      setLoading(false);
    });
  };

  useEffect(() => {
    handleGetClients();
  }, [sortBy, search, sortDesc]);

  const handleDeleteItems = (ids: number[], clearSelected?: boolean) => {
    setData(data?.filter((c) => !ids.includes(c.id)));
    clearSelected && setSelected([]);
  };

  return (
    <StyledCatalog>
      <Header />
      <PersonalTable
        selected={selected}
        onSelect={handleSelect}
        onSelectAll={handleSelectAll}
        data={data}
        onSort={handleChangeSortBy}
        onDelete={handleDeleteItems}
        loading={loading}
      />
    </StyledCatalog>
  );
};
const StyledCatalog = styled.div`
  padding: 10px 14px 14px;
  position: relative;
`;
