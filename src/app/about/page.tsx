"use client";
import { Header } from "@/components/standards/Header";
import styled, { ThemeProvider } from "styled-components";
import { defaultTheme } from "@/styles/theme";
import { GlobalStyle } from "@/components/globalstyle";
import { Button } from "@/components/models/Button";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header type="light" />
      <Main>
        <Description>
          <h2>How to use our site?</h2>
          <p>
            It's very simple to use our services. You just need to speak or
            write about your life! And you can use a model to create your
            autobiography. In this, you'll have a simple pattern for the
            document, like: start describing about your childhood ( your first
            teacher, your parents names, your friends, your dreams, etc ), next
            about your adolescence ( your first relationship, your perspectives,
            some disagreement, etc ), and finally, about your life actually (
            what you do, what is your dreams, do you reached your dreams? ). We
            have a button to add images to your biography too, you can use like:
            “This is my mother” and the photo, or you can contextualize an Now
            that you know how to use our site, what about login and get a model
            for your first autobiography?
          </p>
          <Button
            width="100%"
            height="50px"
            color="#1C2541"
            $backgroundcolor="#5BC0BE"
            onClick={() => router.push("/join")}
          >
            Start Now!
          </Button>
        </Description>

        <img
          src="imgs/AboutImage.png"
          alt="about image"
          className="about-image"
        />
      </Main>
    </ThemeProvider>
  );
}

const Description = styled.section`
  padding: 40px 36px;
  box-sizing: border-box;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  align-items: center;

  > h2 {
    color: ${({ theme }) => theme.slateblue};
    font-size: 3.6rem;
  }

  > p {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.white};
  }
`;

const Main = styled.main`
  background-color: ${({ theme }) => theme.blue};
  height: calc(100vh - 60px);
  display: flex;
  align-items: center;

  .about-image {
    width: 50%;
    max-height: 100%;
    object-fit: cover;
  }
`;
