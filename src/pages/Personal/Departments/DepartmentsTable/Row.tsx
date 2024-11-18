import styled from "styled-components";
import { Checkbox } from "../../../../components/Checkbox";
import { ProfileRow } from "../../../../components/ProfileRow/ProfileRow";
import { PhoneRow } from "../../../../components/PhoneRow";
import { Actions } from "../../../../components/Actions/Actions";
import { ColorTag } from "../../../../components/ColorTag";

interface Props {
  selected: boolean;
  onSelect: () => void;
  className?: string;
}

export const Row = ({ selected, onSelect, className }: Props) => (
  <>
    <Checkbox checked={selected} onClick={onSelect} className={className} />
    <ProfileRow className={className} title="Назва відділу" />
    <StyledRow className={className}>Львів</StyledRow>
    <StyledRow className={className}>Назва ресурсу</StyledRow>
    <StyledRow className={className}>Назва об'єкту</StyledRow>
    <ProfileRow className={className} />
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
