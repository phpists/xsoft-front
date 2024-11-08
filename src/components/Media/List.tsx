import styled from "styled-components";
import photo1 from "../../assets/photo-1.jpg";
import photo2 from "../../assets/photo-2.jpg";

export const List = () => (
  <StyledList className="flex items-center gap-1">
    <img src={photo1} alt="" />
    <img src={photo2} alt="" />
  </StyledList>
);

const StyledList = styled.div`
  img {
    width: 88px;
    height: 106px;
    object-fit: cover;
  }
`;
