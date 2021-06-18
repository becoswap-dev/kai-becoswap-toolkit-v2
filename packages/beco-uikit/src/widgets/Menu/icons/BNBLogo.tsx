import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.47955 13.0264L15.5 7.006L21.5233 13.0291L25.0263 9.52605L15.5 0L5.9768 9.5232L9.47955 13.0264ZM0 15.5L3.50312 11.9964L7.006 15.4993L3.50288 19.0024L0 15.5ZM9.47955 17.9739L15.5 23.994L21.5232 17.9711L25.028 21.4722L25.0263 21.4741L15.5 31L5.97184 21.4718L9.47955 17.9739ZM23.994 15.5015L27.4971 11.9984L31 15.5012L27.497 19.0044L23.994 15.5015Z"
        fill="#F3BA2F"
      />
      <path
        d="M19.0528 15.4982H19.0543L15.5 11.9436L11.9485 15.4946L11.9436 15.4995L11.9485 15.5045L15.5 19.0566L19.0546 15.5019L19.0563 15.5L19.0528 15.4982Z"
        fill="#F3BA2F"
      />
    </svg>
  );
};

export default Icon;
