import styled from "styled-components";
import { Table } from "../../../../components/Table/Table";
import { Row } from "./Row";
import { IWarehouseResponse } from "../../../../types/warehouses";
import { useState } from "react";
import { useLazyDeleteWarehousesQuery } from "../../../../store/warehouses/warehouses.api";
import { showMessage } from "../../../../helpers";
import { Confirm } from "../../../../components/Confirm";

interface Props {
  selected: number[];
  onSelect: (id: number) => void;
  onSelectAll: () => void;
  data: IWarehouseResponse[];
  loading: boolean;
  onSortBy: (val: string) => void;
  onDelete: (ids: number[], clearSelected?: boolean) => void;
}

export const StoragesTable = ({
  selected,
  onSelect,
  onSelectAll,
  data,
  loading,
  onSortBy,
  onDelete,
}: Props) => {
  const COLUMNS = [
    {
      title: "Назва",
      sortable: true,
      className: "header-text",
      onClick: () => onSortBy("title"),
    },
    {
      title: "Опис",
      sortable: true,
      className: "header-text",
      onClick: () => onSortBy("description"),
    },
  ];
  const [modal, setModal] = useState(false);
  const [deleteStorages] = useLazyDeleteWarehousesQuery();
  const [selectedProduct, setSelectedProduct] = useState<number | undefined>(
    undefined
  );

  const handleDelete = (ids: number[], isSelected?: boolean) => {
    setModal(false);
    deleteStorages(ids).then((resp) => {
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

  return (
    <StyledStoragesTable>
      {modal && (
        <Confirm
          title={`Видалення`}
          subtitle={`Ви впевнені що хочете назавжди \n видалити склад${
            selected?.length === 1 ? "" : "и"
          }?`}
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
        {data?.map(({ id, title, description }, i) => (
          <Row
            key={id}
            selected={selected.includes(id)}
            onSelect={() => onSelect(id)}
            className={i % 2 === 1 ? "grey" : ""}
            id={id}
            title={title}
            description={description}
            onDelete={() => handleOpenDeleteModal(id)}
          />
        ))}
      </Table>
    </StyledStoragesTable>
  );
};

const StyledStoragesTable = styled.div`
  .header-text {
    span {
      max-width: 50px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`;
