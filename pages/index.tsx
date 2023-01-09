import React, { Suspense, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper";
import Router from 'next/router'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Button } from "antd";

export default function App() {
  
  const register = () => {
    Router.push('/register')
  }

  const login = () => {
    Router.push('/login')
  }

  return (
    <>
    <Suspense fallback="loading">
      <Swiper
        scrollbar={{
          hide: true,
        }}
        direction={"vertical"}
        pagination={{
          clickable: false,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>앱 이름</SwiperSlide>
        <SwiperSlide>앱 기능 설명1</SwiperSlide>
        <SwiperSlide>앱 기능 설명2</SwiperSlide>
        <SwiperSlide>앱 기능 설명3</SwiperSlide>
        <SwiperSlide>앱 기능 설명4</SwiperSlide>
        <SwiperSlide>앱 기능 설명5</SwiperSlide>
        <SwiperSlide>
          <p>
          시작하기<br></br>
          <Button type="primary" onClick={login}>로그인</Button><br></br>
          <Button type="primary" onClick={register}>회원가입</Button>
          </p>
        </SwiperSlide>
      </Swiper>
      </Suspense>
    </>
  );
}
