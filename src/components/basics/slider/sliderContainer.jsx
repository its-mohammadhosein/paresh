"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { useEffect, useState } from "react";

export default function SliderContainer({ children, title }) {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="w-full px-3">
      <div className="bg-[#FFF4EA] border-black border-[1px]  flex flex-col justify-center items-center  rounded-[20px] w-full h-[532px] md:h-[372px]">
        <h1 className="my-4 text-[20px] font-semibold">{title}</h1>
        <div className="w-full md:h-[200px] h-full">
          <Carousel
            itemsPerView={2}
            opts={{
              align: "center",
              loop: true,
            }}
            setApi={setApi}
            className="  w-full"
          >
            <CarouselContent className="[&>*]:flex [&>*]:justify-center  [&>*]:items-center ">
              {children.map((item) => {
                return (
                  <CarouselItem
                    key={item.id}
                    className={` ${
                      item.id == current ? "" : "basis-1/3"
                    } md:basis-[712px] basis-[324px]  md:flex justify-center items-center transition-all duration-700 `}
                  >
                    <div
                      className={`bg-white transition-all duration-700  flex flex-col-reverse md:flex-row rounded-[9px] border-[#666666] border-[1px] border-b-[4px] w-full x-w-[324px] ${
                        item.id == current
                          ? "lg:h-[186px] h-[390px]"
                          : "h-[132px]"
                      } `}
                    >
                      <div className="w-full h-full flex flex-col">
                        <div className="w-full h-full flex justify-end items-center font-400 font-semibold text-[12px] pr-2">
                          <p className=" text-end md:w-[65%] leading-[28px]">
                            {item.content}
                          </p>
                        </div>
                        <div className="slide-footer px-2 h-[3rem] border-t-[1px] border-black/10 flex justify-between items-center [&>*]:flex [&>*]:justify-center [&>*]:items-center text-[8px]">
                          <div className="flex gap-0.5">
                            <div className="">
                              <svg
                                width="21"
                                height={item.id == current ? "20" : "10"}
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
                            <p
                              className={`${
                                item.id == current ? "text-[14px]" : ""
                              }`}
                            >
                              28نظر
                            </p>
                          </div>
                          <div className="flex gap-2">
                            {Array.from({ length: item.coments.stars }).map(
                              (newitems, i) => {
                                return (
                                  <svg
                                    key={i}
                                    width="18"
                                    height={item.id == current ? "17" : "8"}
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
                            className={`${
                              item.id == current ? "text-[14px]" : ""
                            }`}
                          >
                            زمان مطالعه : {item.readingTime} دقیقه
                          </div>
                        </div>
                      </div>
                      <div className="img-container rounded-r-[6px] md:w-[256px] w-full h-full bg-amber-500 "></div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        </div>
        <div className="w-full h-20 flex justify-center items-center gap-2">
          <div className="w-[36px] h-[36px] rounded-[5px]  bg-black hover:[&_button]:m-0">
            <button
              onClick={() => {
                api.scrollPrev();
              }}
              className="w-[36px] h-[36px] border-[1px] border-black bg-white transition-all flex justify-center -mt-[2px] items-center hover:border-b-[1px] duration-200 rounded-[5px] "
            >
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
          <div className="w-[194px] h-[36px] border-[1px] border-b-[3px] bg-white border-black rounded-[5px] flex justify-center items-center">
            <div className="flex justify-evenly items-center w-full">
              <svg
                width="14"
                height="16"
                viewBox="0 0 14 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_0_724)">
                  <path
                    d="M10.7813 4.80392C12.7812 5.95862 12.7812 8.84538 10.7812 10.0001L5.56253 13.0131C3.56253 14.1678 1.06253 12.7244 1.06253 10.415L1.06253 4.38897C1.06253 2.07957 3.56253 0.636192 5.56253 1.79089L10.7813 4.80392Z"
                    fill="#FF7A00"
                  />
                  <path
                    d="M11.0312 10.4331C13.3646 9.08594 13.3646 5.71806 11.0313 4.37091L5.81253 1.35788C3.47919 0.010729 0.562527 1.69467 0.562526 4.38897L0.562526 10.415C0.562526 13.1093 3.47919 14.7933 5.81253 13.4461L11.0312 10.4331Z"
                    stroke="#FF7A00"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_0_724"
                    x="0.0625"
                    y="0.383057"
                    width="13.2188"
                    height="15.038"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="1" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_0_724"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_0_724"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <svg
                width="9"
                height="10"
                viewBox="0 0 9 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_0_738)">
                  <rect
                    width="6.44722"
                    height="6.44722"
                    rx="3.22361"
                    transform="matrix(-1 0 0 1 7.57422 1.29004)"
                    fill="white"
                  />
                  <rect
                    x="0.5"
                    y="-0.5"
                    width="7.44722"
                    height="7.44722"
                    rx="3.72361"
                    transform="matrix(-1 0 0 1 8.57422 1.29004)"
                    stroke="#FF7A00"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_0_738"
                    x="0.126953"
                    y="0.290039"
                    width="8.44727"
                    height="9.44727"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="1" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 0.478431 0 0 0 0 0 0 0 0 1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_0_738"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_0_738"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <svg
                width="9"
                height="10"
                viewBox="0 0 9 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_0_738)">
                  <rect
                    width="6.44722"
                    height="6.44722"
                    rx="3.22361"
                    transform="matrix(-1 0 0 1 7.57422 1.29004)"
                    fill="white"
                  />
                  <rect
                    x="0.5"
                    y="-0.5"
                    width="7.44722"
                    height="7.44722"
                    rx="3.72361"
                    transform="matrix(-1 0 0 1 8.57422 1.29004)"
                    stroke="#FF7A00"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_0_738"
                    x="0.126953"
                    y="0.290039"
                    width="8.44727"
                    height="9.44727"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="1" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 0.478431 0 0 0 0 0 0 0 0 1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_0_738"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_0_738"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <svg
                width="9"
                height="10"
                viewBox="0 0 9 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_0_738)">
                  <rect
                    width="6.44722"
                    height="6.44722"
                    rx="3.22361"
                    transform="matrix(-1 0 0 1 7.57422 1.29004)"
                    fill="white"
                  />
                  <rect
                    x="0.5"
                    y="-0.5"
                    width="7.44722"
                    height="7.44722"
                    rx="3.72361"
                    transform="matrix(-1 0 0 1 8.57422 1.29004)"
                    stroke="#FF7A00"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_0_738"
                    x="0.126953"
                    y="0.290039"
                    width="8.44727"
                    height="9.44727"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="1" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 0.478431 0 0 0 0 0 0 0 0 1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_0_738"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_0_738"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <svg
                width="9"
                height="10"
                viewBox="0 0 9 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_0_738)">
                  <rect
                    width="6.44722"
                    height="6.44722"
                    rx="3.22361"
                    transform="matrix(-1 0 0 1 7.57422 1.29004)"
                    fill="white"
                  />
                  <rect
                    x="0.5"
                    y="-0.5"
                    width="7.44722"
                    height="7.44722"
                    rx="3.72361"
                    transform="matrix(-1 0 0 1 8.57422 1.29004)"
                    stroke="#FF7A00"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_0_738"
                    x="0.126953"
                    y="0.290039"
                    width="8.44727"
                    height="9.44727"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="1" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 0.478431 0 0 0 0 0 0 0 0 1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_0_738"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_0_738"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <svg
                width="22"
                height="10"
                viewBox="0 0 22 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="-0.5"
                  width="20.2478"
                  height="8.17969"
                  rx="4.08984"
                  transform="matrix(-1 0 0 1 21.5898 1.42285)"
                  fill="white"
                  fill-opacity="0.33"
                  stroke="#FF7A00"
                />
                <g filter="url(#filter0_d_0_727)">
                  <rect
                    width="10.0817"
                    height="6.1868"
                    rx="3.0934"
                    transform="matrix(-1 0 0 1 20.5898 1.42285)"
                    fill="#FF7A00"
                  />
                  <rect
                    x="0.5"
                    y="-0.5"
                    width="11.0817"
                    height="7.1868"
                    rx="3.5934"
                    transform="matrix(-1 0 0 1 21.5898 1.42285)"
                    stroke="#FF7A00"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_0_727"
                    x="9.50806"
                    y="0.422852"
                    width="12.0818"
                    height="9.18677"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="1" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_0_727"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_0_727"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
          <div className="w-[36px] h-[36px] rounded-[5px] bg-black hover:[&_button]:m-0">
            <button
              onClick={() => {
                api.scrollNext();
              }}
              className="w-[36px] border-[1px] border-black bg-white transition-all hover:border-b-[1px] duration-200 -mt-[2px] flex justify-center items-center rounded-[5px]  h-[36px]"
            >
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
    </div>
  );
}
