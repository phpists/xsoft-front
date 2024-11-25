import { BiTrash, BiUser } from "react-icons/bi";
import { Select } from "../../../../../components/Select/Select";
import styled from "styled-components";

export const Card = () => (
  <StyledCard className="flex items-center mb-3.5 gap-3.5">
    <Select
      label="Працівник"
      value={1}
      options={[
        {
          title: "Ірина Петрів",
          subtitle: "Візажистка",
          value: 1,
          showAvatar: true,
        },
      ]}
      className="max-w-[480px] card-select"
      Icon={<BiUser size={20} />}
    />
    <button>
      <BiTrash size={24} />
    </button>
  </StyledCard>
);

const StyledCard = styled.div`
  .card-select {
    .value {
      max-width: 300px;
    }
  }
`;
