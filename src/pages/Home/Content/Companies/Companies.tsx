import styled from "styled-components";
import { List } from "./List/List";
import { SelectedCompany } from "./SelectedCompany/SelectedCompany";
import { useState } from "react";

export const Companies = () => {
  const [selected, setSelected] = useState<undefined | number>(undefined);

  const handleSelect = (id: number | undefined) =>
    setSelected(selected === id ? undefined : id);

  return (
    <StyledCompanies>
      <SelectedCompany selected={selected} />
      <List selected={selected} onSelect={handleSelect} />
    </StyledCompanies>
  );
};

const StyledCompanies = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr max-content;
  gap: 14px;
`;
