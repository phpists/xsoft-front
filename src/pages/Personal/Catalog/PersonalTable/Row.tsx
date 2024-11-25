import styled from "styled-components";
import { Checkbox } from "../../../../components/Checkbox";
import { ProfileRow } from "../../../../components/ProfileRow/ProfileRow";
import { PhoneRow } from "../../../../components/PhoneRow";
import { Actions } from "../../../../components/Actions/Actions";
import { ColorTag } from "../../../../components/ColorTag";
import { NavLink, useNavigate } from "react-router-dom";

interface Props {
  selected: boolean;
  onSelect: () => void;
  className?: string;
  firstName: string;
  lastName: string;
  color: string;
  id: number;
  role?: string;
  comment: string;
  onDelete: () => void;
}

export const Row = ({
  selected,
  onSelect,
  className,
  firstName,
  lastName,
  color,
  id,
  role,
  comment,
  onDelete,
}: Props) => {
  const navigate = useNavigate();

  return (
    <>
      <Checkbox checked={selected} onClick={onSelect} className={className} />
      <NavLink to={`/pesonal-profile/${id}`}>
        <ProfileRow
          className={className}
          firstName={firstName}
          lastName={lastName}
          color={color}
        />
      </NavLink>
      <StyledRow className={className}>{role}</StyledRow>
      <PhoneRow className={className} />
      {/* <StyledRow className={className}>
        <ColorTag title="Сплачено" color="green" />
      </StyledRow> */}
      <StyledRow className={className}>{comment ?? "-"}</StyledRow>
      <StyledRow className={className}>-</StyledRow>
      <StyledRow className={`${className} p-0`}>
        <Actions
          options={[
            { title: "Видалити", onClick: onDelete },
            {
              title: "Редагувати",
              onClick: () => navigate(`/pesonal-profile/${id}`),
            },
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
