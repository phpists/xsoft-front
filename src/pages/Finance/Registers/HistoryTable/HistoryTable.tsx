import styled from "styled-components";
import { Table } from "../../../../components/Table/Table";
import { Row } from "./Row";

export const HistoryTable = () => {
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
      >
        <Row />
        <Row className="grey" />
        <Row />
        <Row className="grey" />
        <Row />
        <Row className="grey" />
        <Row />
        <Row className="grey" />
        <Row />
        <Row className="grey" />
        <Row />
        <Row className="grey" />
        <Row />
        <Row className="grey" />
      </Table>
    </StyledHistoryTable>
  );
};

const StyledHistoryTable = styled.div`

`;
