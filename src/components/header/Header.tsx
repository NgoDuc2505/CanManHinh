"use client";
//icon
import { Logo, User } from "@/assets/icon";
//mantine
import { Box, Anchor, Text, Group, em } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
//react
import React from "react";
import { styleCss } from "./header.style";
//local css

function Header() {
  const textColor = "#fff";
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);
  return (
    <Group
      px={isMobile ? "10px" : "20px"}
      py={isMobile ? "5px" : "15px"}
      style={styleCss}
      pos={"fixed"}
      top={0}
      left={0}
    >
      <h2 className="p-4 pt-2">dkjf</h2>
      <Group w="20%">
        <Logo></Logo>
        <Text fz={20} fw={"bold"} c={textColor}>
          PRO DISPLAY
        </Text>
      </Group>
      <Group gap={isMobile ? "20px" : "80px"}>
        <Anchor href="#" c={textColor} fz="20px">
          Giới thiệu
        </Anchor>
        <Anchor href="#" c={textColor} fz="20px">
          Dịch vụ
        </Anchor>
        <Anchor href="#" c={textColor} fz="20px">
          Hỗ trợ
        </Anchor>
        <Anchor href="#" c={textColor} fz="20px">
          Khác
        </Anchor>
      </Group>
      <Box w="20%" display={"flex"} style={{ justifyContent: "flex-end" }}>
        <User></User>
      </Box>
    </Group>
  );
}

export default Header;
