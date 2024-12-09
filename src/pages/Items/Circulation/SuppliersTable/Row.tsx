import styled from "styled-components";
import { Checkbox } from "../../../../components/Checkbox";
import { Actions } from "../../../../components/Actions/Actions";
import { Avatar } from "../../../../components/Avatar/Avatar";
import { ProfileRow } from "../../../../components/ProfileRow/ProfileRow";
import { PhoneRow } from "../../../../components/PhoneRow";
import { useNavigate } from "react-router-dom";

interface Props {
  selected: boolean;
  onSelect: () => void;
  className?: string;
  title: string;
  date: string;
  type: string;
  warehouse: string;
  count: number;
  costPrice: number;
  retailPrice: number;
  id: number;
}

export const Row = ({
  selected,
  onSelect,
  className,
  title,
  date,
  type,
  warehouse,
  count,
  costPrice,
  retailPrice,
  id,
}: Props) => {
  const navigate = useNavigate();

  return (
    <>
      <Checkbox checked={selected} onClick={onSelect} className={className} />
      <StyledRow className={className}>
        <div className="flex items-center gap-2">
          <Avatar firstName={title?.[0]} lastName={title?.[1]} />{" "}
          <span>{title}</span>
        </div>
      </StyledRow>
      <StyledRow className={className}>{date}</StyledRow>
      <StyledRow className={className}>{type}</StyledRow>
      <StyledRow className={className}>{warehouse}</StyledRow>
      <StyledRow className={className}>{costPrice * count} ₴</StyledRow>
      <StyledRow className={className}>{retailPrice * count} ₴</StyledRow>

      <StyledRow className={`${className} p-0`}>
        {type === "Прихід" ? (
          <Actions
            options={[
              {
                title: "Редагувати",
                onClick: () => navigate(`/items?movements=true&id=${id}`),
              },
              //   { title: "Заборонити онлайн запис", onClick: () => null },
              //   { title: "Дозволити борг", onClick: () => null },
            ]}
          />
        ) : null}
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
