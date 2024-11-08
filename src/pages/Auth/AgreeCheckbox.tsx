import styled from "styled-components";
import checkIcon from "../../assets/check.svg";

interface Props {
  value: boolean;
  onChange: () => void;
}

export const AgreeCheckbox = ({ value, onChange }: Props) => {
  return (
    <StyledAgreeCheckbox onClick={onChange} className={`${value && "active"}`}>
      <span className="flex items-center justify-center">
        <img src={checkIcon} alt="" />
      </span>
      <div>
        Я приймаю умови ліцензійного договору і дозволяю обробку персональних
        даних
      </div>
    </StyledAgreeCheckbox>
  );
};

const StyledAgreeCheckbox = styled.div`
  display: grid;
  grid-template-columns: 14px 1fr;
  gap: 10px;
  font-size: 12px;
  font-weight: 400;
  line-height: 16.8px;
  letter-spacing: 0.02em;
  color: #989898;
  margin: 20px 0 40px;
  cursor: pointer;
  span {
    width: 14px;
    height: 14px;
    border-radius: 2px;
    border: 1px solid #07284a33;
    img {
      opacity: 0;
      transition: all 0.3s;
    }
  }
  &:hover,
  &.active {
    span {
      border: 1px solid #0095f6;
    }
  }
  &.active {
    span {
      img {
        opacity: 1;
      }
    }
  }
`;
