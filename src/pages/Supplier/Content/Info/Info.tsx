import styled from "styled-components";
import { Empty } from "./Empty";
import { Profile } from "./Profile";
import { Location } from "../../../../components/Location";

interface Props {
  title: string;
  color: string;
}

export const Info = ({ title, color }: Props) => {
  return (
    <StyledInfo>
      {/* <Empty /> */}
      {title?.length === 0 ? <Empty /> : null}
      {title?.length > 0 ? <Profile title={title} color={color} /> : null}
      <Location location="Львів, Дрогобич" className="mt-2.5 mb-6" />
    </StyledInfo>
  );
};

const StyledInfo = styled.div`
  border-right: 1px solid #dbdbdb;
  padding: 14px;
`;
