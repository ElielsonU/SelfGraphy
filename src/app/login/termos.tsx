import { GlobalStyle } from "@/components/globalstyle";
import { Header } from "@/components/standards";
import { defaultTheme } from "@/styles/theme";
import styled, { ThemeProvider } from "styled-components";


export default function Home() {
    return (
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Header type="light" />
        <main>
            
        </main>