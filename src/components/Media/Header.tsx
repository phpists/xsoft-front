import { BiImages } from "react-icons/bi";
import styled from "styled-components";

export const Header = () => (
  <StyledHeader className="flex items-center gap-2">
    <div className="icon">
      <BiImages />
    </div>
    <div>
      <div className="title">Медіа матеріали:</div>
      <div className="subtitle">2 файли</div>
    </div>
  </StyledHeader>
);

const StyledHeader = styled.div`
  margin-bottom: 14px;
  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 4px;
    background: #efefef;
  }
  .title {
    font-size: 12px;
    font-weight: 400;
    line-height: 16.8px;
    letter-spacing: 0.02em;
    color: #111111;
    margin-bottom: 5px;
  }
  .subtitle {
    font-size: 10px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0.02em;
    text-align: left;
    color: #737373;
  }
`;
