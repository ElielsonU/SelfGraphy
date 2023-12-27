"use client";
import { GlobalStyle } from "@/components/globalstyle";
import { Header } from "@/components/standards/Header";
import { defaultTheme } from "@/styles/theme";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styled, { ThemeProvider } from "styled-components";

export default function Home() {
  const router = useRouter();

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header type="light" />
      <Main>
        <MainDivisor>
          <Description>
            <Text>
              Crie sua própria autobiografia com nossos serviços. Aqui, sem
              qualquer conhecimento sobre como fazer uma biografia, você pode
              ter um trabalho profissional, feito com IAs customizadas para
              você. Além de que você pode fazer tudo isso apenas falando!
              Implementamos uma forma de ajudar pessoas que têm certas
              deficiências a criar sua autobiografia. Por fim, podemos restaurar
              fotos antigas aqui e adicioná-las em sua autobiografia
              automaticamente, dando mais originalidade ao seu projeto.
            </Text>
            <StyledLink href="/about">Como usar?</StyledLink>
            <StartNowButton onClick={() => router.push("/join")}>
              Comece Agora!
            </StartNowButton>
          </Description>
          <img src="/imgs/mão.png" className="palm" alt="palm" />
        </MainDivisor>
      </Main>
    </ThemeProvider>
  );
}

const Description = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  @media (max-width: 725px) {
    width: 100%;
    height: calc(100vh - 56px);
    padding: 36px 0;
    justify-content: space-between;
  }
`;

const MainDivisor = styled.section`
  max-width: 1160px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  > img {
    object-fit: contain;
    max-height: 442px;
    transition: 1s all;

    @media (max-width: 950px) {
      max-width: 200px;
      align-self: flex-start;
      z-index: -1;
    }

    @media (max-width: 725px) {
      max-width: 100%;
      opacity: 0.4;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
    }

    &:hover {
      animation: both 1s shake;
    }
  }
`;

const Main = styled.main`
  @keyframes shake {
    0% {
      transform: rotateZ(0deg);
    }
    30% {
      transform: rotateZ(10deg);
    }
    60% {
      transform: rotateZ(-10deg);
    }
    80% {
      transform: rotateZ(8deg);
    }
    100% {
      transform: rotateZ(0deg);
    }
  }

  display: flex;
  justify-content: center;
  padding: 0 60px;
  align-items: center;
  min-height: calc(100vh - 60px);

  @media (max-width: 725px) {
    padding: 0 30px;
  }
`;

const StartNowButton = styled.button`
  height: 70px;
  background-color: #5bc0be;
  border: none;
  border-radius: 12.07px;
  color: white;
  font-size: 3.5rem;
  margin: 0;
  padding: 0;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s linear filter;

  &:hover {
    filter: saturate(200%);
  }
`;

const Text = styled.h2`
  color: #0b132b;
  font-size: 2rem;

  
`;

const StyledLink = styled(Link)`
  font-size: 2rem;
  text-align: end;
  margin: 30px 0px 30px 0px;
`;
