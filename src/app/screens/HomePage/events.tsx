import { Box, Container, Stack } from "@mui/material";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
SwiperCore.use([Autoplay, Navigation, Pagination]);

export function Events() {
  const events_list = [
    {
      title: "Booyin Foodga marhamat",
      desc: "Yangicha Uslubda Yangicha Tam va Yangicha his",
      author: "Abdurahmon Mufid",
      date: "2022/09/01",
      location: "Toshkent, Nurafshon ko'cha",
      img: "/restaurant/1.png",
    },
    {
      title: "Katta chegirma endi Belissimoda",
      desc: "Faqat 25 ~ 31- iyul kunlari antiqa pitsa yegani tashrif buyuring",
      author: "BelissimoUz",
      date: "2022/07/25",
      location: "Toshkent, Chilonzor",
      img: "/restaurant/1.png",
    },
    {
      title: "Hali his qilmagan hisni his qilmoqchimisiz",
      desc: "Merhaba promokodi orqali 50% skidkani qo'lga kiriting",
      author: "Chicken House",
      date: "2022/09/10",
      location: "Toshkent, Qo'yliq",
      img: "/restaurant/1.png",
    },
    {
      title: "Yangicha yondashuv endi O'zbekistonda",
      desc: "O'zbekistondagi eng yirik ulgurji bozor",
      author: "Food City",
      date: "2022/08/01",
      location: "Toshkent, Yangi Qo'yliq bozori",
      img: "/restaurant/1.png",
    },
  ];
  return (
    <div className={"events_frame"}>
      <Container sx={{ overflow: "hidden" }}>
        <Stack className={"events_main"}>
          <Box className={"events_text"}>
            <span className={"category_title"}>Hodisalar</span>
          </Box>
          <Box className={"prev_next_frame"}>
            <img
              src={"/icons/arrow-right.svg"}
              className={"swiper-button-prev"}
            />
            <div className={"dot_frame_pagination swiper-pagination"}></div>
            <img
              src={"/icons/arrow-right.svg"}
              className={"swiper-button-prev"}
              style={{ transform: "rotate(-180deg)" }}
            />
          </Box>
          <Swiper
            className={"events_info swiper-wrapper"}
            slidesPerView={"auto"}
            centeredSlides={true}
            spaceBetween={30}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: true,
            }}
          >
            {events_list.map((value, number) => {
              return (
                <SwiperSlide className="events_info_frame">
                  <div className={"events_img"}>
                    <img src={value.img} className="events_img" alt="" />
                  </div>
                  <Box className="events_desc">
                    <Box className="events_bott">
                      <Box className="bott_left">
                        <div className="event_title_speaker">
                          <strong>{value.title}</strong>
                          <div className="event_organizator">
                            <img
                              src={"/icons/oper.svg"}
                              style={{ width: "20px", marginRight: "10px" }}
                              alt=""
                            />
                            <p className="spec_text_author">{value.author}</p>
                          </div>
                        </div>

                        <p className="text_desc" style={{ marginTop: "10px" }}>
                          {" "}
                          {value.desc}{" "}
                        </p>
                        <div
                          className="bott_info"
                          style={{ marginTop: "10px" }}
                        >
                          <div className="bott_info_main">
                            <img
                              src="/icons/calendar.svg"
                              style={{ marginRight: "10px" }}
                              alt=""
                            />
                            {value.date}
                          </div>
                          <div className="bott_info_main">
                            <img
                              src="/icons/map-marked.svg"
                              style={{ marginRight: "10px" }}
                              alt=""
                            />
                            {value.location}
                          </div>
                        </div>
                      </Box>
                    </Box>
                  </Box>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Stack>
      </Container>
    </div>
  );
}
