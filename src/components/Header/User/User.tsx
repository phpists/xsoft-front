import styled from "styled-components";
import { Avatar } from "./Avatar";
import { Dropdown } from "./Dropdown";
import { useAppSelect } from "../../../hooks/redux";

export const User = () => {
  const { user } = useAppSelect((state) => state.auth);

  return (
    <StyledUser>
      {user ? (
        <Avatar
          firstName={user?.first_name ?? ""}
          lastName={user?.last_name ?? ""}
          color={user?.color}
        />
      ) : null}
      <Dropdown />
    </StyledUser>
  );
};

const StyledUser = styled.button`
  position: relative;
  .dropdown {
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s;
  }
  &:focus,
  &.open {
    .dropdown {
      opacity: 1;
      visibility: visible;
    }
  }
`;
