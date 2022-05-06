import { useEffect, useState } from "react";
import "./Header.css";
import appDownloadImg from "../assets/app-download-img.svg";
import bookmarkImg from "../assets/bookmark-img.svg";
import logo from "../assets/logo.svg";
import sellingProductImg from "../assets/selling-product-img.png";
import searchImg from "../assets/search-img.png";
import menuIcon from "../assets/menu-icon.png";
import menuIconHover from "../assets/menu-icon-hover.png";

function Header() {
  const [login, setLogin] = useState(false);
  const [isCategoryHover, setIsCategoryHover] = useState(false);
  useEffect(() => {
    setLogin(sessionStorage.getItem("is-authenticated"));
  }, []);

  return (
    <header className="header">
      <div className="topbar">
        <div className="topbar-btns">
          <div>
            <button className="app-download">
              <img
                src={appDownloadImg}
                alt="앱다운로드"
                width="16"
                height="16"
              />
              앱다운로드
            </button>
            <button
              className="bookmark"
              onClick={() => {
                alert("Ctrl+D 키를 누르면 즐겨찾기에 추가하실 수 있습니다.");
              }}
            >
              <img src={bookmarkImg} alt="즐겨찾기버튼" />
              즐겨찾기
            </button>
          </div>
          <div>
            <button
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
            <button
              onClick={() => {
                fetch("/user");
              }}
            >
              내 정보
            </button>
          </div>
        </div>
      </div>

      <div className="main">
        <div className="main-items">
          <img src={logo} alt="번개장터 로고" />
          <div className="search-bar">
            <input
              className="search-text"
              type="text"
              placeholder="상품명, 지역명, @상점명 입력"
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

          <a className="selling-product" href="/products/new">
            <img
              src={sellingProductImg}
              alt="판매하기"
              width="23"
              height="26"
            />
            판매하기
          </a>
        </div>
      </div>

      <div className="category">
        <div className="category-bar">
          <img
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
    </header>
  );
}

export default Header;
