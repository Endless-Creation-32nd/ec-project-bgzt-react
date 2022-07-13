import { useState, useEffect } from "react";

import appDownloadImg from "../assets/app-download-img.svg";
import bookmarkImg from "../assets/bookmark-img.svg";

function Topbar() {
  const [login, setLogin] = useState(false);
  const [isMyShopBtnHover, setIsMyShopBtnHover] = useState(false);

  useEffect(() => {
    setLogin(sessionStorage.getItem("is-authenticated"));
  }, []);

  return (
    <div className="flex justify-center border-b border-neutral-100">
      <div className="flex h-[40px] w-[1024px] items-center justify-between">
        <div className="flex flex-shrink-0">
          <button className="flex items-center px-4 text-sm text-neutral-500">
            <img
              className="mr-1 h-4 w-4"
              src={appDownloadImg}
              alt="앱다운로드"
            />
            앱다운로드
          </button>
          <button
            className="flex items-center px-4 text-sm text-neutral-500"
            onClick={() => {
              alert("Ctrl+D 키를 누르면 즐겨찾기에 추가하실 수 있습니다.");
            }}
          >
            <img className="mr-1" src={bookmarkImg} alt="즐겨찾기버튼" />
            즐겨찾기
          </button>
        </div>
        <div className="flex h-full flex-shrink-0">
          <button
            className="flex items-center px-4 text-sm text-neutral-500"
            onClick={() => {
              if (login) {
                sessionStorage.removeItem("is-authenticated");
                setLogin(false);
              } else {
                fetch("/login", {
                  method: "POST",
                  mode: "cors",
                  cache: "no-cache",
                  credentials: "same-origin",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  redirect: "follow",
                  referrerPolicy: "no-referrer",
                  body: JSON.stringify(),
                }).then(() => {
                  setLogin(true);
                });
              }
            }}
          >
            {login ? "로그아웃" : "로그인/회원가입"}
          </button>
          <div
            className="flex items-center pl-4 text-sm text-neutral-500 after:content-['▾']"
            onMouseEnter={() => {
              setIsMyShopBtnHover(true);
            }}
            onMouseLeave={() => {
              setIsMyShopBtnHover(false);
            }}
          >
            <div className="relative flex h-full w-full items-center">
              <button
                onClick={() => {
                  fetch("/user");
                }}
              >
                내 상점
              </button>
              <div
                className={`${
                  isMyShopBtnHover ? "block" : "hidden"
                } absolute top-full left-[calc(50%-44px)] z-20 w-[88px] border border-neutral-100 bg-white py-4 px-5`}
              >
                <a
                  className=" mb-3 block text-center text-neutral-500"
                  href="/manage"
                >
                  내 상품
                </a>
                <a
                  className=" mb-3 block text-center text-neutral-500"
                  href="/favorites"
                >
                  찜한 상품
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
