import styled from "styled-components";
import { Avatar } from "../../../../components/Avatar/Avatar";

export const Company = () => (
  <StyledCompany className="flex items-center gap-2">
    <Avatar size={46} className="avatar" download />
    <div>
      <div className="title mb-1">XBARBER</div>
      <div className="subtitle">Барбершоп</div>
    </div>
  </StyledCompany>
);

const StyledCompany = styled.div`
  margin-bottom: 14px;
  padding: 8px 14px 14px;
  background: #efefef;
  border-radius: 8px;
  .avatar {
    font-size: 18px;
    font-weight: 600;
    line-height: 25.2px;
    letter-spacing: 0.02em;
  }
  .title {
    font-size: 16px;
    font-weight: 500;
    line-height: 22.4px;
    max-width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .subtitle {
    font-size: 14px;
    font-weight: 400;
    line-height: 19.6px;
    color: #737373;
  }
`;
