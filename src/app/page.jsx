import CategoryContainer from "@/components/basics/CategoryContianer";
import SliderContainer from "@/components/basics/slider/sliderContainer";
import { CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";

export default async function Home() {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const data = await fetch("http://localhost:3000/api/Carousel", requestOptions)
    .then((response) => response.text())
    .then((result) => {
      return JSON.parse(result);
    })
    .catch((error) => console.error(error));
  return (
    <>
      <div className="font-[600] text-[30px] w-full flex items-center justify-center ">
        بلاگ پرش
      </div>
      <CategoryContainer />
      <SliderContainer prop={data}>{data}</SliderContainer>
    </>
  );
}
