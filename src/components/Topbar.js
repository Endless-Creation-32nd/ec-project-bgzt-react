import { useState, useEffect } from "react";

import appDownloadImg from "../assets/app-download-img.svg";
import bookmarkImg from "../assets/bookmark-img.svg";

function Topbar() {
  const [login, setLogin] = useState(false);
  useEffect(() => {
    setLogin(sessionStorage.getItem("is-authenticated"));
  }, []);
  return (
    <div className="flex justify-center border-b border-neutral-100">
      <div className="flex justify-between items-center w-[1024px] h-[40px]">
        <div className="flex flex-shrink-0">
          <button className="flex items-center px-4 text-sm text-neutral-500">
            <img
              className="w-4 h-4 mr-1"
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
        <div className="flex flex-shrink-0 h-full">
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
          <div className="flex items-center px-4 text-sm text-neutral-500 after:content-['▾']">
            <div className="relative flex items-center w-full h-full">
              <button
                className=""
                onClick={() => {
                  fetch("/user");
                }}
              >
                내 상점
              </button>
              <div className="block absolute w-[88px] top-full left-[calc(50%-44px)] border border-neutral-100 z-20 py-4 px-5">
                <a
                  className=" block text-center mb-3 text-neutral-500"
                  href="/manage"
                >
                  내 상품
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
