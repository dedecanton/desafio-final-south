/* eslint-disable  @typescript-eslint/no-explicit-any */

import * as React from "react";

import { InputElement } from "./Input.style";

type Props = {
  width?: string;
  backgroundColor?: string;
  color?: string;
  type: "text" | "button" | "checkbox";
  onChange: (e:any) => any;
  onKeyPress: (e:any) => any;
  value: string | number;
  placeholder: string;
  addStyles ?:string
};

const Input = (props: Props): any => {
  return (
    <InputElement
    {...props}
      onChange={props.onChange}
      onKeyPress={props.onKeyPress}
      type={props.type || "text"}
      placeholder={props.placeholder}
    />
  );
};

export default Input;
