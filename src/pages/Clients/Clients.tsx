import styled from "styled-components";
import { Header } from "../../components/Header/Header";
import { Sidebar } from "./Sidebar/Sidebar";
import { Content } from "./Content/Content";
import { useEffect, useState } from "react";
import { useLazyGetClientsQuery } from "../../store/clients/clients.api";
import { Client } from "../../types/clients.";

export const Clients = () => {
  const [getCliens] = useLazyGetClientsQuery();
  const [data, setData] = useState<Client[]>([]);
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
    getCliens({ sortBy, q: search, sortDesc }).then((resp) => {
      setData(resp?.data?.data ?? []);
      setLoading(false);
    });
  };

  useEffect(() => {
    handleGetClients();
  }, [sortBy, search, sortDesc]);

  const handleDeleteClients = (ids: number[], clearSelected?: boolean) => {
    setData(data?.filter((c) => !ids.includes(c.id)));
    clearSelected && setSelected([]);
  };

  return (
    <StyledClients className="flex">
      <Sidebar />
      <div className="content">
        <Header />
        <Content
          selected={selected}
          onSelect={handleSelect}
          onSelectAll={handleSelectAll}
          data={data}
          onSort={handleChangeSortBy}
          search={search}
          onSearch={handleSearch}
          onDelete={handleDeleteClients}
          loading={loading}
        />
      </div>
    </StyledClients>
  );
};

const StyledClients = styled.div`
  .content {
    width: 100%;
  }
`;
