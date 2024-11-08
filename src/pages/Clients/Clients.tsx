import styled from "styled-components";
import { Header } from "../../components/Header/Header";
import { Sidebar } from "./Sidebar/Sidebar";
import { Content } from "./Content/Content";
import { useState } from "react";

export const Clients = () => {
  const [selected, setSelected] = useState<number[]>([]);

  const handleSelect = (id: number) =>
    setSelected(
      selected.includes(id)
        ? selected?.filter((s) => s !== id)
        : [...selected, id]
    );

  const handleSelectAll = () => setSelected(Array.from(Array(20).keys()));

  return (
    <StyledClients className="flex">
      <Sidebar />
      <div className="content">
        <Header />
        <Content
          selected={selected}
          onSelect={handleSelect}
          onSelectAll={handleSelectAll}
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
