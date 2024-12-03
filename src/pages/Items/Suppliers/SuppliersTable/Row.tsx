import styled from "styled-components";
import { Checkbox } from "../../../../components/Checkbox";
import { Actions } from "../../../../components/Actions/Actions";
import { Avatar } from "../../../../components/Avatar/Avatar";
import { ProfileRow } from "../../../../components/ProfileRow/ProfileRow";
import { PhoneRow } from "../../../../components/PhoneRow";
import { NavLink, useNavigate } from "react-router-dom";

interface Props {
  selected: boolean;
  onSelect: () => void;
  className?: string;
  firstName: string;
  lastName: string;
  color: string;
  phone: string;
  comment: string;
  id: number;
  onDelete: () => void;
}

export const Row = ({
  selected,
  onSelect,
  className,
  firstName,
  lastName,
  color,
  phone,
  comment,
  id,
  onDelete,
}: Props) => {
  const navigate = useNavigate();

  return (
    <>
      <Checkbox checked={selected} onClick={onSelect} className={className} />
      <NavLink to={`/supplier/${id}`}>
        {" "}
        <ProfileRow
          className={className}
          id={124}
          firstName={firstName}
          lastName={lastName}
          color={color}
        />
      </NavLink>
      <PhoneRow className={className} phone={phone} />
      <StyledRow className={className}>{comment}</StyledRow>

      <StyledRow className={`${className} p-0`}>
        <Actions
          options={[
            { title: "Редагувати", onClick: () => navigate(`/supplier/${id}`) },
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
