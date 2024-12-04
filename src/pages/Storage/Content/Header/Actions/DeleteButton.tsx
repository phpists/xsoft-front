import { useState } from "react";
import { BiTrash } from "react-icons/bi";
import { Confirm } from "../../../../../components/Confirm";
import { useNavigate, useParams } from "react-router-dom";
import { showMessage } from "../../../../../helpers";
import { useLazyDeleteWarehousesQuery } from "../../../../../store/warehouses/warehouses.api";

export const DeleteButton = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [deleteStorages] = useLazyDeleteWarehousesQuery();

  const handleDelete = () => {
    setModal(false);
    deleteStorages([id]).then((resp) => {
      if (resp.isError) {
        showMessage("error", "Помилка видалення складу");
      } else {
        showMessage("success", "Склад успішно видалено");
        navigate("/items");
      }
    });
  };

  return (
    <>
      {modal && (
        <Confirm
          title="Видалення складу"
          subtitle={`Ви впевнені що хочете назавжди \n видалити склад?`}
          submitText="Видалити склад"
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
