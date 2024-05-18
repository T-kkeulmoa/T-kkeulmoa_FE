declare namespace TrashCan {
  //Basic

  //DTO
  export interface LoadReqDto {
    latitude: stirng;
    longitude: string;
  }

  export interface LoadResDto {
    address: string;
    detailAddress: string;
    litterBinReviewResponseDtoList: {
      imageUrl: string;
      review: string;
    }[];
  }
  [];

  //Form type

  //Store
}
