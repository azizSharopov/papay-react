import React from "react";
import { Box, Link, Stack } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import Checkbox from "@mui/material/Checkbox";
import moment from "moment";

export function TargetArticles(props: any) {
  return (
    <Stack>
      {props.targetBoArticles?.map((article: any, index: string) => {
        const art_image_url = "/community/memories_book.jpg";
        return (
          <Link
            className={"all_article_box"}
            sx={{ textDecoration: "none" }}
            href={``}
          >
            <Box
              className={"all_article_img"}
              sx={{ backgroundImage: `url(${art_image_url})` }}
            ></Box>
            <Box className={"all_article_container"}>
              <Box alignItems={"center"} display={"flex"}>
                <img
                  src={"/auth/Ayden.jpg"}
                  width={"35px"}
                  style={{ borderRadius: "50%", backgroundSize: "cover" }}
                />
                <span className={"all_article_author_user"}>Ayden</span>
              </Box>
              <Box
                display={"flex"}
                flexDirection={"column"}
                sx={{ mt: "15px" }}
              >
                <span className={"all_article_title"}>
                  Qaysidir ovqatni yeganingizda kimnidir eslaysizmi?{" "}
                </span>
                <p className={"all_article_desc"}>
                  Biz sizga ovqat emas, shirin xotiralarni ulashamiz
                </p>
              </Box>
              <Box>
                <Box
                  className={"article_share"}
                  style={{ width: "100%", height: "auto" }}
                  sx={{ mb: "10px" }}
                >
                  <Box
                    className={"article_share_main"}
                    style={{
                      color: "#fff",
                      marginLeft: "150px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <span>{moment().format("YY-MM-DD HH:mm")}</span>
                    <Checkbox
                      sx={{ ml: "40px" }}
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite style={{ color: "red" }} />}
                      id={index}
                      checked={false}
                    />
                    <span style={{ marginRight: "18px" }}>777</span>
                    <RemoveRedEyeIcon />
                    <span style={{ marginLeft: "18px" }}>1234</span>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Link>
        );
      })}
    </Stack>
  );
}
