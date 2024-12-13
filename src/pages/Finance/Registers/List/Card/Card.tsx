import styled from "styled-components";
import { Actions } from "../../../../../components/Actions/Actions";

interface Props {
  title: string;
  total: string;
  actions?: boolean;
}

export const Card = ({ title, total, actions }: Props) => (
  <StyledCard className="flex flex-col justify-between">
    <div className="title">{title}</div>
    <div className="flex items-center justify-between">
      <div>{total}</div>
      {actions ? (
        <Actions
          options={[
            { title: "Редагувати", onClick: () => null },
            { title: "Видалити", onClick: () => null },
          ]}
        />
      ) : null}
    </div>
  </StyledCard>
);

const StyledCard = styled.div`
  border: 1px solid #dbdbdb;
  border-radius: 16px;
  height: 100%;
  position: relative;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  line-height: 22.4px;
  text-align: left;
  color: #111111;
  padding: 20px;
  background: #fff;
  min-width: 260px;
  width: 100%;
  .title {
    text-align: right;
    font-size: 22px;
  }
  button {
    padding: 0;
    width: max-content;
    .dropdown {
      width: 150px;
    }
  }
`;
