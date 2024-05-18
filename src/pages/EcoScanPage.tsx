import styled from "styled-components";

import { useState, useRef, useEffect } from "react";
import { Camera } from "react-camera-pro";

import { dataURLtoFile } from "@/shared";

const EcoScanPage = () => {
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
    }
  }, [image]);

  return (
    <>
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
        <button
          onClick={() => {
            setImage(camera.current!.takePhoto());
          }}
        >
          Take photo
        </button>
        <img src={image ? image : ""} alt="Taken photo" />
      </CameraContainer>
    </>
  );
};

const CameraContainer = styled.div`
  div {
    position: absolute;

    top: 42px;

    width: 100%;
    height: 617px;

    z-index: -1;
  }
`;

const Target1 = styled.div`
  position: absolute;
  top: 120px;
  left: 37px;
`;

const Target2 = styled.div`
  position: absolute;
  top: 120px;
  right: 37px;
`;

const Target3 = styled.div`
  position: absolute;
  top: 620px;
  right: 37px;
`;

const Target4 = styled.div`
  position: absolute;
  top: 620px;
  left: 37px;
`;

export default EcoScanPage;
