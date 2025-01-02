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

export interface IFilters {
  time_period: string | undefined;
  date_start: string | undefined;
  date_end: string | undefined;
}
export const Registers = () => {
  const [selected, setSelected] = useState<number | undefined>(undefined);
  const [showDebt, setShowDebt] = useState(false);
  const [getCashTransactions] = useLazyGetCashTransactionsQuery();
  const [transactions, setTransactions] = useState<CachesTransactionResponse[]>(
    []
  );
  const [statistics, setStatistics] = useState({
    balance_start: 0,
    balance_end: 0,
    total_profit: 0,
    total_loss: 0,
  });
  const [filters, setFilters] = useState<IFilters>({
    time_period: "1",
    date_start: undefined,
    date_end: undefined,
  });

  const handleGetData = (
    id: number | undefined,
    debt_status: boolean,
    filters: IFilters
  ) => {
    getCashTransactions({ id, debt_status, ...filters }).then((resp) => {
      setTransactions(resp?.data?.response?.transactions ?? []);
      setStatistics({
        balance_start: resp?.data?.response?.statistic?.balance_start ?? 0,
        balance_end: resp?.data?.response?.statistic?.balance_end ?? 0,
        total_profit: resp?.data?.response?.statistic?.total_profit ?? 0,
        total_loss: resp?.data?.response?.statistic?.total_loss ?? 0,
      });
    });
  };

  const handleSelectCash = (val: number) => {
    setSelected(val);
    setShowDebt(false);
    handleGetData(val, false, filters);
  };

  const handleToggleShowDebt = (debt_status: boolean) => {
    setShowDebt(debt_status);
    handleGetData(selected, debt_status, filters);
  };

  const handleChangeFilters = (field: string, value: string | undefined) => {
    const updatedFilters = { ...filters, [field]: value };
    setFilters(updatedFilters);
    handleGetData(selected, showDebt, updatedFilters);
  };

  return (
    <StyledRegisters>
      <Header />
      <List
        selected={selected}
        onSelect={handleSelectCash}
        showDebt={showDebt}
        onToggleShowDebt={handleToggleShowDebt}
      />
      <Period filters={filters} onChange={handleChangeFilters} />
      <HistoryCards statistics={statistics} />
      <HistoryChart transactions={transactions} />
      <HistoryTable transactions={transactions} />
    </StyledRegisters>
  );
};

const StyledRegisters = styled.div`
  padding: 10px 14px 14px;
  overflow: auto;
  height: calc(100vh - 57px);
`;
