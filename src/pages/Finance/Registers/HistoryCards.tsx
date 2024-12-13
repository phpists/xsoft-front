import styled from "styled-components";

export const HistoryCards = () => (
  <StyledHistoryCards>
    <div>
      <span className="title">Баланс на початок періоду</span>
      <span className="value">2 200 ₴</span>
    </div>
    <div>
      <span className="title">Баланс на кінець періоду</span>
      <span className="value">6 200 ₴</span>
    </div>
    <div>
      <span className="title">Дохід за місяць</span>
      <span className="value">88 700 ₴</span>
    </div>
    <div>
      <span className="title">Витрати за місяць</span>
      <span className="value">-102 860 ₴</span>
    </div>
  </StyledHistoryCards>
);

const StyledHistoryCards = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 31px;
  div {
    padding: 12px 20px;
    border-radius: 8px;
    width: 100%;
    background: #fff;
    .title {
      font-size: 12px;
      font-weight: 400;
      line-height: 16.8px;
      letter-spacing: 0.02em;
    }
    .value {
      display: block;
      font-size: 20px;
      font-weight: 700;
      line-height: 28px;
      letter-spacing: 0.02em;
    }
  }
`;
