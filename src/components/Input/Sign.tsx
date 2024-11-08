import styled from "styled-components";

interface Props {
  sign: string;
}

export const Sign = ({ sign }: Props) => (
  <StyledSign className="flex items-center justify-center">{sign}</StyledSign>
);

const StyledSign = styled.div`
  width: 54px;
  height: 54px;
  border-radius: 0 8px 8px 0;
  border-left: 1px solid #dbdbdb;
  font-size: 14px;
  font-weight: 400;
  line-height: 19.6px;
  text-align: left;
  background: #cdd4db80;
  flex-shrink: 0;
`;
