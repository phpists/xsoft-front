import styled from "styled-components";

export const Description = () => (
  <StyledDescription>
    Для того шоб побачити ефективність роботи компанії, перейдіть в <br /> філію
    і сторіть першого працівника, клієнта, товар
  </StyledDescription>
);

const StyledDescription = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 22.4px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #737373;
`;
