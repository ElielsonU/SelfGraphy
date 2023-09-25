"use client";
import { GlobalStyle } from "@/components/globalstyle"
import { Header } from "@/components/standards";
import { defaultTheme } from "@/styles/theme";
import { ThemeProvider } from "styled-components";

export default function Page() {
    return (
        <> 
            <ThemeProvider theme={defaultTheme}>
                <Header type="light"/>
                <GlobalStyle />
            </ThemeProvider>
        </>
    )
}