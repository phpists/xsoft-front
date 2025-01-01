import styled from "styled-components";
import { Actions } from "../../../../../components/Actions/Actions";
import { useNavigate } from "react-router-dom";

interface Props {
  title: string;
  total: string;
  actions?: boolean;
  selected?: boolean;
  id?: number;
  onSelect?: () => void;
  onDelete?: () => void;
}

export const Card = ({
  title,
  total,
  actions,
  selected,
  onSelect,
  id,
  onDelete,
}: Props) => {
  const navigate = useNavigate();

  return (
    <StyledCard
      className={`flex flex-col justify-between ${selected && "selected"}`}
      onClick={onSelect}
    >
      <div className="title">{title}</div>
      <div className="flex items-center justify-between">
        <div>{total}</div>
        {actions ? (
          <Actions
            options={[
              {
                title: "Редагувати",
                onClick: () => navigate(`/register/${id}`),
              },
              { title: "Видалити", onClick: onDelete ? onDelete : () => null },
            ]}
          />
        ) : null}
      </div>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  border: 1px solid #dbdbdb;
  border-radius: 16px;
  height: 100%;
  position: relative;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  line-height: 22.4px;
  text-align: left;
  color: #111111;
  padding: 20px;
  background: #fff;
  min-width: 260px;
  width: 100%;
  border: 2px solid transparent;
  .title {
    text-align: right;
    font-size: 22px;
  }
  button {
    padding: 0;
    width: max-content;
    .dropdown {
      width: 150px;
      bottom: 100%;
      top: unset;
    }
  }
  &.selected {
    border: 2px solid #111111;
  }
`;
