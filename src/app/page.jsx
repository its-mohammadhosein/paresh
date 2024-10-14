import CategoryContainer from "@/components/basics/CategoryContianer";
import SliderContainer from "@/components/basics/slider/sliderContainer";

import img from "@/public/img/digiato.png";
import dmg from "@/public/img/donya.png";
import dmg1 from "@/public/img/hamshahri.jpg";
import dmg2 from "@/public/img/irna.jpg";
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
      <div className="h-[274px] w-full">
        <div className="w-[1171] px-2 flex justify-evenly">
          <div className="w-[253px] flex justify-center items-center h-[112px] rounded-[15px] border-black  border-[1px] border-b-[7px]">
            <Image alt="" src={img} width={171} height={82} />
          </div>
          <div className="w-[253px] flex justify-center items-center h-[112px] rounded-[15px] border-black  border-[1px] border-b-[7px]">
            <Image alt="" src={dmg} width={171} height={82} />
          </div>
          <div className="w-[253px] flex justify-center items-center h-[112px] rounded-[15px] border-black  border-[1px] border-b-[7px]">
            <Image alt="" src={dmg1} width={171} height={82} />
          </div>
          <div className="w-[253px] flex justify-center items-center h-[112px] rounded-[15px] border-black  border-[1px] border-b-[7px]">
            <Image alt="" src={dmg2} width={171} height={82} />
          </div>
        </div>
      </div>
      <SliderContainer prop={data}>{data}</SliderContainer>
      <div className="h-[274px] w-full flex justify-center items-center ">
      <div className="w-[253px] flex justify-center items-center h-[112px] rounded-[15px] border-black  border-[1px] border-b-[7px]">
            {/* <Image alt="" src={img} width={171} height={82} /> */}
          </div>
      </div>
    </>
  );
}
