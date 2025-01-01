import { useState } from "react";
import { BiTrash } from "react-icons/bi";
import { Confirm } from "../../../../../components/Confirm";
import { useNavigate, useParams } from "react-router-dom";
import { showMessage } from "../../../../../helpers";
import { useLazyDeleteCashQuery } from "../../../../../store/finance/finance.api";

export const DeleteButton = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [deleteCash] = useLazyDeleteCashQuery();

  const handleDelete = () => {
    setModal(false);
    deleteCash(id).then((resp) => {
      if (resp.isError) {
        showMessage("error", "Помилка видалення");
      } else {
        showMessage("success", "Успішно видалено");
        navigate("/finance");
      }
    });
  };

  return (
    <>
      {modal && (
        <Confirm
          title="Видалення касси"
          subtitle={`Ви впевнені що хочете назавжди \n видалити кассу?`}
          submitText="Видалити кассу"
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
