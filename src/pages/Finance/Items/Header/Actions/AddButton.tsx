import styled from "styled-components";
import { BiPlus } from "react-icons/bi";
import { Button } from "../../../../../components/Button";
import { FinanceItemModal } from "../../../../../components/FinanceItemModal/FinanceItemModal";
import { useState } from "react";

interface Props {
  onRefetchData: () => void;
}

export const AddButton = ({ onRefetchData }: Props) => {
  const [modal, setModal] = useState(false);

  return (
    <>
      {" "}
      {modal ? (
        <FinanceItemModal
          onClose={() => setModal(false)}
          onRefetchData={onRefetchData}
        />
      ) : null}
      <StyledAddButton>
        <Button
          title="Створити нову статтю"
          Icon={<BiPlus />}
          onClick={() => setModal(true)}
        />
      </StyledAddButton>
    </>
  );
};

const StyledAddButton = styled.div`
  button {
    padding: 13px 14px;
    height: 40px;
    font-size: 12px;
  }
`;
