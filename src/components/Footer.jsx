export default function Footer() {
  return (
    <>
      <div className="w-full md:h-[281px] h-max flex flex-col md:flex-row justify-evenly border-t-[1px] border-amber-400 bg-[#FDF7E9] px-3 gap-8 py-8">
        <div className="md:w-[318px] bg-white w-full h-[202px] border-[1px] border-black rounded-[20px]">
          <h1 className="w-full text-center h-10 flex justify-center items-center">
            دسترسی سریع
          </h1>
        </div>
        <div className="md:w-[318px] bg-white  w-full h-[202px] border-[1px] border-black rounded-[20px]  flex flex-col">
          <div className="h-full w-full px-8 py-2 gap-4 flex flex-col">
            <div className="w-full flex items-center justify-center md:font-semibold text-end px-2 text-[12px] md:text-[14px] rounded-full h-10 bg-gray-100 outline-dotted outline-gray-500">
              تهران - خیابان جمهوری - پلاک ۱۲۵۹
            </div>
            <div className="w-full rounded-full h-10 flex font-semibold  items-center justify-center bg-gray-100 outline-dotted outline-gray-500">
              <p className="text-[10px]  leading-3 flex items-center">(021) -</p>
              <p className="leading-3">۶۲۹۹۹۶۵۷</p>{" "}
            </div>
          </div>
          <div className="w-full h-[45px] bg-gray-200/70 rounded-b-[20px]"></div>
        </div>
        <div className="md:w-[482px]  w-full md:h-[202px] h-[381px] rounded-[20px] bg-black">
          <div className="w-full flex  md:grid-cols-[1fr,200px] md:grid flex-col h-full hover:m-0 -mt-1 bg-white rounded-[20px] duration-200 transition-all ">
            <div className="md:w-auto py-2 ">
              <div className="w-full flex flex-col justify-center items-center">
                <h1 className="text-[22px] font-semibold">
                  ارتباط با مشاورین پرش
                </h1>
                <p className=" text-center">
                  برای استفاده از تخفیفات ویژه و دریافت مشاوره تحصیلی رایگان،
                  شماره موبایلت رو وارد کن
                </p>
              </div>
              <div className="left w-full flex flex-col md:w-[284px] h-auto  justify-center items-center gap-4">
                <input
                  defaultValue={"09"}
                  type="text"
                  className="md:w-[260px] w-[308px]  rounded-[10px] border-[0.5px] focus:outline-none border-black text-center h-[40px]"
                  name=""
                  id=""
                />
                <button className="h-[40px] w-[308px] md:w-[260px] bg-[#FF7A00] border border-b-[4px] rounded-[10px] font-[600] text-white">
                  ثبت شماره
                </button>
              </div>
            </div>
            <div className="h-full right md:h-auto md:rounded-r-[20px] rounded-b-[20px] w-full md:w-[198px] bg-green-300"></div>
          </div>
        </div>
      </div>
    </>
  );
}
