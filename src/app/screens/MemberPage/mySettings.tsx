import { Stack, Box, Container } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import Button from "@mui/material/Button";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

export function MySettings(props: any) {
  return (
    <Stack className={"my_settings_page"}>
      <Box className={"member_media_frame"}>
        <img
          src={"/auth/raykhon1.jpeg"}
          className={"mb_image"}
          style={{ borderRadius: "50%" }}
          width={"100px"}
          height={"100px"}
        />
        <div className={"media_change_box"}>
          <span>Rasm yuklash</span>
          <p>JPG, JPEG, PNG rasmlarni yuklay olasiz!</p>
          <div className={"up_del_box"}>
            <Button component="label" style={{ minWidth: "0" }}>
              <CloudDownloadIcon />
              <input type="file" hidden />
            </Button>
          </div>
        </div>
      </Box>
      <Box className={"input_frame"}>
        <div className={"long_input"}>
          <label className={"spec_label"}>Ism</label>
          <input
            className={"spec_input mb_nick"}
            type="text"
            placeholder="Ismoilov Akmal"
            name="mb_nick"
          />
        </div>
      </Box>
      <Box className={"input_frame"}>
        <div className={"short_input"}>
          <label className={"spec_label"}>Telefon raqam</label>
          <input
            className={"spec_input mb_phone"}
            type="text"
            placeholder={"99899 0077000"}
            name="mb_phone"
          />
        </div>
      </Box>
      <Box className={"input_frame"}>
        <div className={"short_input"}>
          <label className={"spec_label"}>Manzil</label>
          <input
            className={"spec_input mb_address"}
            type="text"
            placeholder={"Tashkent, Chilonzor 1A"}
            name="mb_address"
          />
        </div>
      </Box>
      <Box className={"input_frame"}>
        <div className={"short_input"}>
          <label className={"spec_label"}>Ma'lumot</label>
          <textarea
            className={"spec_textarea mb_description"}
            placeholder={"mavjud emas"}
            name="mb_description"
          />
        </div>
      </Box>
      <Box display={"flex"} justifyContent={"flex-end"} sx={{ mt: "25px" }}>
        <Button variant={"contained"}>Saqlash</Button>
      </Box>
    </Stack>
  );
}
