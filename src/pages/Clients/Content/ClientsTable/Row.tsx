import styled from "styled-components";
import { Checkbox } from "../../../../components/Checkbox";
import { ProfileRow } from "../../../../components/ProfileRow/ProfileRow";
import { PhoneRow } from "../../../../components/PhoneRow";
import { Actions } from "../../../../components/Actions/Actions";
import { useNavigate } from "react-router-dom";

interface Props {
  selected: boolean;
  onSelect: () => void;
  className?: string;
  category: string;
  firstName: string;
  lastName: string;
  phone: string;
  color?: string;
  id: number;
  onDelete: () => void;
  comment?: string;
}

export const Row = ({
  selected,
  onSelect,
  className,
  category,
  firstName,
  lastName,
  phone,
  color,
  id,
  onDelete,
  comment,
}: Props) => {
  const navigate = useNavigate();

  return (
    <>
      <Checkbox checked={selected} onClick={onSelect} className={className} />
      <div onClick={() => navigate(`/client/${id}`)} className="cursor-pointer">
        {" "}
        <ProfileRow
          className={className}
          firstName={firstName}
          lastName={lastName}
          color={color}
          id={id}
        />
      </div>
      <PhoneRow className={className} phone={phone} />
      {/* <StyledRow className={className}>bluecloud8765@gmail.com</StyledRow> */}
      <StyledRow className={className}>{comment}</StyledRow>
      {/* <StyledRow className={className}>-</StyledRow> */}
      <StyledRow className={className}>-</StyledRow>
      <StyledRow className={className}>-</StyledRow>
      <StyledRow className={`${className} p-0`}>
        <Actions
          options={[
            { title: "Редагувати", onClick: () => navigate(`/client/${id}`) },
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
  .p-0 {
    padding: 0 !important;
  }
`;
