import styled from "styled-components";
import { Header } from "./Header/Header";
import { List } from "./List/List";
import { Period } from "./Period";
import { HistoryCards } from "./HistoryCards";
import { HistoryChart } from "./HistoryChart";
import { HistoryTable } from "./HistoryTable/HistoryTable";

export const Registers = () => {
  return (
    <StyledRegisters>
      <Header />
      <List />
      <Period />
      <HistoryCards />
      <HistoryChart />
      <HistoryTable />
    </StyledRegisters>
  );
};

const StyledRegisters = styled.div`
  padding: 10px 14px 14px;
  overflow: auto;
  height: calc(100vh - 57px);
`;
