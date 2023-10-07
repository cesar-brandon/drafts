"use client"

import Image from 'next/image';
import { useState, type ComponentProps } from "react"

function BlurImage(props: ComponentProps<typeof Image>) {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <Image
      {...props}
      alt={props.alt}
      className={`block w-full h-80 rounded-xl object-cover duration-700 ease-in-out
      ${isLoading ? 'scale-105 blur-lg' : 'scale-100 blur-0'}`}
      onLoadingComplete={() => setIsLoading(false)}
    />
  )

}

export default BlurImage;
