import styled from "styled-components";
import { Avatar } from "../Avatar/Avatar";

interface Props {
  title: string;
  subtitle: string;
  className?: string;
  avatar?: string;
}

export const Info = ({ title, subtitle, className, avatar }: Props) => (
  <StyledInfo className={className}>
    <div className="flex items-center gap-2 title" title={title}>
      {avatar ? <Avatar /> : null}
      <span>{title}</span>
    </div>
    <div className="subtitle" title={subtitle}>
      {subtitle}
    </div>
  </StyledInfo>
);

const StyledInfo = styled.div`
  min-width: 80px;
  .title {
    font-size: 14px;
    font-weight: 400;
    line-height: 19.6px;
    text-align: left;
    color: #111111;
    margin-bottom: 2px;
    span {
      white-space: nowrap;
      max-width: 140px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .subtitle {
    font-size: 12px;
    font-weight: 400;
    line-height: 16.8px;
    letter-spacing: 0.02em;
    text-align: left;
    color: #737373;
  }
`;
