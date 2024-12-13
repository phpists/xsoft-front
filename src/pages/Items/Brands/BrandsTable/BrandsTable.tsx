import styled from "styled-components";
import { Table } from "../../../../components/Table/Table";
import { Row } from "./Row";
import { IBrandResponse } from "../../../../types/brands";
import { useState } from "react";
import { formatResponseDate, showMessage } from "../../../../helpers";
import { Confirm } from "../../../../components/Confirm";
import { useLazyDeleteBrandsQuery } from "../../../../store/brands/brands.api";

const COLUMNS = [
  { title: "Назва", sortable: true, className: "w-full" },
  { title: "Дата", sortable: true },
];

interface Props {
  selected: number[];
  onSelect: (id: number) => void;
  onSelectAll: () => void;
  data: IBrandResponse[];
  loading: boolean;
  onDelete: (ids: number[], clearSelected?: boolean) => void;
}

export const BrandsTable = ({
  selected,
  onSelect,
  onSelectAll,
  data,
  loading,
  onDelete,
}: Props) => {
  const [modal, setModal] = useState(false);
  const [deleteBrands] = useLazyDeleteBrandsQuery();
  const [selectedProduct, setSelectedProduct] = useState<number | undefined>(
    undefined
  );
  const getEnding = (ids: number[]) => (ids?.length === 1 ? "у" : "и");

  const handleDelete = (ids: number[], isSelected?: boolean) => {
    setModal(false);
    deleteBrands(ids).then((resp) => {
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
    <>
      {" "}
      {modal && (
        <Confirm
          title={`Видалення бренд${getEnding(selected)}`}
          subtitle={`Ви впевнені що хочете назавжди \n видалити бренд${
            selected?.length === 0 ? "" : getEnding(selected)
          }?`}
          submitText={`Видалити`}
          onClose={() => setModal(false)}
          onSubmit={() =>
            handleDelete(selectedProduct ? [selectedProduct] : selected, true)
          }
        />
      )}
      <StyledBrandsTable>
        <Table
          columns={COLUMNS}
          selected={selected?.length}
          onSelectAll={onSelectAll}
          allCount={data.length}
          className="table-wrapper"
          onDeleteSelected={handleOpenDeleteModal}
        >
          {data?.map(({ id, title, description, created_at, color }, i) => (
            <Row
              key={id}
              selected={selected.includes(id)}
              onSelect={() => onSelect(id)}
              className={i % 2 === 1 ? "grey" : ""}
              title={title}
              description={description}
              createdAt={formatResponseDate(created_at)}
              id={id}
              onDelete={() => handleOpenDeleteModal(id)}
              color={color}
            />
          ))}
        </Table>
      </StyledBrandsTable>
    </>
  );
};

const StyledBrandsTable = styled.div`
  .table-wrapper {
    grid-template-columns: 40px 1fr max-content max-content;
  }
`;
