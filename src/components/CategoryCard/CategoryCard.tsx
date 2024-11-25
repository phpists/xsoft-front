import { BiChevronRight, BiEdit, BiTrash } from "react-icons/bi";
import styled from "styled-components";
import { Dropdown } from "./Dropdown";
import { useState } from "react";

export interface Option {
  title: string;
  value: string | number;
}

interface Props {
  title: string;
  Icon: any;
  className?: string;
  options?: Option[];
  active?: boolean;
  onClick?: () => void;
  editable?: boolean;
  onDelete?: () => void;
  value?: string | number;
  onChange?: (val: string | number) => void;
  onEdit?: () => void;
}

export const CategoryCard = ({
  title,
  Icon,
  className,
  options,
  active,
  onClick,
  editable,
  onDelete,
  value,
  onChange,
  onEdit,
}: Props) => {
  return (
    <StyledCategoryCard
      className={` ${className} ${active && "open"} ${active && "active"}`}
    >
      <button
        className="flex items-center justify-between"
        onClick={() => {
          onClick && onClick();
        }}
      >
        <div className="flex items-center gap-2.5">
          {Icon} {title}
        </div>
        <div className="flex items-center gap-2">
          {editable ? (
            <BiEdit size={20} onClick={onEdit} />
          ) : (
            options && (
              <>
                <BiChevronRight className="arrow" />
              </>
            )
          )}
          {onDelete ? (
            <BiTrash
              size={20}
              onClick={(e) => {
                e.stopPropagation();
                onDelete();
              }}
            />
          ) : null}
        </div>
      </button>
      {active && options ? (
        <Dropdown options={options} value={value} onChange={onChange} />
      ) : null}
    </StyledCategoryCard>
  );
};

const StyledCategoryCard = styled.div`
  font-size: 12px;
  font-weight: 500;
  line-height: 16.8px;
  letter-spacing: 0.02em;
  color: #111111;
  width: 100%;
  position: relative;

  button {
    width: 100%;
    border-radius: 8px;
    background: #efefef;
    padding: 10px 8px;
    transition: all 0.3s;
  }
  svg {
    transition: all 0.2s;
  }

  &.active {
    button {
      background: #d3d2d2;
    }
  }
  &.open {
    .arrow {
      transform: rotate(90deg);
    }
  }
`;
