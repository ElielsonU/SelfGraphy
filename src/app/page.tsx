"use client";
import { GlobalStyle } from "@/components/globalstyle";
import { Header } from "@/components/standards";
import { defaultTheme } from "@/styles/theme";
import styled, { ThemeProvider } from "styled-components";

const Description = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  display: flex;
  justify-content: space-between;
  padding: 0 60px;
  align-items: center;
  height: calc(100vh - 60px);

  > img {
    width: 40%;
    max-width: 40%;
    max-height: 100%;
  }
`;

const Botao = styled.button`
  height: 70px;
  background-color: #5bc0be;
  border: none;
  border-radius: 12.07px;
  color: white;
  font-size: 3.5rem;
  margin: 0;
  padding: 0;
  font-weight: bold;
`;

const Text = styled.h2`
  color: #0b132b;
  font-size: 2rem;
`;

const Link = styled.a`
  font-size: 2rem;
  text-align: end;
  margin: 30px 0px 30px 0px;
`;

export default function Home() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header type="light" />
      <Main>
        <Description>
          <Text>
            Create your own autobiography with our services. Here, without any
            knowledge about how to make a biography, you can have a professional
            work, made with AIs customized to you. The best part is: you can do
            all of this just speaking, we implemented a way to help people that
            have certain deficiencies creating your autobiography. An
            addiotional is: we can restore your old photos here and place it on
            your autobiography automatic, giving more originality to your
            project
          </Text>
          <Link href="*">How to use it?</Link>
          <Botao>Start Now!</Botao>
        </Description>
        <img src="/imgs/mão.png" className="palm" />
      </Main>
    </ThemeProvider>
  );
}
