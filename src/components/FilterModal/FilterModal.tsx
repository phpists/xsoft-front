import styled from "styled-components";
import { Header } from "./Header/Header";

interface Props {
  open: boolean;
  onClose: () => void;
  children: any;
}

export const FilterModal = ({ open, onClose, children }: Props) => {
  return (
    <StyledFilterModal className={`${open && "open"}`}>
      <Header onClose={onClose} />
      <div className="filter-content">{children}</div>
    </StyledFilterModal>
  );
};

const StyledFilterModal = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  box-shadow: 0px 6px 14px 0px #1e1e1e1a;
  border-left: 1px solid #dbdbdb;
  background: #f7f7f7;
  width: 320px;
  z-index: 10;
  padding: 20px 14px;
  transition: all 0.3s;
  transform: translateX(100%);
  &.open {
    transform: translateX(0px);
  }
  .filter-content {
    height: calc(100vh - 144px);
    overflow: auto;
  }
  .divider {
    width: 100%;
    height: 1px;
    background: #dbdbdb;
  }
  .filter-title {
    font-size: 14px;
    font-weight: 500;
    line-height: 19.6px;
    margin-bottom: 14px;
  }
  .field {
    background: #fff;
  }
`;
