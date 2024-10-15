export default function layout({ children }) {
  return (
    <>
      <div className="flex">
        <div className="aside w-[50%] bg-green-50 h-[500px]">
          <div className="bg-white w-[402px] h-[423px] flex flex-col items-center">
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
            <div className="w-full h-[400px]"></div>
          </div>
        </div>
        <div className="main w-[766px] min-h-[100vh]">{children}</div>
      </div>
    </>
  );
}
