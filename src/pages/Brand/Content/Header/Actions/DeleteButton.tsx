import { useState } from "react";
import { BiTrash } from "react-icons/bi";
import { Confirm } from "../../../../../components/Confirm";
import { useNavigate, useParams } from "react-router-dom";
import { showMessage } from "../../../../../helpers";
import { useLazyDeleteBrandsQuery } from "../../../../../store/brands/brands.api";

export const DeleteButton = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [deleteBrands] = useLazyDeleteBrandsQuery();

  const handleDelete = () => {
    setModal(false);
    deleteBrands([id]).then((resp) => {
      if (resp.isError) {
        showMessage("error", "Помилка видалення бренду");
      } else {
        showMessage("success", "Бренд успішно видалено");
        navigate("/items");
      }
    });
  };

  return (
    <>
      {modal && (
        <Confirm
          title="Видалення бренду"
          subtitle={`Ви впевнені що хочете назавжди \n видалити бренд?`}
          submitText="Видалити бренд"
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
