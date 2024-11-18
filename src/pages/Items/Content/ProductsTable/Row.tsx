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
  color: string;
  article: string;
  category?: string;
  vendors?: string;
  measure?: string;
  price: number;
  balance: number;
  onDelete: () => void;
  id: number;
}

export const Row = ({
  selected,
  onSelect,
  className,
  title,
  color,
  article,
  category,
  vendors,
  measure,
  price,
  balance,
  onDelete,
  id,
}: Props) => {
  const navigate = useNavigate();

  return (
    <>
      <Checkbox checked={selected} onClick={onSelect} className={className} />
      <StyledRow className={className}>
        <div className="flex items-center gap-2">
          <Avatar color={color} firstName={title?.[0]} lastName={title?.[1]} />
          <span>{title}</span>
        </div>
      </StyledRow>
      <StyledRow className={className}>{article}</StyledRow>
      <StyledRow className={className}>{category ?? ""}</StyledRow>
      <StyledRow className={className}>
        <span>{vendors}</span>
      </StyledRow>
      <StyledRow className={className}>{balance}</StyledRow>
      <StyledRow className={className}>{measure}</StyledRow>
      <StyledRow className={className}>{price} ₴</StyledRow>
      <StyledRow className={`${className} p-0`}>
        <Actions
          options={[
            { title: "Редагувати", onClick: () => navigate(`/product/${id}`) },
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
  min-height: 40px;
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
