import { useState } from "react";
import { BiTrash } from "react-icons/bi";
import { Confirm } from "../../../../../components/Confirm";
import { useLazyDeleteClientsQuery } from "../../../../../store/clients/clients.api";
import { useNavigate, useParams } from "react-router-dom";
import { showMessage } from "../../../../../helpers";

export const DeleteButton = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [deleteClient] = useLazyDeleteClientsQuery();

  const handleDelete = () => {
    setModal(false);
    deleteClient([id]).then((resp) => {
      if (resp.isError) {
        showMessage("error", "Помилка видалення клієнта");
      } else {
        showMessage("success", "Клієнта успішно видалено");
        navigate("/clients");
      }
    });
  };

  return (
    <>
      {modal && (
        <Confirm
          title="Видалення клієнта"
          subtitle={`Ви впевнені що хочете назавжди \n видалити клієнта?`}
          submitText="Видалити клієнта"
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
