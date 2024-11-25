import { useState } from "react";
import { BiTrash } from "react-icons/bi";
import { Confirm } from "../../../../../components/Confirm";
import { useNavigate, useParams } from "react-router-dom";
import { showMessage } from "../../../../../helpers";
import { useLazyDeleteCompanyQuery } from "../../../../../store/companies/companies.api";
import { useActions } from "../../../../../hooks/actions";
import { useAppSelect } from "../../../../../hooks/redux";

export const DeleteButton = () => {
  const { id } = useParams();
  const { companies } = useAppSelect((state) => state.companies);
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [deleteCompany] = useLazyDeleteCompanyQuery();
  const { onSaveCompanies } = useActions();

  const handleDelete = () => {
    setModal(false);
    deleteCompany(id).then((resp) => {
      if (resp.isError) {
        showMessage("error", "Помилка видалення компанії");
      } else {
        onSaveCompanies(companies?.filter((c) => c.id?.toString() !== id));

        showMessage("success", "Компанію успішно видалено");
        navigate("/");
      }
    });
  };

  return (
    <>
      {modal && (
        <Confirm
          title="Видалення компанії"
          subtitle={`Ви впевнені що хочете назавжди \n видалити компанію?`}
          submitText="Видалити компанію"
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
