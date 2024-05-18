import { ColumnContainer, RowContainer } from "@/entities";
import { Footer } from "@/widgets";

const EcoBadgePage = () => {
  return (
    <>
      <ColumnContainer>
        <img src="/imgs/badge/main.png" />
        <RowContainer></RowContainer>
        <RowContainer></RowContainer>
        <RowContainer></RowContainer>
        <RowContainer></RowContainer>
        <RowContainer></RowContainer>
        <RowContainer></RowContainer>
      </ColumnContainer>
      <Footer state="GROUP" />
    </>
  );
};

export default EcoBadgePage;
