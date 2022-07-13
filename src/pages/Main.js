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
      <div className="flex w-[1024px] flex-wrap">
        {latestProducts.map((obj, index) => (
          <Card key={index} {...obj} />
        ))}
      </div>
    </section>
  );
}

function Banner() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const movePrev = () => {
    if (currentIndex > 1) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    setCurrentIndex((prevState) => prevState + 1);
  };

  return <div className="m-auto w-[1024px]"></div>;
}

export default Main;
