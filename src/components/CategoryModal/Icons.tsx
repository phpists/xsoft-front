import { useState } from "react";
import styled from "styled-components";
import icon1 from "../../assets/icon-1.svg";
import icon2 from "../../assets/icon-2.svg";
import icon3 from "../../assets/icon-3.svg";
import icon4 from "../../assets/icon-4.svg";
import icon5 from "../../assets/icon-5.svg";
import icon6 from "../../assets/icon-6.svg";
import icon7 from "../../assets/icon-7.svg";
import icon8 from "../../assets/icon-8.svg";
import icon9 from "../../assets/icon-9.svg";
import icon10 from "../../assets/icon-10.svg";
import icon11 from "../../assets/icon-11.svg";
import icon12 from "../../assets/icon-12.svg";
import icon13 from "../../assets/icon-13.svg";
import icon14 from "../../assets/icon-14.svg";
import icon15 from "../../assets/icon-15.svg";
import icon16 from "../../assets/icon-16.svg";
import icon17 from "../../assets/icon-17.svg";
import icon18 from "../../assets/icon-18.svg";
import icon19 from "../../assets/icon-19.svg";
import icon20 from "../../assets/icon-20.svg";
import icon21 from "../../assets/icon-21.svg";
import icon22 from "../../assets/icon-22.svg";
import icon23 from "../../assets/icon-23.svg";
import icon24 from "../../assets/icon-24.svg";
import icon25 from "../../assets/icon-25.svg";
import icon26 from "../../assets/icon-26.svg";
import icon27 from "../../assets/icon-27.svg";
import icon28 from "../../assets/icon-28.svg";
import icon29 from "../../assets/icon-29.svg";
import icon30 from "../../assets/icon-30.svg";
import icon31 from "../../assets/icon-31.svg";
import icon32 from "../../assets/icon-32.svg";
import icon33 from "../../assets/icon-33.svg";
import icon34 from "../../assets/icon-34.svg";

export const Icons = () => {
  const [active, setActive] = useState(0);
  const ICONS = [
    icon1,
    icon2,
    icon3,
    icon4,
    icon5,
    icon6,
    icon7,
    icon8,
    icon9,
    icon10,
    icon11,
    icon12,
    icon13,
    icon33,
    icon34,
    icon14,
    icon15,
    icon16,
    icon17,
    icon18,
    icon20,
    icon21,
    icon22,
    icon23,
    icon24,
    icon25,
    icon26,
    icon27,
    icon28,
    icon29,
    icon30,
    icon31,
    icon32,
  ];

  return (
    <StyledIcons>
      {ICONS?.map((icon, i) => (
        <button
          key={i}
          className={active === i ? "active" : ""}
          onClick={() => setActive(i)}
        >
          <img src={icon} alt="" />
        </button>
      ))}
    </StyledIcons>
  );
};

const StyledIcons = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 5px;
  grid-auto-rows: 32px;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 4px;
    &.active {
      background: #efefef;
    }
    img {
      width: 18px;
      height: 18px;
    }
  }
`;
