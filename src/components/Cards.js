import dayjs from "dayjs";
import useFetch from "../hooks/useFetch";

function Cards(props) {
  const { loading, data, error } = useFetch(props.url);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  console.log(data);
  return (
    <div className="flex w-[1024px] flex-wrap gap-[11px]">
      {data.results.map((obj, index) => (
        <Card key={index} {...obj} />
      ))}
    </div>
  );
}

function Card({ name, url }) {
  const { loading, data, error } = useFetch(url);
  const time = "2022-05-09T14:58:04+09:00";
  const price = 123456;

  function getTimeDiff() {
    const timeDiffSec = dayjs().diff(dayjs(time), "s");

    if (timeDiffSec < 60) {
      return `${timeDiffSec}초 전`;
    }
    if (timeDiffSec < 3600) {
      return `${parseInt(timeDiffSec / 60)}분 전`;
    }
    if (timeDiffSec < 86400) {
      return `${parseInt(timeDiffSec / 3600)}시간 전`;
    }
    if (timeDiffSec < 604800) {
      return `${parseInt(timeDiffSec / 86400)}일 전`;
    }
    if (timeDiffSec < 2.628e6) {
      return `${parseInt(timeDiffSec / 604800)}주 전`;
    }
    if (timeDiffSec < 3.154e7) {
      return `${parseInt(timeDiffSec / 2.628e6)}달 전`;
    } else {
      return `${parseInt(timeDiffSec / 3.154e7)}년 전`;
    }
  }

  function getKrPrice() {
    return (data.base_experience * 100).toLocaleString("ko-KR");
  }

  if (loading)
    return (
      <div className="block border border-neutral-200">
        <img width="194" height="194" alt="상품이미지" />
        <p>...</p>
        <div>
          <span>...원</span>
        </div>
        <span>...</span>
      </div>
    );

  if (error) return <p>Error!</p>;

  return (
    <div className="block border border-neutral-200">
      <a href={`/products/${data.id}`}>
        <img
          src={data.sprites.front_default}
          width="194"
          height="194"
          alt="상품이미지"
        />
        <p>{name}</p>
        <div>
          {getKrPrice()} <span>원</span>
        </div>
        <span>{getTimeDiff()}</span>
      </a>
    </div>
  );
}

export default Cards;
