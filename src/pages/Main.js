import { useState, useEffect } from "react";
import Card from "../components/Card";

function Main() {
  const [latestProducts, setLatestProducts] = useState([]);
  useEffect(() => {
    fetch("/latestProducts")
      .then((res) => res.json())
      .then((res) => setLatestProducts(res.data));
  }, []);

  return (
    <section className="flex w-full flex-col items-center">
      <Banner />
      <h2 className="mb-6 w-[1024px] text-2xl">오늘의 상품 추천</h2>
      <div className="flex w-[1024px] flex-wrap gap-[11px]">
        {latestProducts.map((obj, index) => (
          <Card key={index} {...obj} />
        ))}
      </div>
    </section>
  );
}

function Banner() {
  const slides = ["bg-cyan-200", "bg-yellow-200", "bg-rose-400"];

  const [currentIndex, setCurrentIndex] = useState(1);

  return (
    <div className="relative w-[1024px] overflow-hidden">
      <button
        className="absolute top-[45%] left-[calc(50%-515px)] z-[1] text-4xl text-neutral-300"
        onClick={() => {}}
      >
        〈
      </button>
      <button className="absolute top-[45%] right-[calc(50%-512px)] z-[1] text-4xl text-neutral-300">
        〉
      </button>

      <div className={`flex`}>
        {slides.map((color, index) => (
          <div
            key={index}
            className={`h-[300px] w-[1024px] flex-none ${slides[index]}`}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
