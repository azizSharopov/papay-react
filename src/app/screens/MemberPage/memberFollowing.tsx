import { Stack, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { Dispatch } from "@reduxjs/toolkit";

const followings = [
  { mb_nick: "Nigor" },
  { mb_nick: "Maftun" },
  { mb_nick: "Sevar" },
];

export function MemberFollowing(props: any) {
  return (
    <Stack>
      {followings.map((following) => {
        const image_url = "/auth/raykhon1.jpeg";
        return (
          <Box className={"follow_box"}>
            <Avatar
              alt={""}
              src={image_url}
              sx={{ width: 89, height: 89, marginLeft: "40px" }}
            />
            <div
              style={{
                width: "400px",
                display: "flex",
                flexDirection: "column",
                marginLeft: "25px",
                height: "85%",
              }}
            >
              <span className={"username_text"}>USER</span>
              <span className={"name_text"}>{following.mb_nick}</span>
            </div>
            {props.actions_enabled && (
              <Button
                variant={"contained"}
                startIcon={
                  <img
                    src={"/icons/follow_icon.svg"}
                    style={{ width: "40px", marginLeft: "16px" }}
                  />
                }
                className={"follow_cancel_btn"}
              >
                Bekor qilish
              </Button>
            )}
          </Box>
        );
      })}
    </Stack>
  );
}
