import styled from "styled-components";

export const Label = () => (
  <StyledLabel>
    Телефон <span className="required">*</span>
  </StyledLabel>
);

const StyledLabel = styled.div`
  font-size: 10px;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: 0.02em;
  color: #989898;
  /* margin-bottom: 2px; */
`;
