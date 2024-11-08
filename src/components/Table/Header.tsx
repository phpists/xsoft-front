import styled from "styled-components";
import { Column } from "./Table";
import { BiSortAlt2, BiStar, BiTrash } from "react-icons/bi";
import { Checkbox } from "../Checkbox";

interface Props {
  columns: Column[];
  selected?: number;
  onSelectAll?: () => void;
  allCount?: number;
}

export const Header = ({
  columns,
  selected = 0,
  onSelectAll,
  allCount,
}: Props) => (
  <>
    {onSelectAll ? (
      <div>
        {selected > 0 ? (
          <StyledHeader className="selected">
            <BiStar size={20} />{" "}
          </StyledHeader>
        ) : (
          <Checkbox checked={allCount === selected} onClick={onSelectAll} />
        )}
      </div>
    ) : null}
    {selected > 0 ? (
      <>
        <StyledHeader className="selected">
          <BiTrash size={20} />{" "}
        </StyledHeader>
        {columns?.slice(1)?.map((c, i) => (
          <StyledHeader key={i}></StyledHeader>
        ))}
      </>
    ) : (
      columns?.map(({ title, sortable, className }, i) => (
        <StyledHeader
          key={i}
          className={`flex items-center justify-between ${className}`}
          title={title}
        >
          <span>{title}</span>{" "}
          {sortable ? (
            <button>
              <BiSortAlt2 size={11} />
            </button>
          ) : null}
        </StyledHeader>
      ))
    )}
    {onSelectAll && selected !== undefined ? (
      <StyledHeader className={selected > 0 ? "selected" : ""}>
        {selected > 0 ? `Вибрані ${selected} з ${allCount}` : ""}
      </StyledHeader>
    ) : null}
  </>
);

const StyledHeader = styled.div`
  font-size: 12px;
  font-weight: 700;
  line-height: 16.8px;
  letter-spacing: 0.02em;
  text-align: left;
  color: #111111;
  padding: 12px 8px;
  height: 40px;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
  }
  svg {
    cursor: pointer;
    path {
      fill: #737373;
    }
  }
  &.selected {
    font-weight: 400;
    text-align: right;
    path {
      fill: #000;
    }
  }
`;
