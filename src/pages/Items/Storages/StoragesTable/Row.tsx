import styled from "styled-components";
import { Checkbox } from "../../../../components/Checkbox";
import { Actions } from "../../../../components/Actions/Actions";
import { Avatar } from "../../../../components/Avatar/Avatar";
import { useNavigate } from "react-router-dom";

interface Props {
  selected: boolean;
  onSelect: () => void;
  className?: string;
  id: number;
  title: string;
  description: string;
  onDelete: () => void;
}

export const Row = ({
  selected,
  onSelect,
  className,
  id,
  title,
  description,
  onDelete,
}: Props) => {
  const navigate = useNavigate();

  return (
    <>
      <Checkbox checked={selected} onClick={onSelect} className={className} />
      <StyledRow
        className={className}
        onClick={() => navigate(`/storage/${id}`)}
      >
        <div className="flex items-center gap-2">
          <Avatar firstName={title} />
          <span>{title}</span>
        </div>
      </StyledRow>
      <StyledRow
        className={className}
        onClick={() => navigate(`/storage/${id}`)}
      >
        <span>{description ?? "-"}</span>
      </StyledRow>
      <StyledRow className={`${className} p-0`}>
        <Actions
          options={[
            { title: "Редагувати", onClick: () => navigate(`/storage/${id}`) },
            { title: "Видалити", onClick: onDelete },
          ]}
        />
      </StyledRow>
    </>
  );
};

const StyledRow = styled.div`
  padding: 8px;
  display: flex;
  align-items: center;
  height: 40px;
  cursor: pointer;
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
