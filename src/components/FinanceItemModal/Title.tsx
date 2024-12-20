import styled from "styled-components";

interface Props {
  edit?: boolean;
}

export const Title = ({ edit }: Props) => (
  <StyledTitle>{edit ? "Редагування статті" : "Нова стаття"}</StyledTitle>
);

const StyledTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  line-height: 25.2px;
  letter-spacing: 0.02em;
  text-align: left;
  margin-bottom: 24px;
`;
