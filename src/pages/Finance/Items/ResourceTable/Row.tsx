import styled from "styled-components";
import { Checkbox } from "../../../../components/Checkbox";
import { Actions } from "../../../../components/Actions/Actions";

interface Props {
  selected: boolean;
  onSelect: () => void;
  className?: string;
  title: string;
  type?: string;
  onEdit: () => void;
  onDelete: () => void;
}

export const Row = ({
  selected,
  onSelect,
  className,
  title,
  type,
  onEdit,
  onDelete,
}: Props) => (
  <>
    <Checkbox checked={selected} onClick={onSelect} className={className} />
    <StyledRow className={className}>{title}</StyledRow>
    <StyledRow className={className}>{type}</StyledRow>
    <StyledRow className={`${className} p-0`}>
      <Actions
        options={[
          { title: "Редагувати", onClick: onEdit },
          { title: "Видалити", onClick: onDelete },
        ]}
      />
    </StyledRow>
  </>
);

const StyledRow = styled.div`
  padding: 8px;
  display: flex;
  align-items: center;
  height: 40px;
  span {
    max-width: 208px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .p-0 {
    padding: 0 !important;
  }
`;
