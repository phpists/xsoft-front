import styled from "styled-components";
import { Checkbox } from "../../../../components/Checkbox";
import { ProfileRow } from "../../../../components/ProfileRow/ProfileRow";
import { PhoneRow } from "../../../../components/PhoneRow";
import { Actions } from "../../../../components/Actions/Actions";

interface Props {
  selected: boolean;
  onSelect: () => void;
  className?: string;
}

export const Row = ({ selected, onSelect, className }: Props) => (
  <>
    <Checkbox checked={selected} onClick={onSelect} className={className} />
    <ProfileRow className={className} />
    <PhoneRow className={className} />
    <StyledRow className={className}>bluecloud8765@gmail.com</StyledRow>
    <StyledRow className={className}>678.00 ₴</StyledRow>
    <StyledRow className={className}>2</StyledRow>
    <StyledRow className={className}>2%</StyledRow>
    <StyledRow className={className}>27.04.2023</StyledRow>
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
  .p-0 {
    padding: 0 !important;
  }
`;
