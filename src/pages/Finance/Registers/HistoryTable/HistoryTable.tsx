import styled from "styled-components";
import { Table } from "../../../../components/Table/Table";
import { Row } from "./Row";
import { CachesTransactionResponse } from "../../../../types/finance";

interface Props {
  transactions: CachesTransactionResponse[];
}

export const HistoryTable = ({ transactions }: Props) => {
  return (
    <StyledHistoryTable>
      <Table
        columns={[
          { title: "Дата", sortable: false },
          { title: "Назва", sortable: false },
          { title: "Тип", sortable: false },
          { title: "Каса", sortable: false },
          { title: "Сума", sortable: false },
          { title: "Баланс каси", sortable: false },
        ]}
        allCount={transactions.length}
      >
        {transactions?.map(
          (
            {
              id,
              type_id,
              cashes: { title },
              amount,
              amount_cashes,
              user: { first_name, last_name },
              created_at,
            },
            i
          ) => (
            <Row
              key={id}
              className={i % 2 === 0 ? "grey" : ""}
              type={type_id}
              casheTitle={title}
              amount={amount}
              casheAmount={amount_cashes}
              userName={`${first_name ?? ""} ${last_name ?? ""}`}
              createdAt={created_at}
            />
          )
        )}
      </Table>
    </StyledHistoryTable>
  );
};

const StyledHistoryTable = styled.div``;
