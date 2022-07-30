import dayjs from "dayjs";

function Cards(props) {
  return (
    <div className="flex w-[1024px] flex-wrap gap-[11px]">
      {props.items.map((obj, index) => (
        <Card key={index} {...obj} />
      ))}
    </div>
  );
}

function Card({ id, name, image, price, time }) {
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

  function getKrPrice(num) {
    return num.toLocaleString("ko-KR");
  }

  return (
    <div className="block border border-neutral-200">
      <a href={`/products/${id}`}>
        <img src={image} width="194" height="194" alt="상품이미지" />
        <p>{name}</p>
        <div>
          {getKrPrice(price)} <span>원</span>
        </div>
        <span>{getTimeDiff()}</span>
      </a>
    </div>
  );
}
export default Cards;
