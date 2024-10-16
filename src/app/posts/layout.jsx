import Image from "next/image";
import img from "@/public/img/support.png";

export default function Layout({ children }) {
  return (
    <>
      <div className="w-full flex justify-center relative">
        <div className="flex flex-col-reverse md:flex-row w-full gap-4 justify-evenly min-h-[100vh] max-w-[1280px]">
          <div className="aside sticky top-4 md:max-w-[423px] px-3 w-full flex flex-col gap-4 items-center h-max ">
            <div className="bg-white border-black border max-w-[402px] h-auto rounded-[18px] flex flex-col items-center">
              <div className="md:w-auto py-2 flex flex-col items-center">
                <div className="md:w-full flex flex-col justify-center items-center w-[90%]">
                  <h1 className="text-[22px] font-semibold">
                    ارتباط با مشاورین پرش
                  </h1>
                  <p className="text-center">
                    برای استفاده از تخفیفات ویژه و دریافت مشاوره تحصیلی رایگان، شماره موبایلت رو وارد کن
                  </p>
                </div>
                <div className="left w-full flex flex-col md:w-full px-3 h-auto justify-center items-center gap-4">
                  <input
                    defaultValue={"09"}
                    type="text"
                    className="md:w-full w-[308px] rounded-[10px] border-[0.5px] focus:outline-none border-black text-center h-[40px]"
                    name=""
                    id=""
                  />
                  <button className="h-[40px] w-[308px] md:w-full bg-[#FF7A00] border border-b-[4px] rounded-[10px] font-[600] text-white">
                    ثبت شماره
                  </button>
                </div>
              </div>
              <div className="w-full flex justify-center items-end h-full">
                <Image className="md h-auto" src={img} height={189} />
              </div>
            </div>
            <div className="w-full border-[1px] border-black max-h-[690px] flex flex-col rounded-[18px] bg-[#FFF5F2]">
              <div className="w-full px-5 py-4 gap-4 flex flex-col h-full">
                {/* Additional content here */}
                
                <div className="w-full text-center bg-white border border-black border-b-[2px] h-[44px] flex items-center justify-center rounded-[6px]">
                رفع خستگی هنگام مطالعه
                </div>
                <div className="w-full text-center bg-white border border-black border-b-[2px] h-[44px] flex items-center justify-center rounded-[6px]">
                رفع خستگی هنگام مطالعه
                </div>
                <div className="w-full text-center bg-white border border-black border-b-[2px] h-[44px] flex items-center justify-center rounded-[6px]">
                رفع خستگی هنگام مطالعه
                </div>
                <div className="w-full text-center bg-white border border-black border-b-[2px] h-[44px] flex items-center justify-center rounded-[6px]">
                رفع خستگی هنگام مطالعه
                </div>
                <div className="w-full text-center bg-white border border-black border-b-[2px] h-[44px] flex items-center justify-center rounded-[6px]">
                رفع خستگی هنگام مطالعه
                </div>
                <div className="w-full text-center bg-white border border-black border-b-[2px] h-[44px] flex items-center justify-center rounded-[6px]">
                رفع خستگی هنگام مطالعه
                </div>
                <div className="w-full text-center bg-white border border-black border-b-[2px] h-[44px] flex items-center justify-center rounded-[6px]">
                رفع خستگی هنگام مطالعه
                </div>
                <div className="w-full text-center bg-white border border-black border-b-[2px] h-[44px] flex items-center justify-center rounded-[6px]">
                رفع خستگی هنگام مطالعه
                </div>
              </div>
              <div className="h-[4rem] bg-[#FFF5F2] border-t-[1px] border-black w-full gap-4 rounded-b-[18px] flex justify-start px-4 items-center">
                <div className="w-[36px] h-[36px] bg-black rounded-[5px]">
                  <button className="border border-black rounded-[5px] bg-white w-[36px] h-[36px] flex justify-center items-center">
                    <svg
                      width="10"
                      height="17"
                      viewBox="0 0 10 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.44337 1.62402L1.60938 8.39429L8.44337 15.1645"
                        stroke="#5B5B5B"
                        strokeWidth="2.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div className="w-[36px] h-[36px] bg-black rounded-[5px]">
                  <button className="border border-black rounded-[5px] bg-white w-[36px] h-[36px] flex justify-center items-center">
                    <svg
                      width="10"
                      height="17"
                      viewBox="0 0 10 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.91601 1.61816L8.75 8.38843L1.91601 15.1587"
                        stroke="#5B5B5B"
                        strokeWidth="2.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="main py-4 lg:max-w-[766px] mx-3 overflow-auto">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}