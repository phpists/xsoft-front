import styled from "styled-components";

interface Props {
  title?: string;
}

export const Content = ({ title }: Props) => (
  <StyledContent>
    <b className="mb-1">Новий клієнт (Анонімний)</b>
    <div>+380682478348</div>
    <div className="divider"></div>
    <div>{title ?? "-"}</div>
  </StyledContent>
);

const StyledContent = styled.div`
  padding: 4px 4px 6px;
  font-size: 12px;
  font-weight: 400;
  line-height: 16.8px;
  letter-spacing: 0.02em;
  text-align: left;
  color: #111111;
  overflow: auto;
  height: 100%;
  b {
    font-weight: 500;
  }
  .divider {
    margin: 8px 0;
    height: 2px;
    width: 100%;
    background: #2eb06233;
  }
`;
