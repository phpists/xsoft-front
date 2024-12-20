import { useState } from "react";
import {
  CASH_CATEGORIES_TYPES,
  FinanceItemModal,
} from "../../../../components/FinanceItemModal/FinanceItemModal";
import { Table } from "../../../../components/Table/Table";
import { CashCategoriesResponse } from "../../../../types/finance";
import { Row } from "./Row";
import { useLazyDeleteCashCategoryQuery } from "../../../../store/finance/finance.api";
import { showMessage } from "../../../../helpers";
import { Confirm } from "../../../../components/Confirm";

const COLUMNS = [
  { title: "Назва", sortable: false },
  { title: "Тип", sortable: false },
];

interface Props {
  selected: number[];
  onSelect: (id: number) => void;
  onSelectAll: () => void;
  data: CashCategoriesResponse | undefined;
  onRefetchData: () => void;
  onDelete: (ids: number[], clearSelected?: boolean) => void;
}

export const ResourceTable = ({
  selected,
  onSelect,
  onSelectAll,
  data,
  onRefetchData,
  onDelete,
}: Props) => {
  const [edit, setEdit] = useState<
    undefined | { title: string; type_id: number; id: number }
  >();
  const [modal, setModal] = useState(false);
  const [deleteCashCategories] = useLazyDeleteCashCategoryQuery();
  const [selectedCategory, setSelectedCategory] = useState<number | undefined>(
    undefined
  );

  const getEnding = (ids: number[]) => (ids?.length === 1 ? "ю" : "і");

  const handleDelete = (ids: number[], isSelected?: boolean) => {
    setModal(false);
    deleteCashCategories(ids).then((resp) => {
      if (resp.isError) {
        showMessage("error", `Помилка видалення`);
      } else {
        showMessage("success", `Успішно видалено`);
        onDelete(ids, isSelected);
        onRefetchData();
      }
    });
  };

  const handleOpenDeleteModal = (id?: number) => {
    setModal(true);
    setSelectedCategory(id);
  };

  return (
    <>
      {" "}
      {modal && (
        <Confirm
          title={`Видалення статт${getEnding(
            selectedCategory ? [selectedCategory] : selected
          )}`}
          subtitle={`Ви впевнені що хочете назавжди \n видалити статт${getEnding(
            selectedCategory ? [selectedCategory] : selected
          )}?`}
          submitText={`Видалити`}
          onClose={() => setModal(false)}
          onSubmit={() =>
            handleDelete(selectedCategory ? [selectedCategory] : selected, true)
          }
        />
      )}
      {edit ? (
        <FinanceItemModal
          onClose={() => setEdit(undefined)}
          editData={edit}
          onRefetchData={onRefetchData}
        />
      ) : null}
      <Table
        columns={COLUMNS}
        selected={selected?.length}
        onSelectAll={onSelectAll}
        allCount={data?.response?.cash_categories?.length}
        onDeleteSelected={handleOpenDeleteModal}
      >
        {data
          ? [...data?.response?.cash_categories]
              ?.reverse()
              ?.map(({ id, title, type_id }, i) => (
                <Row
                  key={i}
                  selected={selected.includes(id)}
                  onSelect={() => onSelect(id)}
                  className={i % 2 === 1 ? "grey" : ""}
                  title={title}
                  type={
                    CASH_CATEGORIES_TYPES?.find(
                      (c) => c.value === type_id?.toString()
                    )?.title
                  }
                  onEdit={() => setEdit({ id, title, type_id })}
                  onDelete={() => handleOpenDeleteModal(id)}
                />
              ))
          : null}
      </Table>
    </>
  );
};
