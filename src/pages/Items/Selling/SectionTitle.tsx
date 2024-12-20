import styled from "styled-components";

interface Props {
  title: string;
  className?: string;
}

export const SectionTitle = ({ title, className }: Props) => (
  <StyledSectionTitle className={className}>{title}</StyledSectionTitle>
);

const StyledSectionTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 22.4px;
  text-align: left;
  color: #111111;
  margin-bottom: 14px;
`;
