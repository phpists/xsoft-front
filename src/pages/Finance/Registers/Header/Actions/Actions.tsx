import { BiCog, BiPlus } from "react-icons/bi";
import { Button } from "../../../../../components/Button";
import { Filter } from "./Filter/Filter";
import { NavLink } from "react-router-dom";
import { FinanceItemModal } from "../../../../../components/FinanceItemModal/FinanceItemModal";
import { useState } from "react";

export const Actions = () => {
  const [modal, setModal] = useState(false);

  return (
    <div className="flex items-center gap-3.5">
      {" "}
      {modal ? <FinanceItemModal onClose={() => setModal(false)} /> : null}
      <Button
        title="Створити нову статтю"
        Icon={<BiPlus />}
        onClick={() => setModal(true)}
      />
      <NavLink to="/register">
        {" "}
        <Button title="Нова каса" Icon={<BiPlus />} />
      </NavLink>
      <Filter />
      <button>
        <BiCog size={20} />
      </button>
    </div>
  );
};
