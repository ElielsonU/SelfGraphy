"use client"
import { GlobalStyle } from "@/components/globalstyle";
import { Header } from "@/components/standards/Header";
import { defaultTheme } from "@/styles/theme";
import Image from "next/image";
import styled, { ThemeProvider } from "styled-components";

export default function Custom404 () {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header type="light"/>
      <Main>
        <Image src="/imgs/404.png" alt="error 404" width={450} height={550}/>
        <h1>Sorry, but this page doesn’t appear to exists </h1>
      </Main>
    </ThemeProvider>
  )
}

const Main = styled.main`
  box-sizing: border-box;
  padding: 53px 50px;
  background-color: ${({ theme }) => theme.slateblue};
  height: calc(100vh - 60px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > img {
    object-fit: contain;
  }

  > h1 {
    font-size: 3rem;
    color: ${({theme}) => theme.white};
  }
`;