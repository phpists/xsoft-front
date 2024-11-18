import styled from "styled-components";
import { Checkbox } from "../../../../components/Checkbox";
import { ProfileRow } from "../../../../components/ProfileRow/ProfileRow";
import { PhoneRow } from "../../../../components/PhoneRow";
import { Actions } from "../../../../components/Actions/Actions";
import { Avatar } from "../../../../components/Avatar/Avatar";

interface Props {
  selected: boolean;
  onSelect: () => void;
  className?: string;
}

export const Row = ({ selected, onSelect, className }: Props) => (
  <>
    <Checkbox checked={selected} onClick={onSelect} className={className} />
    <StyledRow className={className}>
      <div className="flex items-center gap-2">
        <Avatar />
        <span>Фіксуючий лак для волосся</span>
      </div>
    </StyledRow>
    <StyledRow className={className}>PRD-001</StyledRow>
    <StyledRow className={className}>Стайлінг</StyledRow>
    <StyledRow className={className}>Склад 2</StyledRow>
    <StyledRow className={className}>20%</StyledRow>
    <StyledRow className={className}>шт</StyledRow>
    <StyledRow className={className}>200 ₴</StyledRow>
    <StyledRow className={`${className} p-0`}>
      <Actions
        options={[
          { title: "Додати в чорний список", onClick: () => null },
          { title: "Заборонити онлайн запис", onClick: () => null },
          { title: "Дозволити борг", onClick: () => null },
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
