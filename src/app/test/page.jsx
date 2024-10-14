import SliderContainer from "@/components/basics/slider/sliderContainer";

export default async function page() {
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
      <SliderContainer prop={data}>{data}</SliderContainer>
    </>
  );
}
