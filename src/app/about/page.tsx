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
          <h2>Como utilizar nosso site?</h2>
          <p>
          Utilizar nossos serviços é muito simples. Basta falar ou escrever sobre a sua vida! Você pode usar um modelo para criar a sua autobiografia, seguindo um padrão simples para o documento. Comece descrevendo a sua infância (seu primeiro professor, os nomes dos seus pais, seus amigos, seus sonhos, etc.), em seguida, aborde a sua adolescência (seu primeiro relacionamento, suas perspectivas, desentendimentos, etc.), e por fim, fale sobre a sua vida atualmente (o que você faz, quais são seus sonhos, se você os alcançou ou não). Temos um botão para adicionar imagens à sua biografia também. Você pode utilizar algo como: 'Esta é minha mãe' e a foto correspondente, ou contextualizar uma situação. Agora que você entende como usar nosso site, que tal fazer login e obter um modelo para sua primeira autobiografia?
          </p>
          <Button
            width="480px"
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
  height: 100%;
  align-items: center;

  > h2 {
    color: ${({ theme }) => theme.slateblue};
    font-size: 3.6rem;
  }

  > p {
    margin: 10px;
    max-width: 100%;
    font-size: 1.8rem;
    color: ${({ theme }) => theme.white};
    display: inline-block;
    width: 480px;
    flex: 1;
  }

  @media (max-width: 1070px) {
    width: 100%;
  }
`;

const Main = styled.main`
  background-color: ${({ theme }) => theme.blue};
  height: calc(100vh - 60px);
  display: flex;
  align-items: center;

  .about-image {
    width: 50%;
    height: 100%;
    object-fit: cover;

    @media (max-width: 1070px) {
      display: none;
    }
  }
`;
