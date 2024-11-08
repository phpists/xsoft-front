import { BiCopy, BiPhoneCall } from "react-icons/bi";
import styled from "styled-components";
import telegramIcon from "../../assets/tg.svg";
import viberIcon from "../../assets/viber.png";
import whatsupIcon from "../../assets/watsup.svg";

export const Dropdown = () => (
  <StyledDropdown className="dropdown">
    <div>
      <BiPhoneCall /> Зателефонувати
    </div>
    <div>
      <BiCopy /> Копіювати
    </div>
    <div>
      <img src={telegramIcon} alt="" /> Telegram
    </div>
    <div>
      <img src={viberIcon} alt="" />
      Viber
    </div>
    <div>
      <img src={whatsupIcon} alt="" />
      WhatsApp
    </div>
  </StyledDropdown>
);

const StyledDropdown = styled.div`
  position: absolute;
  top: calc(100% - 4px);
  padding: 8px;
  width: 240px;
  background: #ffffff;
  border: 0.5px solid #dbdbdb;
  box-shadow: 0px 6px 14px 0px #1e1e1e1a;
  border-radius: 8px;

  div {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 14px 8px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 400;
    line-height: 19.6px;
    text-align: left;
    color: #111111;
    transition: all 0.3s;
    svg,
    img {
      width: 16px;
    }
    &:hover {
      background: #efefef;
    }
  }
`;
