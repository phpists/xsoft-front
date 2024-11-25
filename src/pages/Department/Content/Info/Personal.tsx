import { BiDiamond, BiPackage, BiSolidUser, BiUser } from "react-icons/bi";
import { Select } from "../../../../components/Select/Select";
import styled from "styled-components";
import { Users } from "../../../../components/Users/Users";

export const Personal = () => (
  <StyledPersonal className="flex flex-col gap-2">
    <Select
      label="Об’єкти"
      value={"(4)"}
      options={[
        {
          title: "Ірина Петрів",
          subtitle: "Візажистка",
          value: 1,
          showAvatar: true,
        },
        {
          title: "Ірина Петрів",
          subtitle: "Візажистка",
          value: 1,
          showAvatar: true,
        },
        {
          title: "Ірина Петрів",
          subtitle: "Візажистка",
          value: 1,
          showAvatar: true,
        },
      ]}
      showLabel
      Icon={<BiPackage size={20} />}
      rightIcon
      className="select"
      component={<Users />}
    />
    <Select
      label="Ресурси"
      value={"(4)"}
      options={[
        {
          title: "Ірина Петрів",
          subtitle: "Візажистка",
          value: 1,
          showAvatar: true,
        },
        {
          title: "Ірина Петрів",
          subtitle: "Візажистка",
          value: 1,
          showAvatar: true,
        },
        {
          title: "Ірина Петрів",
          subtitle: "Візажистка",
          value: 1,
          showAvatar: true,
        },
      ]}
      showLabel
      Icon={<BiDiamond size={20} />}
      rightIcon
      className="select"
      component={<Users />}
    />
    <Select
      label="Персонал"
      value={"(4)"}
      options={[
        {
          title: "Ірина Петрів",
          subtitle: "Візажистка",
          value: 1,
          showAvatar: true,
        },
        {
          title: "Ірина Петрів",
          subtitle: "Візажистка",
          value: 1,
          showAvatar: true,
        },
        {
          title: "Ірина Петрів",
          subtitle: "Візажистка",
          value: 1,
          showAvatar: true,
        },
      ]}
      showLabel
      Icon={<BiSolidUser size={20} />}
      rightIcon
      className="select"
      component={<Users />}
    />
  </StyledPersonal>
);

const StyledPersonal = styled.div`
  .select {
    .arrow {
      transform: rotate(-90deg);
    }
    .dropdown {
      width: 100%;
    }
    &:focus {
      .arrow {
        transform: rotate(0deg);
      }
    }
  }
`;
