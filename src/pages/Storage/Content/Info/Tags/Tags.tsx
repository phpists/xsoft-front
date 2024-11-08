import styled from "styled-components";
import { Tag } from "../../../../../components/Tag";

export const Tags = () => (
  <StyledTags>
    <div className="label">Теги:</div>
    <div className="flex items-center gap-1">
      <Tag title="постійний" />
      <Tag title="VIP" />
    </div>
  </StyledTags>
);

const StyledTags = styled.div`
  padding: 14px;
  border: 1px solid #dbdbdb;
  border-radius: 8px;
  margin: 24px 0;
  .label {
    font-size: 10px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0.02em;
    text-align: left;
    color: #737373;
    margin-bottom: 8px;
  }
`;
