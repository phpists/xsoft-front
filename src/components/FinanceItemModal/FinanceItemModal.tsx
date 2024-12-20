import styled from "styled-components";
import { Modal } from "../Modal/Modal";
import { Title } from "./Title";
import { Input } from "../Input/Input";
import { Select } from "../Select/Select";
import { Button } from "../Button";
import {
  useLazyAddCashCategoryQuery,
  useLazyEditCashCategoryQuery,
} from "../../store/finance/finance.api";
import { useEffect, useState } from "react";
import { showMessage } from "../../helpers";

interface Props {
  onClose: () => void;
  editData?: { title: string; type_id: number; id: number };
  onRefetchData?: () => void;
}

export const CASH_CATEGORIES_TYPES = [
  { title: "Витрати", value: "1" },
  { title: "Системний", value: "2" },
  { title: "Дохід", value: "3" },
];

export const FinanceItemModal = ({
  onClose,
  editData,
  onRefetchData,
}: Props) => {
  const [addCashCategory] = useLazyAddCashCategoryQuery();
  const [editCashCategory] = useLazyEditCashCategoryQuery();
  const [title, setTitle] = useState("");
  const [type, setType] = useState("1");
  const [loading, setLoading] = useState(false);

  const handleCreate = () => {
    addCashCategory({
      title,
      type_id: type,
    }).then((resp) => {
      if (resp.isError) {
        showMessage("error", "Помилка");
      } else {
        showMessage("success", "Статтю успішно створено");
        onClose();
        onRefetchData && onRefetchData();
      }
    });
  };

  const handleEdit = () => {
    editCashCategory({
      title,
      type_id: type,
      id: editData?.id,
    }).then((resp) => {
      if (resp.isError) {
        showMessage("error", "Помилка");
      } else {
        showMessage("success", "Статтю успішно збережено");
        onClose();
        onRefetchData && onRefetchData();
      }
    });
  };

  const handleSave = () => {
    onClose();
    setLoading(true);
    editData ? handleEdit() : handleCreate();
  };

  useEffect(() => {
    setTitle(editData?.title ?? "");
    setType(editData?.type_id?.toString() ?? "1");
  }, [editData]);

  return (
    <StyledFinanceItemModal>
      <Modal onClose={onClose}>
        <div>
          <Title edit={!!editData} />
          <Input
            label="Назва"
            className="mb-2.5"
            value={title}
            onChange={(val) => setTitle(val?.toString())}
          />
          <Select
            label="Тип"
            options={CASH_CATEGORIES_TYPES}
            className="mb-2.5"
            value={type}
            onChange={(val) => setType(val?.toString())}
          />
          <Button
            title={!!editData ? "Зберегти" : "Створити"}
            onClick={handleSave}
            disabled={loading || title?.length === 0}
            loading={loading}
          />
        </div>
      </Modal>
    </StyledFinanceItemModal>
  );
};

const StyledFinanceItemModal = styled.div``;
