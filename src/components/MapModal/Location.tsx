import styled from "styled-components";

interface Props {
  location: string;
}

export const Location = ({ location }: Props) => (
  <StyledLocation>{location}</StyledLocation>
);

const StyledLocation = styled.div`
  font-size: 20px;
  font-weight: 700;
  line-height: 22.4px;
  color: #111111;
  margin: 20px 0 ;
  text-align: center;
`;
