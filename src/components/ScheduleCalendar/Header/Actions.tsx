import { useState } from "react";
import { Button } from "../../Button";
import { ScheduleModal } from "../ScheduleModal";

interface Props {
  onSelect: () => void;
}

export const Actions = ({ onSelect }: Props) => {
  const [modal, setModal] = useState(false);

  return (
    <div className="flex items-center gap-3.5">
      {modal ? <ScheduleModal onClose={() => setModal(false)} /> : null}
      <Button title="Обрати" type="light" onClick={onSelect} />
      <Button title="Новий графік" onClick={() => setModal(true)} />
    </div>
  );
};
