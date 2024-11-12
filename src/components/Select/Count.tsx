import styled from "styled-components";

interface Props {
  count: number;
}

export const Count = ({ count }: Props) => (
  <StyledCount className="flex items-center justify-center">
    {count}
  </StyledCount>
);

const StyledCount = styled.div`
  width: 24px;
  height: 24px;
  border: 0.5px solid #000000;
  border-radius: 2px;
  margin-right: 8px;
  font-size: 14px;
  font-weight: 600;
  line-height: 19.6px;
`;
