import styled from "styled-components";
import { Checkbox } from "../../../../components/Checkbox";

import { Actions } from "../../../../components/Actions/Actions";
import { Avatar } from "../../../../components/Avatar/Avatar";
import { useNavigate } from "react-router-dom";

interface Props {
  selected: boolean;
  onSelect: () => void;
  className?: string;
  title: string;
  description: string;
  createdAt: string;
  id: number;
  onDelete: () => void;
  color: string;
}

export const Row = ({
  selected,
  onSelect,
  className,
  title,
  description,
  createdAt,
  id,
  onDelete,
  color,
}: Props) => {
  const navigate = useNavigate();

  return (
    <>
      <Checkbox checked={selected} onClick={onSelect} className={className} />
      <StyledRow className={className}>
        <div className="flex items-center gap-2">
          <Avatar
            firstName={title?.split(" ")?.[0]}
            lastName={title?.split(" ")?.[1]}
            color={color}
          />
          <span>{title}</span>
        </div>
      </StyledRow>
      <StyledRow className={className}>{createdAt}</StyledRow>
      <StyledRow className={`${className} p-0`}>
        <Actions
          options={[
            { title: "Редагувати", onClick: () => navigate(`/brand/${id}`) },
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
