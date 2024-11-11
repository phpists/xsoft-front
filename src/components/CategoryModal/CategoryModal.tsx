import { useState } from "react";
import { AddButton } from "../AddButton";
import { Button } from "../Button";
import { Input } from "../Input/Input";
import { Modal } from "../Modal/Modal";
import { Title } from "./Title";
import { Icons } from "./Icons";

interface Props {
  onClose: () => void;
}

export const CategoryModal = ({ onClose }: Props) => {
  const [addIcon, setAddIcon] = useState(false);

  return (
    <Modal onClose={onClose}>
      <Title />
      <Input label="Назва категорії" className="mb-2" />
      <div className="mb-4">
        <AddButton title="Додати іконку" />
      </div>
      <Icons />
      <Button title="Зберігти" onClick={onClose} className="mt-6" />
    </Modal>
  );
};
