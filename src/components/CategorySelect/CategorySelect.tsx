import styled from "styled-components";
import { Select } from "../Select/Select";
import { BiCube } from "react-icons/bi";
import { CategoryModal } from "../CategoryModal/CategoryModal";
import { useState } from "react";

interface Props {
  label: string;
}

export const CategorySelect = ({ label }: Props) => {
  const [modal, setModal] = useState(false);

  return (
    <StyledCategorySelect>
      {modal && <CategoryModal onClose={() => setModal(false)} />}
      <Select
        label={label}
        options={[
          { title: "Інстурументи барбера", value: "" },
          { title: "Аксесуари", value: "" },
        ]}
        dropdownButton="Додати категорію"
        onClickDropdownButton={() => setModal(true)}
        Icon={<BiCube size={20} />}
        search
      />
    </StyledCategorySelect>
  );
};

const StyledCategorySelect = styled.button`
  width: 100%;
`;
