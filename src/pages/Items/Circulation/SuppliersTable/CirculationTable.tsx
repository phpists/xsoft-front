import styled from "styled-components";
import { Table } from "../../../../components/Table/Table";
import { Row } from "./Row";
import { IMovementsResponseDataItem } from "../../../../types/movements";
import { useGetWarehousesQuery } from "../../../../store/warehouses/warehouses.api";
import { useGetMovementsInfoQuery } from "../../../../store/movements/movements.api";

interface Props {
  selected: number[];
  onSelect: (id: number) => void;
  onSelectAll: () => void;
  data: IMovementsResponseDataItem[];
  onSortBy: (val: string) => void;
  loading: boolean;
}

export const CirculationTable = ({
  selected,
  onSelect,
  onSelectAll,
  data,
  onSortBy,
  loading,
}: Props) => {
  const { data: info } = useGetMovementsInfoQuery({});
  const COLUMNS = [
    {
      title: "Назва",
      sortable: true,
      className: "header-text",
      onClick: () => onSortBy("id"),
    },
    {
      title: "Дата",
      sortable: true,
      className: "header-text",
      onClick: () => onSortBy("date_create"),
    },
    {
      title: "Тип операції",
      sortable: false,
      className: "header-text",
      onClick: () => onSortBy("type_title"),
    },
    {
      title: "Склад",
      sortable: false,
      className: "header-text",
      onClick: () => onSortBy("warehouse_id"),
    },
    {
      title: "Собівартість",
      sortable: false,
      className: "header-text",
      onClick: () => onSortBy("cost_price"),
    },
    {
      title: "Ціна",
      sortable: false,
      className: "header-text",
      onClick: () => onSortBy("retail_price"),
    },
  ];

  return (
    <StyledCirculationTable>
      <Table
        columns={COLUMNS}
        selected={selected?.length}
        onSelectAll={onSelectAll}
        allCount={data.length}
        loading={loading}
      >
        {data?.map(({ items, warehouse_id }) => (
          <>
            {items?.map(
              (
                {
                  id,
                  product: { title, created_at, cost_price, retail_price },
                  qty,
                  type_title,
                  product_movement_id,
                },
                i
              ) => (
                <Row
                  key={id}
                  selected={selected.includes(id)}
                  onSelect={() => onSelect(id)}
                  className={i % 2 === 1 ? "grey" : ""}
                  title={title}
                  date={created_at}
                  type={type_title}
                  warehouse={
                    info?.warehouses?.find((w) => w.id === warehouse_id)
                      ?.title ?? "-"
                  }
                  count={qty}
                  costPrice={cost_price}
                  retailPrice={retail_price}
                  id={product_movement_id}
                />
              )
            )}
          </>
        ))}
      </Table>
    </StyledCirculationTable>
  );
};

const StyledCirculationTable = styled.div`
  .header-text {
    span {
      max-width: 50px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`;
