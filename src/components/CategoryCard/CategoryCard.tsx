import { BiChevronRight, BiEdit, BiEditAlt } from "react-icons/bi";
import styled from "styled-components";
import { Dropdown } from "./Dropdown";
import { useState } from "react";

export interface Option {
  title: string;
  value: string;
}

interface Props {
  title: string;
  Icon: any;
  className?: string;
  options?: Option[];
  active?: boolean;
  onClick?: () => void;
  editable?: boolean;
}

export const CategoryCard = ({
  title,
  Icon,
  className,
  options,
  active,
  onClick,
  editable,
}: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <StyledCategoryCard
      className={` ${className} ${open && "open"} ${active && "active"}`}
    >
      <button
        className="flex items-center justify-between"
        onClick={() => {
          setOpen(!open);
          onClick && onClick();
        }}
      >
        <div className="flex items-center gap-2.5">
          {Icon} {title}
        </div>
        {editable ? (
          <BiEdit size={20} />
        ) : (
          options && (
            <>
              <BiChevronRight className="arrow" />
            </>
          )
        )}
      </button>
      {open && options ? <Dropdown options={options} /> : null}
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
      background: #e6e6e6;
    }
  }
  &.open {
    .arrow {
      transform: rotate(90deg);
    }
  }
`;
