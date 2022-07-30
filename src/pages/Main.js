import { useState, useEffect } from "react";
import Cards from "../components/Cards";

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
      <Cards items={latestProducts} />
    </section>
  );
}

function Banner() {
  const data = ["bg-cyan-200", "bg-yellow-200", "bg-rose-400"];
  const slides = [data[data.length - 1], ...data, data[0]];
  const transitionTime = 300;

  const [currentIndex, setCurrentIndex] = useState(1);
  const [transition, setTransition] = useState(`duration-${transitionTime}`);

  function replaceSlide(index) {
    setTimeout(() => {
      setTransition("");
      setCurrentIndex(index);
    }, transitionTime);
  }
  function handleSwipe(direction) {
    let index = currentIndex + direction;
    setCurrentIndex(index);
    if (index < 1) {
      index += data.length;
      replaceSlide(index);
    } else if (index >= data.length + 1) {
      index -= data.length;
      replaceSlide(index);
    }
    setTransition(`duration-${transitionTime}`);
  }

  return (
    <div className="relative w-[1024px] overflow-hidden">
      <button
        className="absolute top-[45%] left-[calc(50%-515px)] z-[1] text-4xl text-neutral-300"
        onClick={() => {
          handleSwipe(-1);
        }}
      >
        〈
      </button>
      <button
        className="absolute top-[45%] right-[calc(50%-512px)] z-[1] text-4xl text-neutral-300"
        onClick={() => handleSwipe(1)}
      >
        〉
      </button>

      <div>
        <div
          className={`flex ${transition}`}
          style={{
            transform: `translateX(${-100 * currentIndex}%)`,
          }}
        >
          {slides.map((color, index) => (
            <div
              key={index}
              className={`h-[300px] w-[1024px] flex-none ${slides[index]}`}
            >
              {index}
              {currentIndex}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;
