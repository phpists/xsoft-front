import styled from "styled-components";
import { Card } from "./Card";

export const Banner = () => (
  <StyledBanner className="flex items-center justify-between">
    <Card title="Баланс:" value="00.00 ₴" />
    <div className="flex items-center gap-6 bonuses">
      <Card title="Незгораємі бонуси:" value="00.00" info />
      <Card title="Згораєміє бонуси:" value="00.00" info />
    </div>
  </StyledBanner>
);

const StyledBanner = styled.div`
  padding: 24px;
  background: #efefef;
  border-radius: 12px;
  .bonuses {
    .value {
      text-align: right;
      font-weight: 400;
    }
  }
`;
