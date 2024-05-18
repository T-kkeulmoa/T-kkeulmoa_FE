import styled from "styled-components";
import { KakaoMap } from "@/entities";

const Home = () => {
  return (
    <>
      <KakaoMap />
      <Styled>된건가</Styled>
    </>
  );
};

const Styled = styled.div`
  font-size: 40px;
`;

export default Home;
