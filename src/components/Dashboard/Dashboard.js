import React, { useEffect, useState } from "react";
import { Carousel } from "@material-tailwind/react";

export default function Dashboard() {
  return (
    <Carousel>
      <div className="carousel-item active" data-bs-interval="2000">
        <img
          src="https://img.freepik.com/free-vector/gradient-shopping-center-social-media-cover-template_23-2149328603.jpg?w=1380&t=st=1692032093~exp=1692032693~hmac=a50b69b988e01bef0e7c21eb709312b08ec7a08ccf9b6eaf17bb0ab284fbcc0e"
          className="d-block w-full"
          style={{ height: "500px" }}
          alt="..."
        />
      </div>
      <div className="carousel-item active" data-bs-interval="2000">
        <img
          src="https://img.freepik.com/free-vector/flat-black-friday-social-media-cover-template_23-2149108898.jpg?w=1380&t=st=1692031835~exp=1692032435~hmac=4136a5da9fac7d3a0f8ede0824d3f1f570dd43c3d13813d81a7289fcae5e0491"
          className="d-block w-full"
          style={{ height: "500px" }}
          alt="..."
        />
      </div>

      <div className="carousel-item active" data-bs-interval="2000">
        <img
          src="https://img.freepik.com/free-vector/flat-shopping-center-social-media-cover-template_23-2149320512.jpg?w=996&t=st=1692031969~exp=1692032569~hmac=637b41a1adae955268057f495d9cee9f60802b81dbd6959e1bf16c86d135e1b7"
          className="d-block w-full"
          style={{ height: "500px" }}
          alt="..."
        />
      </div>
      <div className="carousel-item active" data-bs-interval="2000">
        <img
          src="https://img.freepik.com/free-vector/flat-cyber-monday-social-media-cover-template_23-2149112472.jpg?w=1380&t=st=1692032010~exp=1692032610~hmac=0c537b32f259400f0c12b8b2bd415568defdec1ad0450e2fa5bdde432963d2bf"
          className="d-block w-full"
          style={{ height: "500px" }}
          alt="..."
        />
      </div>
    </Carousel>
  );
}
