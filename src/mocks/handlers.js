// src/mocks/handlers.js
import { rest } from "msw";

export const handlers = [
  rest.post("/login", (req, res, ctx) => {
    // Persist user's authentication in the session
    sessionStorage.setItem("is-authenticated", "true");

    return res(
      // Respond with a 200 status code
      ctx.status(200)
    );
  }),

  rest.get("/user", (req, res, ctx) => {
    // Check if the user is authenticated in this session
    const isAuthenticated = sessionStorage.getItem("is-authenticated");

    if (!isAuthenticated) {
      // If not authenticated, respond with a 403 error
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: "Not authorized",
        })
      );
    }

    // If authenticated, return a mocked user details
    return res(
      ctx.status(200),
      ctx.json({
        username: "admin",
      })
    );
  }),

  rest.get("/products/:productId", (req, res, ctx) => {
    const dummyData = {
      id: req.productId,
      name: "리액트개발자 팝니다",
      image:
        "https://media.bunjang.co.kr/product/140925191_1_1635398069_w292.jpg",
      price: 1234567890,
      time: "2022-05-09T14:58:04+09:00",
      state: true,
      area: "서울과기대 미래관",
      exchange: false,
    };

    return res(
      ctx.status(200),
      ctx.json({
        data: dummyData,
      })
    );
  }),
];
