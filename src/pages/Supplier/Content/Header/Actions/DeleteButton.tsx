import { useState } from "react";
import { BiTrash } from "react-icons/bi";
import { Confirm } from "../../../../../components/Confirm";
import { useNavigate, useParams } from "react-router-dom";
import { showMessage } from "../../../../../helpers";
import { useLazyDeleteProductsQuery } from "../../../../../store/products/products.api";
import { useLazyDeleteSuppliersQuery } from "../../../../../store/suppliers/suppliers.api";

export const DeleteButton = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [deleteSuppliers] = useLazyDeleteSuppliersQuery();

  const handleDelete = () => {
    setModal(false);
    deleteSuppliers([id]).then((resp) => {
      if (resp.isError) {
        showMessage("error", "Помилка видалення постачальника");
      } else {
        showMessage("success", "Постачальника успішно видалено");
        navigate("/items");
      }
    });
  };

  return (
    <>
      {modal && (
        <Confirm
          title="Видалення постачальника"
          subtitle={`Ви впевнені що хочете назавжди \n видалити постачальника?`}
          submitText="Видалити постачальника"
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
