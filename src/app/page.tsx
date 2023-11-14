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
              Create your own autobiography with our services. Here, without any
              knowledge about how to make a biography, you can have a
              professional work, made with AIs customized to you. The best part
              is: you can do all of this just speaking, we implemented a way to
              help people that have certain deficiencies creating your
              autobiography. An addiotional is: we can restore your old photos
              here and place it on your autobiography automatic, giving more
              originality to your project
            </Text>
            <StyledLink href="#">How to use it?</StyledLink>
            <StartNowButton>Start Now!</StartNowButton>
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
`;

const MainDivisor = styled.section`
  max-width: 1160px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap-reverse;

  > img {
    object-fit: contain;
    max-height: 442px;
    transition: 1s all;

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
