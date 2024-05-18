import styled from "styled-components";
import { KakaoMap } from "@/entities";

const Home = () => {
  return (
    <>
      <KakaoMap />
      <Styled>home</Styled>
    </>
  );
};

const Styled = styled.div`
  font-size: 40px;
`;

export default Home;
