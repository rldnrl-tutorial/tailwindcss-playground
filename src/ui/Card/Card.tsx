/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
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
        <div className="w-full h-32 relative">
          <Image src={src} alt={alt} layout="fill" objectFit="cover" />
        </div>
        <div>
          <span className="font-bold">{title}</span>
          <span className="block text-gray-500 text-sm">{description}</span>
        </div>
      </div>
    </div>
  );
}
