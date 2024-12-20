import styled from "styled-components";
import { Table } from "../../../../components/Table/Table";
import { Row } from "./Row";
import { IMovementsResponseDataItem } from "../../../../types/movements";
import { useGetWarehousesQuery } from "../../../../store/warehouses/warehouses.api";
import {
  useGetMovementsInfoQuery,
  useLazyDeleteMovementsQuery,
} from "../../../../store/movements/movements.api";
import { useState } from "react";
import { formatResponseDate, showMessage } from "../../../../helpers";
import { Confirm } from "../../../../components/Confirm";

interface Props {
  selected: number[];
  onSelect: (id: number) => void;
  onSelectAll: () => void;
  data: IMovementsResponseDataItem[];
  onSortBy: (val: string) => void;
  loading: boolean;
  search: string;
  onDelete: (ids: number[], clearSelected?: boolean) => void;
}

export const CirculationTable = ({
  selected,
  onSelect,
  onSelectAll,
  data,
  onSortBy,
  loading,
  search,
  onDelete,
}: Props) => {
  const { data: info } = useGetMovementsInfoQuery({});
  const [deleteMovements] = useLazyDeleteMovementsQuery();
  const [modal, setModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<number | undefined>(
    undefined
  );
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
      sortable: true,
      className: "header-text",
      onClick: () => onSortBy("total_price"),
    },
    {
      title: "Ціна",
      sortable: true,
      className: "header-text",
      onClick: () => onSortBy("total_price"),
    },
  ];

  const handleDelete = (ids: number[], isSelected?: boolean) => {
    setModal(false);
    deleteMovements(ids).then((resp) => {
      if (resp.isError) {
        showMessage("error", `Помилка видалення`);
      } else {
        showMessage("success", `Успішно видалено`);
        onDelete(ids, isSelected);
      }
    });
  };

  const handleOpenDeleteModal = (id?: number) => {
    setModal(true);
    setSelectedProduct(id);
  };

  const handleGetAllIds = () => {
    let ids: number[] = [];

    data.forEach(({ items }) =>
      items.forEach(({ id, product: { title } }) => {
        if (
          search?.length === 0 ||
          title.toLowerCase().includes(search.toLowerCase())
        ) {
          ids.push(id);
        }
      })
    );

    return ids;
  };

  return (
    <StyledCirculationTable>
      {modal && (
        <Confirm
          title={`Видалення`}
          subtitle={`Ви впевнені що хочете назавжди \n видалити?`}
          submitText={`Видалити`}
          onClose={() => setModal(false)}
          onSubmit={() =>
            handleDelete(selectedProduct ? [selectedProduct] : selected, true)
          }
        />
      )}
      <Table
        columns={COLUMNS}
        selected={selected?.length}
        onSelectAll={onSelectAll}
        allCount={data.length}
        loading={loading}
        onDeleteSelected={handleOpenDeleteModal}
      >
        {data
          ?.filter(
            ({ items }) =>
              !!items.filter(({ product: { title } }) =>
                title.toLowerCase().includes(search.toLowerCase())
              )
          )
          ?.map(({ items, warehouse_id, id: groupId, created_at }) => (
            <>
              {items
                ?.filter(({ product: { title } }) =>
                  title.toLowerCase().includes(search.toLowerCase())
                )
                ?.map(
                  (
                    {
                      id,
                      product: { title, cost_price, retail_price },
                      qty,
                      type_title,
                      product_movement_id,
                    },
                    i
                  ) => (
                    <Row
                      key={id}
                      selected={selected.includes(groupId)}
                      onSelect={() => onSelect(groupId)}
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
                      onDelete={() => handleOpenDeleteModal(groupId)}
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
      max-width: 150px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`;
