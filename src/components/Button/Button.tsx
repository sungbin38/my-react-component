import React from "react";
import styled from "styled-components";

export interface ButtonProps {
    label: string;
}

const Button = (props: ButtonProps) => {
    return <Wrapper>{props.label}</Wrapper>;
};

const Wrapper  = styled.button`
  background: #1ea7fd;
  font-size: 50px;
`
export default Button;