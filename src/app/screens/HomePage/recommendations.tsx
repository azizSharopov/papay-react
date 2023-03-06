import { Box, Container, Stack } from "@mui/material";
import React from "react";

export function Recommendations() {
  return (
    <div className="top_article_frame">
      <Container>
        <Stack flexDirection={"column"}>
          <Box className="events_text">
            <span className="category_title">Tafsiya qilingan maqolalar</span>
          </Box>
          <Stack
            flexDirection={"row"}
            justifyContent={"space-between"}
            sx={{ width: "1193px" }}
          >
            <Stack flexDirection={"column"}>
              <Box className="article_text">Ko’p ko’rilgan</Box>
              <Stack className="article_box">
                <img
                  src="/restaurant/go'sht.jpeg"
                  className="article_box_img"
                  alt=""
                />
                <Stack flexDirection={"column"} sx={{ mt: "14px", ml: "10px" }}>
                  <Stack className="tofix" flexDirection={"row"}>
                    <img
                      src="/community/maska.jpeg"
                      className="article_cook"
                      alt=""
                    />
                    <Box className="article_name">Guli Asadova</Box>
                  </Stack>
                  <Box className="article_desc">
                    Biz ko'p go'sht yeyabmizmi?
                  </Box>
                </Stack>
              </Stack>
              <Stack className="article_box">
                <img
                  src="/restaurant/5600.jpeg"
                  className="article_box_img"
                  alt=""
                />
                <Stack flexDirection={"column"} sx={{ mt: "14px", ml: "10px" }}>
                  <Stack className="tofix" flexDirection={"row"}>
                    <img
                      src="/community/maska.jpeg"
                      className="article_cook"
                      alt=""
                    />
                    <Box className="article_name">Muxim xabarlar</Box>
                  </Stack>
                  <Box className="article_desc">
                    Siz bir kunda qancha topasiz?
                  </Box>
                </Stack>
              </Stack>
              <Box className="article_text">Ko’p yoqtirilgan</Box>
              <Stack className="article_box">
                <img
                  src="/restaurant/bog'cha.jpeg"
                  className="article_box_img"
                  alt=""
                />
                <Stack flexDirection={"column"} sx={{ mt: "14px", ml: "10px" }}>
                  <Stack className="tofix" flexDirection={"row"}>
                    <img
                      src="/community/maska.jpeg"
                      className="article_cook"
                      alt=""
                    />
                    <Box className="article_name">Sevara Gulyamova</Box>
                  </Stack>
                  <Box className="article_desc">
                    Bog'cha xodimlarining oyligi qancha?
                  </Box>
                </Stack>
              </Stack>
              <Stack className="article_box" sx={{ mb: "111px" }}>
                <img
                  src="/restaurant/gentra.jpeg"
                  className="article_box_img"
                  alt=""
                />
                <Stack flexDirection={"column"} sx={{ mt: "14px", ml: "10px" }}>
                  <Stack className="tofix" flexDirection={"row"}>
                    <img
                      src="/community/maska.jpeg"
                      className="article_cook"
                      alt=""
                    />
                    <Box className="article_name">Carselon</Box>
                  </Stack>
                  <Box className="article_desc">
                    Endi moshin olish, sotish juda ham qulay
                  </Box>
                </Stack>
              </Stack>
            </Stack>
            <Stack flexDirection={"column"}>
              <Box className="article_text">Mashhurlar</Box>
              <Stack className="celebrities_box">
                <Box className="celebrities_box_text">Mashhurlar e'tirofi</Box>
                <img
                  src="/auth/ulug.jpeg"
                  className="celebrities_box_img"
                  alt=""
                />
              </Stack>
              <Stack className="celebrities_box celebrities_box2">
                <Box className="celebrities_box_text">Mashhurlar e'tirofi</Box>
                <img
                  src="/auth/raykhon1.jpeg"
                  className="celebrities_box_img"
                  alt=""
                />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
