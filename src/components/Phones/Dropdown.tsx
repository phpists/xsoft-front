import { BiCopy, BiPhoneCall } from "react-icons/bi";
import styled from "styled-components";
import telegramIcon from "../../assets/tg.svg";
import viberIcon from "../../assets/viber.png";
import whatsupIcon from "../../assets/watsup.svg";
import { IPhone } from "../PhonesInput/PhonesInput";

interface Props {
  phone?: IPhone;
}

export const Dropdown = ({ phone }: Props) => (
  <StyledDropdown className="dropdown">
    <div>
      <BiPhoneCall /> Зателефонувати
    </div>
    <div>
      <BiCopy /> Копіювати
    </div>
    {phone?.type_id.includes(1) ? (
      <div>
        <img src={telegramIcon} alt="" /> Telegram
      </div>
    ) : null}
    {phone?.type_id.includes(2) ? (
      <div>
        <img src={viberIcon} alt="" />
        Viber
      </div>
    ) : null}
    {phone?.type_id.includes(3) ? (
      <div>
        <img src={whatsupIcon} alt="" />
        WhatsApp
      </div>
    ) : null}
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
