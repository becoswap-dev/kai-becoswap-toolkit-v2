import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path
        d="M3 19a2 2 0 100-4 2 2 0 000 4zM17 5a2 2 0 100-4 2 2 0 000 4zM9 17h5.5a3.5 3.5 0 100-7h-8a3.5 3.5 0 110-7H11"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </Svg>
  );
};

export default Icon;
