import { Table } from "../../../../components/Table/Table";
import { Client } from "../../../../types/clients.";
import { Row } from "./Row";

interface Props {
  selected: number[];
  onSelect: (id: number) => void;
  onSelectAll: () => void;
  data: Client[];
  onSort: (val: string) => void;
  onDeleteSelected?: () => void;
  onDelete: (id: number) => void;
  loading: boolean;
}

export const ClientsTable = ({
  selected,
  onSelect,
  onSelectAll,
  data,
  onSort,
  onDeleteSelected,
  onDelete,
  loading,
}: Props) => {
  const COLUMNS = [
    { title: "Ім’я", sortable: true, onClick: () => onSort("first_name") },
    { title: "Телефон", sortable: true, onClick: () => onSort("phone") },
    //   { title: "Email", sortable: false },
    { title: "Коментар", sortable: false, onClick: () => onSort("comment") },
    // { title: "Візити", sortable: false, onClick: () => onSort("first_name") },
    { title: "Знижки", sortable: false, onClick: () => onSort("first_name") },
    {
      title: "Останій візит",
      sortable: false,
      onClick: () => onSort("first_name"),
    },
  ];

  return (
    <>
      <Table
        columns={COLUMNS}
        selected={selected?.length}
        onSelectAll={onSelectAll}
        allCount={data?.length}
        onDeleteSelected={onDeleteSelected}
        loading={loading}
      >
        {data?.map(
          (
            { id, category_id, first_name, last_name, phone, color, comment },
            i
          ) => (
            <Row 
              key={id}
              selected={selected.includes(id)}
              onSelect={() => onSelect(id)}
              className={i % 2 === 1 ? "grey" : ""}
              id={id}
              category={"dd"}
              firstName={first_name}
              lastName={last_name}
              phone={phone}
              color={color}
              comment={comment}
              onDelete={() => onDelete(id)}
            />
          )
        )}
      </Table>
    </>
  );
};
