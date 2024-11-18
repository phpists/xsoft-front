import { useEffect, useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input/Input";
import { Modal } from "../Modal/Modal";
import { Title } from "./Title";
import {
  useLazyAddCategoryQuery,
  useLazyEditCategoryQuery,
} from "../../store/products/products.api";
import { showMessage } from "../../helpers";

interface Props {
  onClose: () => void;
  onSucess?: () => void;
  category?: { title: string; id: number };
}

export const CategoryModal = ({ onClose, onSucess, category }: Props) => {
  const [title, setTitle] = useState("");
  const [addIcon, setAddIcon] = useState(false);
  const [addCategory] = useLazyAddCategoryQuery();
  const [editCategory] = useLazyEditCategoryQuery();
  const [loading, setLoading] = useState(false);

  const handleCreate = () => {
    addCategory(title).then((resp) => {
      if (resp.isError) {
        showMessage("error", "Помилка");
      } else {
        showMessage("success", "Категорія успішно збережена");
        onSucess && onSucess();
        onClose();
      }
    });
  };

  const handleEdit = () => {
    editCategory({ title, id: category?.id ?? "" }).then((resp) => {
      if (resp.isError) {
        showMessage("error", "Помилка");
      } else {
        showMessage("success", "Категорія успішно збережена");
        onSucess && onSucess();
        onClose();
      }
    });
  };

  const handleSave = () => {
    setLoading(true);
    !!category ? handleEdit() : handleCreate();
  };

  useEffect(() => {
    setTitle(category?.title ?? "");
  }, [category]);

  return (
    <Modal onClose={onClose}>
      <Title category={!!category} />
      <Input
        label="Назва категорії"
        className="mb-2"
        value={title}
        onChange={(val) => setTitle(val?.toString())}
      />
      {/* <div className="mb-4">
        <AddButton title="Додати іконку" />
      </div>
      <Icons /> */}
      <Button
        title="Зберігти"
        onClick={handleSave}
        className="mt-6"
        disabled={title?.length === 0 || loading}
        loading={loading}
      />
    </Modal>
  );
};
