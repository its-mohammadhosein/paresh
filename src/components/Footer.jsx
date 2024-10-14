export default function Footer() {
  return (
    <>
      <div className="w-full h-[281px] flex justify-evenly bg-[#FDF7E9] py-8">
        <div className="w-[318px] h-[202px] border-[1px] border-black rounded-[20px]">
          <h1 className="w-full text-center h-10 flex justify-center items-center">
            دسترسی سریع
          </h1>
        </div>
        <div className="w-[318px] h-[202px] border-[1px] border-black rounded-[20px]  flex flex-col">
          <div className="h-full w-full px-8 py-2 gap-4 flex flex-col">
            <div className="w-full flex items-center justify-center font-semibold rounded-full h-10 bg-gray-100 outline-dotted outline-gray-500">
              تهران - خیابان جمهوری - پلاک ۱۲۵۹
            </div>
            <div className="w-full rounded-full h-10 flex font-semibold  items-center justify-center bg-gray-100 outline-dotted outline-gray-500">
              <p className="text-[10px] leading-3 flex items-center">(021) -</p>
              <p className="leading-3">۶۲۹۹۹۶۵۷</p>{" "}
            </div>
          </div>
          <div className="w-full h-[45px] bg-gray-200/70 rounded-b-[20px]"></div>
        </div>
        <div className="w-[482px] h-[202px]  rounded-[20px] bg-black">
          <div className="w-full flex h-full hover:m-0 -mt-1 bg-white rounded-[20px] duration-200 transition-all ">
            <div className="left flex flex-col w-[284px] h-auto  justify-center items-center gap-4">
              <input
                defaultValue={"09"}
                type="text"
                className="w-[260px] rounded-[10px] border-[0.5px] focus:outline-none border-black text-center h-[40px]"
                name=""
                id=""
              />
              <button className="h-[40px] w-[260px] bg-[#FF7A00] border border-b-[4px] rounded-[10px] font-[600] text-white">
                ثبت شماره
              </button>
            </div>
            <div className="right h-auto rounded-r-[20px] w-[198px] bg-green-300"></div>
          </div>
        </div>
      </div>
    </>
  );
}
