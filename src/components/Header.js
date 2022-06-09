import { useState } from "react";

import logo from "../assets/logo.svg";
import sellingProductImg from "../assets/selling-product-img.png";
import searchImg from "../assets/search-img.png";
import menuIcon from "../assets/menu-icon.png";
import menuIconHover from "../assets/menu-icon-hover.png";

function Header() {
  const [isCategoryHover, setIsCategoryHover] = useState(false);

  return (
    <header className="sticky top-0 left-0 z-10 flex w-full justify-center pt-9 bg-white border-b border-neutral-100">
      <div className="flex flex-col w-[1024px]">
        <div className="flex items-center w-[1024px] h-[40px]">
          <a className="flex items-center mr-[100px] w-[136px]" href="/">
            <img src={logo} alt="번개장터 로고" />
          </a>
          <div className="relative border-2 border-red-500 w-[460px] h-[40px] box-border">
            <div className="flex items-center w-full h-full px-4">
              <input
                className=" text-neutral-500 flex-grow"
                type="text"
                placeholder="상품명 입력"
              />
              <a href="/">
                <img
                  src={searchImg}
                  alt="검색 버튼 아이콘"
                  width="16"
                  height="16"
                />
              </a>
            </div>
          </div>
          <div className="flex justify-end flex-grow">
            <a className="flex items-center" href="/products/new">
              <img
                className="mr-1.5"
                src={sellingProductImg}
                alt="판매하기"
                width="23"
                height="26"
              />
              판매하기
            </a>
          </div>
        </div>
        <div className="flex items-center h-[70px]">
          <div className="mr-5">
            <img
              className="align-bottom"
              src={isCategoryHover ? menuIconHover : menuIcon}
              alt="카테고리 아이콘"
              width="20"
              height="16"
              onMouseEnter={() => {
                setIsCategoryHover(true);
              }}
              onMouseLeave={() => {
                setIsCategoryHover(false);
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
