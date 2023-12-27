"use client";
import { GlobalStyle } from "@/components/globalstyle";
import { Header } from "@/components/standards/Header";
import { defaultTheme } from "@/styles/theme";
import styled, { ThemeProvider } from "styled-components";
import { useSearchParams } from "next/navigation";
import { JoinForm } from "@/components/standards/JoinForm";

export default function Page() {
  const searchParams = useSearchParams();
  const formType = searchParams.get("type") as string;

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header type="wellcome" />
      <Main>
        <MainDivisor>
          <img
            src="imgs/DigitalWrited.png"
            alt="pen writing digital"
            className="digital-writed"
          />
          <JoinForm type={formType} />
        </MainDivisor>
      </Main>
    </ThemeProvider>
  );
}

const MainDivisor = styled.section`
  max-width: 1160px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  > .digital-writed {
    max-width: 50%;
    max-height: 100%;

    @media (max-width: 900px) {
      width: 350px;
      align-self: flex-start;
      padding-top: 10px;
    }

    @media (max-width: 756px) {
      position: absolute;
      max-width: none;
      width: 100vw;
      height: 100vh;
      object-fit: contain;
      opacity: 0.6;
    }
  }

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

const Main = styled.main`
  background-color: ${({ theme }) => theme.deepblue};
  height: calc(100vh - 60px);
  display: flex;
  align-items: center;
  justify-content: center;
`;
