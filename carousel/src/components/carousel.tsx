"use client"
import imageByIndex from "@/lib/utils"
import Autoplay from 'embla-carousel-autoplay'
import { EmblaOptionsType } from "embla-carousel-react"
import useEmblaCarousel from "embla-carousel-react"
import Image from "next/image"
import { useState } from "react"

interface Props {
  slides: number[]
  options?: EmblaOptionsType
}

export default function Carousel({ slides, options }: Props) {
  const [emblaRef] = useEmblaCarousel(options, [Autoplay({ delay: 2000 })])
  const [isLoading, setIsLoading] = useState(true)

  return (
    <section className="w-full overflow-hidden rounded-xl border-2 border-black">
      <div ref={emblaRef}>
        <div className="flex touch-pan-y flex-row h-full">
          {
            slides.map((index) => (
              <div key={index} className="flex flex-[0_0_100%] min-w-0 relative">
                <Image
                  src={imageByIndex(index)}
                  alt="slide"
                  width={1000}
                  height={500}
                  className={`${isLoading ? "scale-105 blur-lg" : "scale-100 blur-0"} block w-full h-80 object-cover transition-all duration-300 ease-in-out`}
                  onLoadingComplete={() => setIsLoading(false)}
                />
              </div>
            ))
          }
        </div>
      </div>
    </section>

  )
}
