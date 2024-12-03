import styled from "styled-components";
import { Table } from "../../../../components/Table/Table";
import { Row } from "./Row";
import { ISupplierResponse } from "../../../../types/suppliers";
import { useLazyDeleteSuppliersQuery } from "../../../../store/suppliers/suppliers.api";
import { useState } from "react";
import { Confirm } from "../../../../components/Confirm";
import { showMessage } from "../../../../helpers";

interface Props {
  selected: number[];
  onSelect: (id: number) => void;
  onSelectAll: () => void;
  data: ISupplierResponse[];
  onSort: (val: string) => void;
  loading: boolean;
  onDelete: (ids: number[], clearSelected?: boolean) => void;
}

export const SuppliersTable = ({
  selected,
  onSelect,
  onSelectAll,
  data,
  onSort,
  loading,
  onDelete,
}: Props) => {
  const [modal, setModal] = useState(false);
  const [deleteSuppliers] = useLazyDeleteSuppliersQuery();
  const [selectedProduct, setSelectedProduct] = useState<number | undefined>(
    undefined
  );

  const COLUMNS = [
    {
      title: "Ім’я",
      sortable: true,
      className: "header-text",
      onClick: () => onSort("first_name"),
    },
    {
      title: "Телефон",
      sortable: true,
      className: "header-text",
      onClick: () => onSort("phones"),
    },
    {
      title: "Коментар",
      sortable: true,
      className: "header-text",
      onClick: () => onSort("comment"),
    },
  ];

  const getEnding = (ids: number[]) => (ids?.length === 1 ? "а" : "ів");

  const handleDelete = (ids: number[], isSelected?: boolean) => {
    setModal(false);
    deleteSuppliers(ids).then((resp) => {
      if (resp.isError) {
        showMessage("error", `Помилка видалення постачальник${getEnding(ids)}`);
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
    <>
      {modal && (
        <Confirm
          title={`Видалення постачальник${getEnding(
            selectedProduct ? [selectedProduct] : selected
          )}`}
          subtitle={`Ви впевнені що хочете назавжди \n видалити постачальник${getEnding(
            selected
          )}?`}
          submitText={`Видалити постачальник${getEnding(
            selectedProduct ? [selectedProduct] : selected
          )}`}
          onClose={() => setModal(false)}
          onSubmit={() =>
            handleDelete(selectedProduct ? [selectedProduct] : selected, true)
          }
        />
      )}
      <StyledSuppliersTable>
        <Table
          columns={COLUMNS}
          selected={selected?.length}
          onSelectAll={onSelectAll}
          allCount={data.length}
          loading={loading}
          onDeleteSelected={handleOpenDeleteModal}
        >
          {data?.map(
            ({ id, first_name, last_name, phones, color, comment }, i) => (
              <Row
                key={id}
                selected={selected.includes(id)}
                onSelect={() => onSelect(id)}
                className={i % 2 === 1 ? "grey" : ""}
                firstName={first_name}
                lastName={last_name}
                color={color}
                phone={phones?.[0]?.phone ?? "-"}
                comment={comment ?? "-"}
                id={id}
                onDelete={() => handleOpenDeleteModal(id)}
              />
            )
          )}
        </Table>
      </StyledSuppliersTable>
    </>
  );
};

const StyledSuppliersTable = styled.div`
  .header-text {
    span {
      max-width: 50px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`;
