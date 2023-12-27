"use client";

import { GlobalStyle } from "@/components/globalstyle";
import { Header } from "@/components/standards/Header";
import { defaultTheme } from "@/styles/theme";
import styled, { ThemeProvider } from "styled-components";
import FilesIcon from "/public/icons/FilesIcon.svg";
import SpecialFunctionIcon from "/public/icons/SpecialFunctionIcon.svg";
import ReturnIcon from "/public/icons/ReturnIcon.svg";
import SaveIcon from "/public/icons/SaveIcon.svg";
import DownloadIcon from "/public/icons/DownloadIcon.svg";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/models/Button";

export default function Page() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header type="dark" />
      <Main>
        <MainInfo>
          <h2>
            Sua autobiografia foi <strong>Criada!</strong>
          </h2>
          <ButtonsZone>
            <Button>
              <Image
                src={DownloadIcon.src}
                alt="files icon"
                width={30}
                height={30}
              />
              Baixar
            </Button>
            <Button>
              <Image
                src={SaveIcon.src}
                alt="files icon"
                width={30}
                height={30}
              />
              Salvar na galeria
            </Button>
            <Button>
              Criar outra autobiografia
              <Image
                src={ReturnIcon.src}
                alt="files icon"
                width={30}
                height={30}
              />
            </Button>
          </ButtonsZone>
        </MainInfo>
        <DocumentPreview>
          <Button className="load-preview">Carregar prévia</Button>

          <Image
            className="download-icon"
            src={DownloadIcon.src}
            alt="files icon"
            width={40}
            height={40}
          />

          <section className="buttons-zone">
            <Button>
              <Image
                src={DownloadIcon.src}
                alt="files icon"
                width={30}
                height={30}
              />
              Baixar
            </Button>
            <Button>
              Retornar
              <Image
                src={ReturnIcon.src}
                alt="files icon"
                width={30}
                height={30}
              />
            </Button>
            <Button className="gallery">
              <Image
                src={SaveIcon.src}
                alt="files icon"
                width={30}
                height={30}
              />
              Salvar na galeria
            </Button>
          </section>
        </DocumentPreview>
      </Main>
    </ThemeProvider>
  );
}

const Main = styled.main`
  box-sizing: border-box;
  padding: 53px 50px;
  gap: 130px;
  background-color: ${({ theme }) => theme.gray};
  height: calc(100vh - 60px);
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 900px) {
    justify-content: center;
  }

  @media (max-width: 725px) {
    padding: 53px 30px;
  }
`;

const MainInfo = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > h2 {
    font-size: 3.6rem;
    font-weight: 900;
    color: ${({ theme }) => theme.white};

    > strong {
      display: block;
      color: ${({ theme }) => theme.cyan};
    }
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

const DocumentPreview = styled.section`
  width: 470px;
  height: 100%;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.black};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .load-preview {
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme.black};
    font-size: 3rem;
    padding: 10px 20px;
    border-radius: 15px;
    box-shadow: 0 0 5px 1px ${({ theme }) => theme.blue};
  }

  .download-icon {
    position: absolute;
    right: 10px;
    top: 20px;

    @media (max-width: 900px) {
      display: none;
    }
  }

  .buttons-zone {
    display: none;
    position: absolute;
    align-items: start;
    gap: 10px;
    flex-direction: column;
    bottom: 20px;
    left: 20px;

    .gallery {
      > img {
        filter: brightness(0%);
      }
    }

    @media (max-width: 900px) {
      display: flex;
      position: absolute;
    }
  }
`;

const ButtonsZone = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 30px;

  > button {
    font-size: 2.6rem;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 15px;
    min-width: 240px;

    &:nth-of-type(1) {
      background-color: ${({ theme }) => theme.black};
      color: ${({ theme }) => theme.cyan};
    }

    &:nth-of-type(2) {
      background-color: ${({ theme }) => theme.cyan};
      color: ${({ theme }) => theme.white};
    }

    &:last-of-type {
      font-size: 2rem;
      font-weight: 200;
    }
  }
`;
