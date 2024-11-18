import { useState } from "react";
import { BiTrash } from "react-icons/bi";
import { Confirm } from "../../../../../components/Confirm";
import { useNavigate, useParams } from "react-router-dom";
import { showMessage } from "../../../../../helpers";
import { useLazyDeleteProductsQuery } from "../../../../../store/products/products.api";

export const DeleteButton = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [deleteProduct] = useLazyDeleteProductsQuery();

  const handleDelete = () => {
    setModal(false);
    deleteProduct([id]).then((resp) => {
      if (resp.isError) {
        showMessage("error", "Помилка видалення товару");
      } else {
        showMessage("success", "Товар успішно видалено");
        navigate("/items");
      }
    });
  };

  return (
    <>
      {modal && (
        <Confirm
          title="Видалення товар"
          subtitle={`Ви впевнені що хочете назавжди \n видалити товар?`}
          submitText="Видалити товар"
          onClose={() => setModal(false)}
          onSubmit={handleDelete}
        />
      )}
      <button className="p-0.5" onClick={() => setModal(true)}>
        <BiTrash size={20} />
      </button>
    </>
  );
};
