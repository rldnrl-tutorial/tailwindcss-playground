/* eslint-disable @next/next/no-img-element */
import React from "react";

interface CardProps {
  title?: string;
  description?: string;
  src: string;
  alt: string;
}

export default function Card({ title, description, src, alt }: CardProps) {
  return (
    <div className="mt-8">
      <div className="bg-white rounded-md overflow-hidden shadow">
        <img src={src} alt={alt} className="w-full h-32 sm:h-48 object-cover" />
        <div>
          <span className="font-bold">{title}</span>
          <span className="block text-gray-500 text-sm">{description}</span>
        </div>
      </div>
    </div>
  );
}
