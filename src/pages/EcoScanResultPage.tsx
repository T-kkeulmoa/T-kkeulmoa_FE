import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router";

import {
  PointTitle,
  ScanResultImg,
  CloseButton,
  ScanResultContainer,
  ScanResultSubTitle,
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
      <CloseButton onClick={() => navigate(PAGE_URL.EcoScan)}>
        <img src="/imgs/close.svg" alt="close" />
      </CloseButton>
      <ScanResultImg src={imageUrl} alt="scan result" />
      <ScanResultContainer>
        {trashTypeResponseDtoList.map((trashTypeResponseDto, index) => (
          <>
            <PointTitle key={index}>
              {trashTypeResponseDto.trashTypeName}
            </PointTitle>
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
