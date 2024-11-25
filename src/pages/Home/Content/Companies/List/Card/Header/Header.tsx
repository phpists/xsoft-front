import styled from "styled-components";
import { Title } from "./Title";
import { Type } from "./Type";
import { EditButton } from "./EditButton";
import { Avatar } from "../../../../../../../components/Avatar/Avatar";

interface Props {
  title: string;
  category?: string;
  color: string;
  id: number;
}

export const Header = ({ title, category, color, id }: Props) => (
  <StyledHeader className="flex items-center gap-3.5">
    <Avatar
      firstName={title}
      color={color}
      size={64}
      className="!text-[22px]"
    />
    <div>
      <Title title={title} />
      <Type category={category} />
    </div>
    <EditButton id={id} />
  </StyledHeader>
);

const StyledHeader = styled.div`
  padding: 14px 14px 22px;
  border-bottom: 1px solid #dbdbdb;
`;
