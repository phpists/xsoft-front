import styled from "styled-components";

export const Name = () => (
  <StyledName title="Ольга Михайлова">Ольга Михайлова</StyledName>
);

const StyledName = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 19.6px;
  color: #111111;
  max-width: 103px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
