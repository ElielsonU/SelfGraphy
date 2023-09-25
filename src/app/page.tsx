"use client";
import { GlobalStyle } from "@/components/globalstyle";
import { Header } from "@/components/standards";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "@/styles/theme" 

export default function Home() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
          <GlobalStyle />
          <Header type="light"/>
          <h1></h1>
      </ThemeProvider>
    </>
  );
}
