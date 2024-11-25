import styled from "styled-components";
import { SectionTitle } from "../../SectionTitle";
import { Header } from "./Header";
import { Table } from "../../../../../components/Table/Table";
import { Row } from "./Row";

export const HistoryTable = () => (
  <StyledHistoryTable>
    <SectionTitle title="Історія" />
    <Header />
    <Table
      columns={[
        { title: "Дата", sortable: true, className: "!pl-3.5" },
        { title: "Назва", sortable: false },
        { title: "Проводив", sortable: true },
        { title: "Каса", sortable: true },
        { title: "Вартість", sortable: true },
        { title: "Знижки", sortable: true },
        { title: "Бонуси", sortable: true },
      ]}
      className="table"
    >
      <Row className="grey" />
      <Row />
      <Row className="grey" />
      <Row />
    </Table>
  </StyledHistoryTable>
);

const StyledHistoryTable = styled.div`
  .table {
    border-radius: 8px;
    border: 1px solid #dbdbdb;
    box-shadow: none;
    height: max-content;
  }
`;
