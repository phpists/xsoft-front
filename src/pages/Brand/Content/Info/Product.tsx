import styled from "styled-components";
import { Avatar } from "../../../../components/Avatar/Avatar";

interface Props {
  title: string;
  color: string;
}

export const Product = ({ title, color }: Props) => (
  <StyledProduct className="flex items-center gap-2">
    <Avatar
      size={46}
      className="avatar"
      firstName={title?.split(" ")?.[0]}
      lastName={title?.split(" ")?.[1]}
      color={color}
    />
    <div>
      <div className="title mb-1">{title}</div>
      <div className="subtitle">Назва Бренду</div>
    </div>
  </StyledProduct>
);

const StyledProduct = styled.div`
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
    max-width: 232px;
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
