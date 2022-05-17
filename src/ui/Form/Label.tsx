import React, { LabelHTMLAttributes } from "react";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

export default function Label(props: LabelProps) {
  return (
    <label {...props} className="block text-sm font-medium text-gray-700" />
  );
}
