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
    <ProfileRow className={className} title="Назва" />
    <StyledRow className={className}>2</StyledRow>
    <StyledRow className={className}>
      <ColorTag title="Доступно" color="green" />
    </StyledRow>
    <StyledRow className={className}>10%</StyledRow>
    <StyledRow className={className}>Львів, Дрогобич</StyledRow>
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
