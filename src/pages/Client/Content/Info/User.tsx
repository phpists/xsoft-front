import styled from "styled-components";
import { Avatar } from "../../../../components/Avatar/Avatar";
import { useParams } from "react-router-dom";

interface Props {
  color: string;
  firstName: string;
  lastName: string;
}

export const User = ({ color, firstName, lastName }: Props) => {
  const { id } = useParams();
  return (
    <StyledUser className="flex items-center gap-2">
      <Avatar
        size={46}
        className="avatar"
        color={color}
        firstName={firstName}
        lastName={lastName}
      />
      <div>
        <div className="title mb-1 truncate ">
          {firstName} {lastName}
        </div>
        {id ? <div className="subtitle">#{id}</div> : null}
      </div>
    </StyledUser>
  );
};

const StyledUser = styled.div`
  margin-bottom: 14px;
  .avatar {
    font-size: 18px;
    font-weight: 600;
    line-height: 25.2px;
    letter-spacing: 0.02em;
  }
  .title {
    font-size: 16px;
    font-weight: 500;
    line-height: 22.4px;
    max-width: 200px;
  }
  .subtitle {
    font-size: 14px;
    font-weight: 400;
    line-height: 19.6px;
    color: #737373;
  }
`;
