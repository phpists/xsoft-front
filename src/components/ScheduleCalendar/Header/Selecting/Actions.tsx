import styled from "styled-components";

export const Actions = () => (
  <StyledActions className="flex items-center justify-center gap-2.5">
    <button>Редагувати</button>
    <button>Вихідний</button>
  </StyledActions>
);

const StyledActions = styled.div`
  border-radius: 7px;
  background: #f7f7f7;
  height: 44px;
  width: 100%;
  font-size: 12px;
  font-weight: 500;
  line-height: 16.8px;
  letter-spacing: 0.02em;
  button {
    padding: 13.5px 30.5px;
  }
`;
