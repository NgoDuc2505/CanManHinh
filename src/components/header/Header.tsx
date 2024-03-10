"use client";
import React from "react";
import { AppShell, Burger, Group, Image, Container } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import styleCss from "./component.module.css";

function Header() {
  const style = { display: "flex", alignItems: "center", height: 80 };
  return (
    <div className={styleCss.header}>
      <Container style={{...style}}>
        <Image src={"/img/icon-20221218095012-xw0_r.png"} w={60} h={60}></Image>
        <h1 className={styleCss.headerTitle}>PRO DISPLAY</h1>
      </Container>
    </div>
  );
}

export default Header;
