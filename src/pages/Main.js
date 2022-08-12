import { useState } from "react";
import Cards from "../components/Cards";

function Main() {
  return (
    <section className="flex w-full flex-col items-center">
      <Banner />
      <h2 className="mb-6 w-[1024px] text-2xl">오늘의 상품 추천</h2>
      <Cards url={`https://pokeapi.co/api/v2/pokemon/?limit=100`} />
    </section>
  );
}

function Banner() {
  const data = ["bg-cyan-200", "bg-yellow-200", "bg-rose-400"];
  const slides = [data[data.length - 1], ...data, data[0]];
  const transitionTime = 300;

  const [currentIndex, setCurrentIndex] = useState(1);
  const [transitionDurationValue, setTransitionDurationValue] = useState(
    `0.${transitionTime}s`
  );

  function replaceSlide(index) {
    setTimeout(() => {
      setTransitionDurationValue("0s");
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
    setTransitionDurationValue(`0.${transitionTime}s`);
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
          className={`flex`}
          style={{
            transform: `translateX(${-100 * currentIndex}%)`,
            transitionDuration: `${transitionDurationValue}`,
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
