import axios from "axios";
import CategoryItem from "./CategoryItem";

export default async function CategoryContainer() {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const data = await fetch("http://localhost:3000/api/category", requestOptions)
    .then((response) => response.text())
    .then((result) => {
      return JSON.parse(result);
    })
    .catch((error) => console.error(error));
  console.log();

  if (data) {
    return (
      <div className="w-full py-8 my-8 flex flex-col gap-4 bg-[#FFF5F2] border-y-[1px] border-[#FE6437] min-h-[466px]">
        <h1 className="font-500 text-[24px]  text-center font-bold">
          پر بازدیدترین دسته‌ها
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 justify-items-center">
          {data.map((item) => {
            return <CategoryItem key={item.id}>{item.name}</CategoryItem>;
          })}
        </div>
      </div>
    );
  }
}
