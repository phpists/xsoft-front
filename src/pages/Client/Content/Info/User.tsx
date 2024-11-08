import styled from "styled-components";
import { Avatar } from "../../../../components/Avatar";

export const User = () => (
  <StyledUser className="flex items-center gap-2">
    <Avatar size={46} className="avatar" />
    <div>
      <div className="title mb-1">Олександр Степанов</div>
      <div className="subtitle">#1876324</div>
    </div>
  </StyledUser>
);

const StyledUser = styled.div`
  margin-bottom: 14px;
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
  }
  .subtitle {
    font-size: 14px;
    font-weight: 400;
    line-height: 19.6px;
    color: #737373;
  }
`;
