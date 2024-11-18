import styled from "styled-components";
import { Avatar } from "../Avatar/Avatar";
import { Name } from "./Name";
import { Id } from "./Id";

interface Props {
  className?: string;
  title?: string;
  firstName?: string;
  lastName?: string;
  color?: string;
  id?: number;
}

export const ProfileRow = ({
  className,
  title,
  id,
  firstName,
  lastName,
  color,
}: Props) => (
  <StyledProfileRow
    className={`flex items-center justify-between gap-2 ${className}`}
  >
    <div className="flex items-center gap-2">
      <Avatar firstName={firstName} lastName={lastName} color={color} />
      <Name
        title={firstName || lastName ? `${firstName} ${lastName}` : title}
      />
    </div>
    {id ? <Id id={id} /> : null}
  </StyledProfileRow>
);

const StyledProfileRow = styled.div`
  padding: 8px;
`;
