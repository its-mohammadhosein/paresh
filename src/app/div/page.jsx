'use client'
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { useEffect, useState } from "react"


export default function page() {
  const [api, setApi] = useState()
  const [current, setCurrent] =useState(0)
  const [count, setCount] = useState(0)

 useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div className="w-full justify-center items-center flex flex-col">
     <div>
     <Carousel setApi={setApi}>
       <CarouselContent className="-ml-1">
        <CarouselItem>
            <div className="w"></div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
     </div>
    {count}
    </div>
  )
}
