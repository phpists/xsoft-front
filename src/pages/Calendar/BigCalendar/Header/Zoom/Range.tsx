import styled from "styled-components";

export const Range = () => (
  <StyledRange>
    <div className="slider-container">
      <input type="range" min="0" max="100" step="0" />
    </div>
    <div className="tricks">
      <div>5 хв</div>
      <div>10 хв</div>
      <div>15 хв</div>
      <div>30 хв</div>
    </div>
  </StyledRange>
);

const StyledRange = styled.div`
  input {
    width: 100%;
  }
  input[type="range"] {
    height: 21px;
    -webkit-appearance: none;
    width: 100%;
  }
  input[type="range"]:focus {
    outline: none;
  }
  input[type="range"]::-webkit-slider-runnable-track {
    width: 100%;
    height: 4px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 0px 0px 0px #000000;
    background: #0095f6;
    border-radius: 50px;
    border: 0px solid #000000;
  }
  input[type="range"]::-webkit-slider-thumb {
    border: 2px solid #dbdbdb;
    height: 12px;
    width: 12px;
    border-radius: 50px;
    background: #ffffff;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -4px;
  }
  input[type="range"]:focus::-webkit-slider-runnable-track {
    background: #0095f6;
  }
  input[type="range"]::-moz-range-track {
    width: 100%;
    height: 4px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 0px 0px 0px #000000;
    background: #0095f6;
    border-radius: 50px;
    border: 0px solid #000000;
  }
  input[type="range"]::-moz-range-thumb {
    box-shadow: 1px 1px 4px #000000;
    border: 2px solid #dbdbdb;
    height: 12px;
    width: 12px;
    border-radius: 50px;
    background: #ffffff;
    cursor: pointer;
  }
  input[type="range"]::-ms-track {
    width: 100%;
    height: 4px;
    cursor: pointer;
    animate: 0.2s;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  input[type="range"]::-ms-fill-lower {
    background: #0095f6;
    border: 0px solid #000000;
    border-radius: 100px;
    box-shadow: 0px 0px 0px #000000;
  }
  input[type="range"]::-ms-fill-upper {
    background: #0095f6;
    border: 0px solid #000000;
    border-radius: 100px;
    box-shadow: 0px 0px 0px #000000;
  }
  input[type="range"]::-ms-thumb {
    margin-top: 1px;
    box-shadow: 1px 1px 4px #000000;
    border: 2px solid #dbdbdb;
    height: 12px;
    width: 12px;
    border-radius: 50px;
    background: #ffffff;
    cursor: pointer;
  }
  input[type="range"]:focus::-ms-fill-lower {
    background: #0095f6;
  }
  input[type="range"]:focus::-ms-fill-upper {
    background: #0095f6;
  }

  .tricks {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 3px 0 12px;
    font-size: 8px;
    font-weight: 400;
    line-height: 11.2px;
    opacity: 0.2;
    margin-top: 8px;
    div {
      position: relative;
      &::before {
        content: "";
        display: block;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: calc(100%);
        width: 1px;
        height: 4px;
        padding: 6px 0px 0px 0px;
        gap: 0px;
        border-radius: 1px 0px 0px 0px;
        background: #000000;
      }
    }
  }
`;
