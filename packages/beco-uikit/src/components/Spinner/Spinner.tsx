import React from "react";
import styled from "styled-components";

import { SpinnerProps } from "./types";
import LogoIcon from "../Svg/Icons/Logo";

const Container = styled.div`
  position: relative;
`;

const Spinner: React.FC<SpinnerProps> = ({ size = 128 }) => {
  return (
    <Container>
      <LogoIcon width={`${size * 0.5}px`} />
    </Container>
  );
};

export default Spinner;
