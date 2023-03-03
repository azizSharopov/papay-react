import { Stack, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

const followers = [
  { mb_nick: "Guli", following: true },
  { mb_nick: "Dunyo", following: true },
  { mb_nick: "Nigi", following: true },
];

export function MemberFollowers(props: any) {
  return (
    <Stack>
      {followers.map((follower) => {
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
                marginLeft: "45px",
                height: "85%",
              }}
            >
              <span className={"username_text"}>USER</span>
              <span className={"name_text"}>{follower.mb_nick}</span>
            </div>
            {props.actions_enabled &&
              (follower.following ? (
                <Button
                  variant={"contained"}
                  className={"following_already"}
                  disabled
                >
                  Following
                </Button>
              ) : (
                <Button
                  variant={"contained"}
                  startIcon={
                    <img
                      src={"/icons/follow_icon.svg"}
                      style={{ width: "40px" }}
                    />
                  }
                  className={"follow_btn"}
                >
                  Follow Back
                </Button>
              ))}
          </Box>
        );
      })}
    </Stack>
  );
}
