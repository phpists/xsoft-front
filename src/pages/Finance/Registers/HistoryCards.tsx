import styled from "styled-components";

interface Props {
  statistics: {
    balance_start: number;
    balance_end: number;
    total_profit: number;
    total_loss: number;
  };
}

export const HistoryCards = ({ statistics }: Props) => (
  <StyledHistoryCards>
    <div>
      <span className="title">Баланс на початок періоду</span>
      <span className="value">{statistics.balance_start} ₴</span>
    </div>
    <div>
      <span className="title">Баланс на кінець періоду</span>
      <span className="value">{statistics.balance_end} ₴</span>
    </div>
    <div>
      <span className="title">Дохід за місяць</span>
      <span className="value">{statistics.total_profit} ₴</span>
    </div>
    <div>
      <span className="title">Витрати за місяць</span>
      <span className="value">{statistics.total_loss} ₴</span>
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
