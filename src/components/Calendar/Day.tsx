import styled from "styled-components";

interface Props {
  date: string;
  empty?: boolean;
}

export const Day = ({ date, empty }: Props) => (
  <StyledDay className={empty ? "" : "active"}>
    <div className="date">
      {date} {empty ? null : <div className="event" />}
    </div>
  </StyledDay>
);

const StyledDay = styled.div`
  padding: 4.5px;
  cursor: pointer;
  .date {
    width: 29px;
    height: 29px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-family: Noto Sans;
    font-size: 12px;
    font-weight: 500;
    line-height: 16.8px;
    letter-spacing: 0.02em;
    text-align: center;
    color: #737373;
    border-radius: 4px;
  }
  &.active {
    .date {
      background: #efefef;
      color: #111111;
    }
  }
  .event {
    width: 3px;
    height: 3px;
    border-radius: 100%;
    background: #3b82f6;
  }
`;
