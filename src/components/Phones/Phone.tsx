import styled from "styled-components";

interface Props {
  phone: string;
}

export const Phone = ({ phone }: Props) => (
  <StyledPhone>
    <div className="label">Телефон</div>
    <div className="title">{phone}</div>
  </StyledPhone>
);

const StyledPhone = styled.div`
  .label {
    font-size: 10px;
    font-weight: 500;
    line-height: 14px;
    letter-spacing: 0.02em;
    margin-bottom: 2px;
    color: #737373;
  }
  .title {
    font-size: 14px;
    font-weight: 400;
    line-height: 19.6px;
    text-align: left;
    color: #111111;
  }
`;
