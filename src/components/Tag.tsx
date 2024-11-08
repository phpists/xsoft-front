import styled from "styled-components";

interface Props {
  title: string;
  className?: string;
}

export const Tag = ({ title, className }: Props) => (
  <StyledTag className={className}>{title}</StyledTag>
);

const StyledTag = styled.div`
  padding: 4px 6px;
  background: #efefef;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  line-height: 16.8px;
  letter-spacing: 0.02em;
  color: #737373;
`;
