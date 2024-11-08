import styled from "styled-components";
import { Subtitle } from "../Subtitle";
import { Title } from "../Title";
import { Button } from "../Button";
import { useNavigate } from "react-router-dom";

export const Card = () => {
  const navigate = useNavigate();

  return (
    <StyledCard>
      <div className="card">
        <Title title="XSOFTcrm Автоматизація рутинних процесів бізнесу" />
        <Subtitle
          text={`Всі інструменти для автоматизації \n бізнесу інтегровані в єдине ціле`}
        />
        <Button
          title="Зареєструватися"
          className="mb-2.5"
          onClick={() => navigate("/registration")}
        />
        <Button
          title="Увійти"
          type="outline"
          onClick={() => navigate("/login")}
        />
      </div>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  width: max-content;
  padding: 100px;
  border-right: 1px solid #dbdbdb;
  height: 100vh;
  overflow: auto;
  .card {
    height: 100%;
    max-width: 405px;
  }
  @media (max-width: 1100px) {
    border: none;
    width: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    .card {
      height: max-content;
    }
  }
`;
