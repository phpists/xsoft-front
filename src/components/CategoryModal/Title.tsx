import styled from "styled-components";

interface Props {
  category?: boolean;
}

export const Title = ({ category }: Props) => (
  <StyledTitle>
    {category ? "Редагування категорії" : "Додати категорію"}
  </StyledTitle>
);

const StyledTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  line-height: 25.2px;
  letter-spacing: 0.02em;
  text-align: left;
  margin-bottom: 24px;
`;
