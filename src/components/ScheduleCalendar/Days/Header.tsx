import styled from "styled-components";
import monday from "../../../assets/Zombie.png";
import tuesday from "../../../assets/Hot Beverage.png";
import wednesday from "../../../assets/Camel.png";
import thursday from "../../../assets/Brain.png";
import friday from "../../../assets/Cocktail Glass.png";
import saturday from "../../../assets/Party Popper.png";
import sunday from "../../../assets/Woman Getting Massage.png";

const DAY = [
  { title: "Понеділок", icon: monday },
  { title: "Вівторок", icon: tuesday },
  { title: "Середа", icon: wednesday },
  { title: "Четверг", icon: thursday },
  { title: "П’ятниця", icon: friday },
  { title: "Субота", icon: saturday },
  { title: "Неділя", icon: sunday },
];

export const Header = () => (
  <StyledHeader>
    {DAY?.map(({ title, icon }, i) => (
      <div key={i}>
        {" "}
        <img src={icon} alt="" />
        {title}
      </div>
    ))}
  </StyledHeader>
);

const StyledHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  font-size: 12px;
  font-weight: 500;
  line-height: 16.8px;
  letter-spacing: 0.02em;
  border-bottom: 1px solid #dbdbdb;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 4.5px 4px;
  }
  img {
    height: 15px;
  }
`;
