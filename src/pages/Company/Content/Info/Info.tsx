import styled from "styled-components";
import { Empty } from "./Empty";
import { Company } from "./Company";
import { Media } from "../../../../components/Media/Media";
import { Locations } from "./Locations/Locations";

export const Info = () => {
  return (
    <StyledInfo>
      {/* <Empty /> */}
      <Company />
      <Locations />
      <Media />
    </StyledInfo>
  );
};

const StyledInfo = styled.div`
  border-right: 1px solid #dbdbdb;
  padding: 14px;
`;
