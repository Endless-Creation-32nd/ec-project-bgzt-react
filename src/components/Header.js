import { useState } from "react";

import logo from "../assets/logo.svg";
import sellingProductImg from "../assets/selling-product-img.png";
import searchImg from "../assets/search-img.png";
import menuIcon from "../assets/menu-icon.png";
import menuIconHover from "../assets/menu-icon-hover.png";

function Header() {
  const [isCategoryHover, setIsCategoryHover] = useState(false);

  return (
    <header className="sticky top-0 left-0 z-10 flex w-full justify-center border-b border-neutral-100 bg-white pt-9">
      <div className="flex w-[1024px] flex-col">
        <div className="flex h-[40px] w-[1024px] items-center">
          <a className="mr-[100px] flex w-[136px] items-center" href="/">
            <img src={logo} alt="번개장터 로고" />
          </a>
          <div className="relative box-border h-[40px] w-[460px] border-2 border-red-500">
            <div className="flex h-full w-full items-center px-4">
              <input
                className=" flex-grow text-neutral-500"
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
          <div className="flex flex-grow justify-end">
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
        <div className="flex h-[70px] items-center">
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
      <Sidebar />
    </header>
  );
}

function Sidebar() {
  const [numOfFavorites, setNumOfFavorites] = useState(0);

  return (
    <div className="absolute top-[102px] right-[calc(50%-617px)] z-20">
      <div className="w-[90px]">
        <div className="mb-2 w-full border border-neutral-500 bg-white p-2.5">
          <div className="mb-2 text-center text-xs font-semibold text-neutral-500">
            찜한상품
          </div>
          <div className="flex justify-center">
            <a
              className={`flex items-center text-xs font-semibold tracking-wider ${
                numOfFavorites === 0
                  ? "text-neutral-300"
                  : "text-[rgb(247,0,0)]"
              }`}
              href="/favorites"
            >
              ♥ {numOfFavorites}
            </a>
          </div>
        </div>
        <div className="w-full border border-neutral-200">
          <button
            className="flex h-[40px] w-full items-center justify-center text-sm font-semibold text-neutral-500"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            TOP
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
