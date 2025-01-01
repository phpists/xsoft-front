import styled from "styled-components";
import { Header } from "./Header/Header";
import { List } from "./List/List";
import { Period } from "./Period";
import { HistoryCards } from "./HistoryCards";
import { HistoryChart } from "./HistoryChart";
import { HistoryTable } from "./HistoryTable/HistoryTable";
import { useLazyGetCashTransactionsQuery } from "../../../store/finance/finance.api";
import { useState } from "react";
import { CachesTransactionResponse } from "../../../types/finance";

export const Registers = () => {
  const [selected, setSelected] = useState<number | undefined>(undefined);
  const [getCashTransactions] = useLazyGetCashTransactionsQuery();
  const [transactions, setTransactions] = useState<CachesTransactionResponse[]>(
    []
  );

  const handleSelectCash = (val: number) => {
    setSelected(val);
    getCashTransactions(val).then((resp) =>
      setTransactions(resp?.data?.response?.transactions ?? [])
    );
  };

  return (
    <StyledRegisters>
      <Header />
      <List selected={selected} onSelect={handleSelectCash} />
      <Period />
      <HistoryCards />
      <HistoryChart transactions={transactions}  />
      <HistoryTable transactions={transactions} />
    </StyledRegisters>
  );
};

const StyledRegisters = styled.div`
  padding: 10px 14px 14px;
  overflow: auto;
  height: calc(100vh - 57px);
`;
