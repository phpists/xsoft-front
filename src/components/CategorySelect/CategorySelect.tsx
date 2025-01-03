import styled from "styled-components";
import { Option, Select } from "../Select/Select";
import { BiCube } from "react-icons/bi";
import { CategoryModal } from "../CategoryModal/CategoryModal";
import { useState } from "react";

interface Props {
  label: string;
  noAddButton?: boolean;
  options?: Option[];
  value?: string | number;
  onChange?: (val: string | number) => void;
  error?: boolean;
  onSuccessfulAdCategory?: () => void;
  className?: string;
  company?: boolean;
}

export const CategorySelect = ({
  label,
  noAddButton,
  options,
  value,
  onChange,
  error,
  onSuccessfulAdCategory,
  className,
  company,
}: Props) => {
  const [modal, setModal] = useState(false);

  return (
    <StyledCategorySelect className={className}>
      {modal && (
        <CategoryModal
          onClose={() => setModal(false)}
          onSucess={onSuccessfulAdCategory}
          company={company}
        />
      )}
      <Select
        label={label}
        options={options ?? []}
        value={value}
        onChange={onChange}
        dropdownButton={noAddButton ? undefined : "Додати категорію"}
        onClickDropdownButton={() => setModal(true)}
        Icon={<BiCube size={20} />}
        search
        error={error}
      />
    </StyledCategorySelect>
  );
};

const StyledCategorySelect = styled.button`
  width: 100%;
`;
