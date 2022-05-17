import React, { ReactNode } from "react";
import Input from "./Input";
import Label from "./Label";

interface FormProps {
  children?: ReactNode;
}

export default function Form({ children }: FormProps) {
  return <>{children}</>;
}

Form.Input = Input;
Form.Label = Label;
