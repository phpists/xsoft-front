import { useState } from "react";
import { BiTrash } from "react-icons/bi";
import { Confirm } from "../../../../../components/Confirm";
import { useLazyDeleteClientsQuery } from "../../../../../store/clients/clients.api";
import { useNavigate, useParams } from "react-router-dom";
import { showMessage } from "../../../../../helpers";
import { useLazyDeleteStaffQuery } from "../../../../../store/personal/personal.api";

export const DeleteButton = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [deletePersonal] = useLazyDeleteStaffQuery();

  const handleDelete = () => {
    setModal(false);
    deletePersonal([id]).then((resp) => {
      if (resp.isError) {
        showMessage("error", "Помилка видалення працівника");
      } else {
        showMessage("success", "Працівника успішно видалено");
        navigate("/pesonal");
      }
    });
  };

  return (
    <>
      {modal && (
        <Confirm
          title="Видалення працівника"
          subtitle={`Ви впевнені що хочете назавжди \n видалити працівника?`}
          submitText="Видалити працівника"
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
