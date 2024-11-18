import { useState } from "react";
import { AddButton } from "../pages/Client/Content/Profile/AddButton";
import { Input } from "./Input/Input";
import styled from "styled-components";

interface Props {
  onAdd?: (val: string) => void;
}

export const AddTag = ({ onAdd }: Props) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const handleClose = () => {
    if (value?.length > 0 && onAdd) {
      onAdd(value);
    }
    setOpen(false);
    setValue("");
  };
  return (
    <StyledAddTag>
      {open ? (
        <Input
          label=""
          value={value}
          onChange={(val) => setValue(val.toString())}
          onBlur={handleClose}
          onPressEnter={handleClose}
          autoFocus
          className="max-w-[100px] bg-white input-wrapper"
          noCheck
        />
      ) : (
        <AddButton title="Додати тег" onClick={() => setOpen(true)} />
      )}
    </StyledAddTag>
  );
};

const StyledAddTag = styled.div`
  .input-wrapper {
    padding: 0 !important;
    height: 30px;
    .input-content {
      padding: 5px;
    }
  }
`;
