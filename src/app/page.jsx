import CategoryContainer from "@/components/basics/CategoryContianer";
import CustomCard from "@/components/basics/CustomCard";
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

  const data = await fetch("http://localhost:3000/api/carousel", requestOptions)
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
      <SliderContainer title={"مقالات پیشنهادی"}>{data}</SliderContainer>
      <div className="w-full px-3">
        <div className="h-[274px] w-full bg-[#FFF4EA] my-2  rounded-[15px] border-[1px] border-black">
          <h1 className="py-8 md:text-center text-end px-8 font-semibold text-[20px]">
            پرش در رسانه‌ها
          </h1>
          <div className="w-full px-2 lg:flex lg:justify-evenly grid grid-cols-2 justify-items-center gap-y-4 py-2 ">
            <div className="bg-black hover:[&>div]:m-0 w-[142px] lg:w-[253px] lg:h-[112px] h-[63px] rounded-[17px]">
              <div className="lg:w-[253px] lg:h-[112px] border-[1px] border-black -mt-1 duration-200 transition-all bg-white flex justify-center items-center rounded-[15px]">
                <Image
                  alt=""
                  src={img}
                  className=""
                  width={171}
                  height={82}
                  style={{ width: "90%" }}
                />
              </div>
            </div>
            <div className="bg-black hover:[&>div]:m-0 w-[142px] lg:w-[253px] lg:h-[112px] h-[63px] rounded-[17px]">
              <div className="w-[142px] lg:w-[253px] lg:h-[112px] h-[63px] flex justify-center border-[1px] border-black items-center  -mt-1 bg-white transition-all-mt-1 duration-200 transition-all rounded-[15px]">
                <Image
                  alt=""
                  src={dmg}
                  width={171}
                  height={82}
                  style={{ width: "90%" }}
                />
              </div>
            </div>
            <div className="bg-black hover:[&>div]:m-0 w-[142px] lg:w-[253px] lg:h-[112px] h-[63px] rounded-[17px]">
              <div className="flex justify-center border-[1px] border-black items-center w-[142px] lg:w-[253px] lg:h-[112px] h-[63px] rounded-[15px] bg-white -mt-1 duration-200 transition-all">
                <Image
                  alt=""
                  src={dmg1}
                  width={171}
                  height={82}
                  style={{ width: "85%" }}
                />
              </div>
            </div>
            <div className="bg-black hover:[&>div]:m-0 w-[142px] lg:w-[253px] lg:h-[112px] h-[63px] rounded-[17px]">
              <div className="w-[142px] lg:w-[253px] lg:h-[112px] h-[63px] flex justify-center border-[1px] border-black items-center rounded-[15px] bg-white -mt-1 duration-200 transition-all">
                <Image
                  alt=""
                  src={dmg2}
                  width={171}
                  height={82}
                  style={{ width: "85%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <SliderContainer title={"مقالات کنکوری"}>{data}</SliderContainer>
      <div className="w-full px-3">
        
      <div className="h-[274px] w-full flex flex-col gap-4 justify-center items-center bg-[#FFF4EA] border-black border-[1px] rounded-[15px] my-4">
      <h1 className="w-full text-center font-bold">خرید بسته معلم خصوصی</h1>
        <div className="w-[253px] flex justify-center items-center h-[112px] rounded-[15px] border-black  border-[1px] border-b-[7px]">
          {/* <Image alt="" src={img} width={171} height={82} /> */}
        </div>
      </div>
      </div>
      
    </>
  );
}
