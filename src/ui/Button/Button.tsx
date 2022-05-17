import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button(props: ButtonProps) {
  return (
    <button
      {...props}
      className="w-full flex justify-center py-2 px-4 border-transparent
      rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600
      hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2
      focus:ring-indigo-500"
    />
  );
}
