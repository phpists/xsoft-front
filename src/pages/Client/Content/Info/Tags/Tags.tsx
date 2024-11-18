import styled from "styled-components";
import { Tag } from "../../../../../components/Tag";

interface Props {
  tags: string[];
  onChange: (val: string[]) => void;
}

export const Tags = ({ tags = [], onChange }: Props) => (
  <StyledTags>
    <div className="label">Теги:</div>
    <div className="flex flex-wrap items-center gap-1">
      {tags?.map((t, i) => (
        <Tag
          key={i}
          title={t}
          onDelete={() => onChange(tags?.filter((t, j) => i !== j))}
        />
      ))}
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
