import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 90 90" {...props}>
      <defs>
        <clipPath id="clip1">
          <path d="M21 33h46v48H21zm0 0"></path>
        </clipPath>
        <clipPath id="clip2">
          <path d="M42.824 76.54c0-6.978-.054-23.778-13.855-28.747 0 0 8.023 4.2 10.312 16.48 0 0-15.918 3.207-17.492-23.324 0 0 21.672 0 24.129 17.793 0 0 4.277-10.61 20.23-7.515 0 0-.804 11.492-14.585 13.48 0 0-.227-6.074 7.687-10.277 0 0-12.094.226-12.094 22.11v.315c-.976 1.125-1.707 2.383-2.25 3.73a13.115 13.115 0 00-2.062-3.522v-.524zm2.59-25.333c-1.297-3.508-3.02-12.469 10.367-17.777 0 0 3.301 16.203-8.117 18.957-.34-3.617 1.125-8.887 3.316-11.473-2.605 1.816-4.894 6.637-5.566 10.293zm0 0"></path>
        </clipPath>
        <linearGradient
          id="linear0"
          x1="-1018.386"
          x2="-1018.308"
          y1="1070.881"
          y2="1070.881"
          gradientTransform="scale(564.114 599.65519) rotate(-90 -1044.528 26.276)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#0E7139"></stop>
          <stop offset="1" stopColor="#A7CF38"></stop>
        </linearGradient>
        <linearGradient
          id="linear1"
          x1="15.457"
          x2="46.793"
          y1="39.801"
          y2="12.264"
          gradientTransform="scale(1.875)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#108040"></stop>
          <stop offset="1" stopColor="#E5E875"></stop>
        </linearGradient>
        <linearGradient
          id="linear2"
          x1="3.884"
          x2="35.219"
          y1="26.631"
          y2="-0.906"
          gradientTransform="scale(1.875)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#108040"></stop>
          <stop offset="1" stopColor="#E5E875"></stop>
        </linearGradient>
        <linearGradient
          id="linear3"
          x1="10.68"
          x2="42.015"
          y1="34.364"
          y2="6.827"
          gradientTransform="scale(1.875)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#108040"></stop>
          <stop offset="1" stopColor="#E5E875"></stop>
        </linearGradient>
      </defs>
      <g>
        <g clipPath="url(#clip1)">
          <g clipPath="url(#clip2)">
            <path fill="url(#linear0)" d="M21.77 33.43h44.363v47.156H21.77zm0 0"></path>
          </g>
        </g>
        <path
          fill="url(#linear1)"
          d="M68.477 23.27c8.437 11.492 9.543 29.644-.207 41.98-11.59 14.645-33.563 16.164-47.403 5.21-4.722-3.73-8.043-8.585-9.918-13.948 1.727 7.37 5.852 14.215 12.246 19.258 15.016 11.886 36.844 9.335 48.73-5.684 11.286-14.25 9.583-34.61-3.448-46.816zm0 0"
        ></path>
        <path
          fill="url(#linear2)"
          d="M44.664 15.168C28.875 16.613 22.742 27.02 22.742 27.02c2.813 4.5 10.54 5.457 15.528 3.898 3.035-.957 5.738-2.773 8.398-4.52 2.664-1.761 5.418-3.484 8.531-4.253 3.114-.77 6.656-.375 9.04 1.761a29.474 29.474 0 00-11.216-12.75A29.748 29.748 0 0036.617 6.75c-4.328.133-8.734 1.313-12.094 4.031-3.355 2.719-5.25 7.07-5.097 11.117 9.656-9.785 25.238-6.73 25.238-6.73zm0 0"
        ></path>
        <path
          fill="url(#linear3)"
          d="M41.21 76.445c16.935 0 30.642-13.726 30.642-30.64 0-.336 0-.657-.02-.992-.508 15.414-13.144 27.75-28.687 27.75-15.844 0-28.708-12.844-28.708-28.708 0-15.523 12.336-28.18 27.75-28.687-.32-.02-.656-.02-.992-.02-16.933 0-30.64 13.727-30.64 30.641 0 16.91 13.746 30.656 30.656 30.656zm0 0"
        ></path>
      </g>
    </Svg>
  );
};

export default Icon;
