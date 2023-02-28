import React, { useState } from "react";
import { Container, Stack, Box } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Marginer from "../../components/marginer";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import Checkbox from "@mui/material/Checkbox";

const chosen_list = Array.from(Array(6).keys());

export function ChosenDish() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <div className="chosen_dish_page">
      <Container className="dish_container">
        <Stack className="chosen_dish_slider">
          <Swiper
            className="dish_swiper"
            loop={true}
            spaceBetween={10}
            navigation={true}
            // thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
          >
            {chosen_list.map((ele) => {
              const image_path = `/others/kebab1.jpg`;
              return (
                <SwiperSlide>
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "20px",
                    }}
                    src={image_path}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <Stack className="dish_swiper_down">
            <Swiper
              className="dish_swiper_down_img"
              loop={true}
              spaceBetween={10}
              slidesPerView={3}

              // thumbs={{ swiper: thumbsSwiper }}
            >
              {chosen_list.map((ele) => {
                const image_path = `/others/kebab.jpg`;
                return (
                  <SwiperSlide>
                    <img
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "8px",
                      }}
                      src={image_path}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Stack>
        </Stack>
        <Stack className={"chosen_dish_info_container"}>
          <Box className={"chosen_dish_info_box"}>
            <strong className={"dish_txt"}>Sochniy shashlik</strong>
            <span className={"resto_name"}>Restaurant Burak</span>
            <Box className={"rating_box"}>
              <Rating
                name="half-rating"
                defaultValue={3.5}
                precision={0.5}
                style={{ marginTop: "10px" }}
              />
              <div className={"evaluation_box"}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginRight: "20px",
                  }}
                >
                  <Checkbox
                    {...label}
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite style={{ color: "red" }} />}
                    /*@ts-ignore*/
                    checked={false}
                  />
                  <span>98 ta</span>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <RemoveRedEyeIcon sx={{ mr: "10px" }} />
                  <span>1000 ta</span>
                </div>
              </div>
            </Box>
            <p className={"dish_desc_info"}>
              Ma'zasi og'zizda qoluvchi shashlik
            </p>
            <Marginer
              direction="horizontal"
              height="1"
              width="100%"
              bg="#000000"
            />
            <div className={"dish_price_box"}>
              <span>Narx:</span>
              <span>$5</span>
            </div>
            <div className={"button_box"}>
              <Button variant="contained">Savadga qo'shish</Button>
            </div>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
