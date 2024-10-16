export default async function page() {
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
      <div className="w-full p-4 min-h-[100vh] flex flex-col items-center border border-black rounded-[20px] bg-[#FFF4EA]">
        <h1 className="w-full my-4 text-[22px] font-semibold text-center">
          مقالات پیشنهادی
        </h1>
        <div className="w-full flex flex-col justify-center items-center gap-4 ">
          {data.map((item, i) => {
            return (
              <div
                key={i}
                className={`bg-white lg:max-h-[250px] transition-all duration-700  flex flex-col-reverse lg:flex-row rounded-[9px] border-[#666666] border-[1px] border-b-[4px] w-full lg:h-[186px] h-[390px] `}
              >
                <div className="w-full h-full flex flex-col">
                  <div className="w-full h-full flex justify-end items-center font-400 font-semibold text-[12px] pr-2">
                    <p className=" text-end w-full leading-[28px]">
                      {item.content}
                    </p>
                  </div>
                  <div className="slide-footer px-2 h-[3rem] border-t-[1px] border-black/10 grid md:grid-cols-3 grid-cols-3 justify-items-center [&>*]:flex  [&>*]:items-center text-[8px]">
                    <div className="flex gap-0.5">
                      <div className="">
                        <svg
                          width="21"
                          height="20"
                          viewBox="0 0 21 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.19141 19.1406C5.01741 19.1405 4.85059 19.0713 4.72756 18.9482C4.60453 18.8252 4.53533 18.6584 4.53516 18.4844V15.2031H2.56641C1.48097 15.2031 0.597656 14.3198 0.597656 13.2344V2.73438C0.597656 1.64894 1.48097 0.765625 2.56641 0.765625H18.3164C19.4018 0.765625 20.2852 1.64894 20.2852 2.73438V13.2344C20.2852 14.3198 19.4018 15.2031 18.3164 15.2031H10.3436L5.60156 18.9969C5.48519 19.0901 5.3405 19.1408 5.19141 19.1406ZM2.56641 2.07812C2.20416 2.07812 1.91016 2.37278 1.91016 2.73438V13.2344C1.91016 13.596 2.20416 13.8906 2.56641 13.8906H5.19141C5.36545 13.8906 5.53237 13.9598 5.65545 14.0828C5.77852 14.2059 5.84766 14.3728 5.84766 14.5469V17.1194L9.70312 14.0343C9.81955 13.9412 9.96421 13.8906 10.1133 13.8906H18.3164C18.6787 13.8906 18.9727 13.596 18.9727 13.2344V2.73438C18.9727 2.37278 18.6787 2.07812 18.3164 2.07812H2.56641Z"
                            fill="#6B6B6B"
                          />
                          <path
                            d="M15.6914 7.32812H5.19141C5.01736 7.32812 4.85044 7.25898 4.72737 7.13591C4.6043 7.01284 4.53516 6.84592 4.53516 6.67188C4.53516 6.49783 4.6043 6.33091 4.72737 6.20784C4.85044 6.08477 5.01736 6.01562 5.19141 6.01562H15.6914C15.8655 6.01562 16.0324 6.08477 16.1554 6.20784C16.2785 6.33091 16.3477 6.49783 16.3477 6.67188C16.3477 6.84592 16.2785 7.01284 16.1554 7.13591C16.0324 7.25898 15.8655 7.32812 15.6914 7.32812ZM10.4414 9.95312H5.19141C5.01736 9.95312 4.85044 9.88398 4.72737 9.76091C4.6043 9.63784 4.53516 9.47092 4.53516 9.29688C4.53516 9.12283 4.6043 8.95591 4.72737 8.83284C4.85044 8.70977 5.01736 8.64062 5.19141 8.64062H10.4414C10.6155 8.64062 10.7824 8.70977 10.9054 8.83284C11.0285 8.95591 11.0977 9.12283 11.0977 9.29688C11.0977 9.47092 11.0285 9.63784 10.9054 9.76091C10.7824 9.88398 10.6155 9.95312 10.4414 9.95312Z"
                            fill="#6B6B6B"
                          />
                        </svg>
                      </div>
                      <p className={`text-[10px] md:text-[14px]`}>28نظر</p>
                    </div>
                    <div className="flex justify-center gap-2 w-full">
                      {Array.from({ length: item.coments.stars }).map(
                        (newitems, i) => {
                          return (
                            <svg
                              className="w-3 md:w-4 "
                              key={i}
                              viewBox="0 0 18 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7.87301 1.49821C8.17236 0.576898 9.47577 0.576899 9.77512 1.49821L10.7708 4.56259C11.0386 5.38663 11.8065 5.94456 12.6729 5.94456H15.895C16.8637 5.94456 17.2665 7.18417 16.4828 7.75357L13.8761 9.64746C13.1751 10.1567 12.8818 11.0595 13.1495 11.8835L14.1452 14.9479C14.4445 15.8692 13.3901 16.6353 12.6064 16.0659L9.99964 14.1721C9.29867 13.6628 8.34947 13.6628 7.6485 14.1721L5.04178 16.0659C4.25807 16.6353 3.20359 15.8692 3.50294 14.9479L4.49862 11.8835C4.76637 11.0595 4.47305 10.1567 3.77207 9.64746L1.16536 7.75357C0.381645 7.18417 0.78442 5.94456 1.75314 5.94456H4.97522C5.84167 5.94456 6.60959 5.38663 6.87734 4.56259L7.87301 1.49821Z"
                                fill="#FFED4D"
                                stroke="#EDB900"
                              />
                            </svg>
                          );
                        }
                      )}
                    </div>
                    <div
                      className={`md:text-[14px] flex justify-end text-end text-[10px]`}
                    >
                      زمان مطالعه : {item.readingTime} دقیقه
                    </div>
                  </div>
                </div>
                <div className="img-container md: lg:w-[256px] lg:s rounded-t-[6px] sm:rounded-r-[6px]  w-full h-full bg-amber-500 "></div>
              </div>
            );
          })}
        </div>

        <div className="h-24 bg-[#FFF5F2] w-full gap-4 rounded-b-[18px] flex justify-center px-4 items-center">
          <div className="w-[36px] h-[36px] bg-black rounded-[5px] hover:[&>button]:-m-0 duration-200 transition-all">
            <button className="duration-200 border border-black transition-all rounded-[5px] bg-white w-[36px] h-[36px] flex justify-center items-center -mt-1">
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
                  stroke-width="2.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className=" flex justify-evenly gap-2">
            <div className="w-[30px] h-[30px] rounded-[5px] flex justify-center items-center border border-black">
              4
            </div>
            <div className="w-[30px] h-[30px] rounded-[5px] flex justify-center items-center border border-black">
              3
            </div>
            <div className="w-[30px] h-[30px] rounded-[5px] flex justify-center items-center border border-black">
              2
            </div>
            <div className="w-[30px] h-[30px] rounded-[5px] flex justify-center items-center border border-black">
              1
            </div>
          </div>
          <div className="w-[36px] h-[36px] bg-black rounded-[5px] hover:[&>button]:-m-0 duration-200 transition-all">
            <button className="duration-200 border border-black transition-all rounded-[5px] bg-white w-[36px] h-[36px] flex justify-center items-center -mt-1">
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
                  stroke-width="2.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
