import { useState, useRef, useEffect } from "react";
import { Camera } from "react-camera-pro";

import { dataURLtoFile, ScanService } from "@/shared";
import {
  ScanSubmitButton,
  ScanSubTitle,
  CameraContainer,
  Target1,
  Target2,
  Target3,
  Target4,
  ScanTitle,
} from "@/entities";
import { Footer } from "@/widgets";

const EcoScanPage = () => {
  const { upload } = ScanService();
  const camera = useRef<{
    width: string;
    height: string;
    takePhoto: () => React.SetStateAction<null>;
  }>(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (image) {
      const formData = new FormData();
      formData.append("image", dataURLtoFile(image, "image"));
      upload(formData);
    }
  }, [image]);

  return (
    <>
      <ScanTitle>에코 스캔</ScanTitle>
      <Target1>
        <img src="/imgs/target1.svg" alt="target" />
      </Target1>
      <Target2>
        <img src="/imgs/target2.svg" alt="target" />
      </Target2>
      <Target3>
        <img src="/imgs/target3.svg" alt="target" />
      </Target3>
      <Target4>
        <img src="/imgs/target4.svg" alt="target" />
      </Target4>
      <CameraContainer>
        <Camera
          ref={camera}
          errorMessages={{
            noCameraAccessible:
              "No camera device accessible. Please connect your camera or try a different browser.",
            permissionDenied:
              "Permission denied. Please refresh and give camera permission.",
            switchCamera:
              "It is not possible to switch camera to different one because there is only one video device accessible.",
            canvas: "Canvas is not supported.",
          }}
        />
        <ScanSubTitle>
          환경을 위한 올바른 분리수거를 위해,
          <br />
          쓰레기의 전체 모습이 잘 보이도록 사진을 촬영해 주세요.
        </ScanSubTitle>
        <ScanSubmitButton
          onClick={() => {
            setImage(camera.current!.takePhoto());
          }}
        >
          전송하기
        </ScanSubmitButton>
      </CameraContainer>
      <Footer state="ML" />
    </>
  );
};

export default EcoScanPage;
