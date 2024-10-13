import CategoryContainer from "@/components/basics/CategoryContianer";
import SliderContainer from "@/components/basics/slider/sliderContainer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="font-[600] text-[30px] w-full flex items-center justify-center ">
        بلاگ پرش
      </div>
         <CategoryContainer/>
         <SliderContainer/>
    </>
  );
}
