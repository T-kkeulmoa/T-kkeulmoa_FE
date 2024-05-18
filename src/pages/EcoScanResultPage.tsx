import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router";

import {
  PlusTitle,
  ScanResultImg,
  CloseButton,
  ScanResultContainer,
  ScanResultSubTitle,
  ScanTitle,
} from "@/entities";
import { PAGE_URL } from "@/shared";

const EcoScanResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const imageUrl = location.state.imageUrl;
  const trashTypeResponseDtoList: {
    trashTypeName: string;
    trashTypeContent: string;
  }[] = location.state.trashTypeResponseDtoList;

  return (
    <>
      <ScanTitle>에코 스캔 결과</ScanTitle>
      <CloseButton onClick={() => navigate(PAGE_URL.EcoScan)}>
        <img src="/imgs/close.svg" alt="close" />
      </CloseButton>
      <ScanResultImg src={imageUrl} alt="scan result" />
      <ScanResultContainer>
        {trashTypeResponseDtoList.map((trashTypeResponseDto, index) => (
          <>
            <PlusTitle key={index}>
              {trashTypeResponseDto.trashTypeName} 버리는 방법
            </PlusTitle>
            <ScanResultSubTitle key={index}>
              {trashTypeResponseDto.trashTypeContent}
            </ScanResultSubTitle>
          </>
        ))}
      </ScanResultContainer>
    </>
  );
};

export default EcoScanResultPage;
