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
          { title: "", sortable: false },
        ]}
        allCount={transactions.length}
        className="history-table"
      >
        {transactions?.map(
          (
            {
              id,
              type_title,
              cashes: { title },
              amount,
              amount_cashes,
              user: { first_name, last_name },
              created_at,
              product_movement_id,
            },
            i
          ) => (
            <Row
              key={id}
              className={i % 2 === 0 ? "grey" : ""}
              type={type_title}
              casheTitle={title}
              amount={amount}
              casheAmount={amount_cashes}
              userName={`${first_name ?? ""} ${last_name ?? ""}`}
              createdAt={created_at}
              id={id}
              movementId={product_movement_id}
            />
          )
        )}
      </Table>
    </StyledHistoryTable>
  );
};

const StyledHistoryTable = styled.div`
  .history-table {
    grid-template-columns: repeat(6, 1fr) 40px;
  }
`;
