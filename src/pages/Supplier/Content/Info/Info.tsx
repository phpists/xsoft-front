import styled from "styled-components";
import { Empty } from "./Empty";
import { Profile } from "./Profile";
import { Location } from "../../../../components/Location";

interface Props {
  firstName: string;
  lastName: string;
  color: string;
}

export const Info = ({ firstName, lastName, color }: Props) => {
  return (
    <StyledInfo>
      {/* <Empty /> */}
      {firstName?.length === 0 && lastName?.length === 0 ? <Empty /> : null}
      {firstName?.length > 0 || lastName?.length > 0 ? (
        <Profile title={`${firstName ?? ""} ${lastName ?? ""}`} color={color} />
      ) : null}
    </StyledInfo>
  );
};

const StyledInfo = styled.div`
  border-right: 1px solid #dbdbdb;
  padding: 14px;
`;
