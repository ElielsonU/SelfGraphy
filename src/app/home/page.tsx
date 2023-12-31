"use client";

import { GlobalStyle } from "@/components/globalstyle";
import { Header } from "@/components/standards/Header";
import { defaultTheme } from "@/styles/theme";
import styled, { ThemeProvider } from "styled-components";
import FilesIcon from "/public/icons/FilesIcon.svg";
import SpecialFunctionIcon from "/public/icons/SpecialFunctionIcon.svg";
import MicIcon from "/public/icons/MicIcon.svg";
import SaveIcon from "/public/icons/SaveIcon.svg";
import SendIcon from "/public/icons/SendIcon.svg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [showAside, setShowAside] = useState(false)

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header type="dark"/>
      <Main>
        <InputsArea showAside={showAside}>
          <aside>
            <button onClick={() => {
              setShowAside(!showAside)
            }}>{">"}</button>
          </aside>

          <textarea placeholder="Comece aqui..."></textarea>
        </InputsArea>
        <FooterActions>
          <Image
            src={SaveIcon.src}
            alt="save icon"
            width={40}
            height={40}
            objectFit="cover"
          />
          <div>
            <Image
              src={SpecialFunctionIcon.src}
              alt="Special function icon"
              width={40}
              height={40}
              objectFit="cover"
            />
            <Image
              src={MicIcon.src}
              alt="microphone icon"
              width={40}
              height={40}
              objectFit="cover"
            />
            <Image
              src={FilesIcon.src}
              alt="files icon"
              width={40}
              height={40}
              objectFit="cover"
            />
          </div>
          <Link href="/document">
            <Image
              src={SendIcon.src}
              alt="files icon"
              width={40}
              height={40}
              objectFit="cover"
            />
          </Link>
        </FooterActions>
      </Main>
    </ThemeProvider>
  );
}

const Main = styled.main`
  box-sizing: border-box;
  padding-top: 10px;
  gap: 10px;
  background-color: ${({ theme }) => theme.gray};
  height: calc(100vh - 60px);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;

interface InputsAreaProps {
  showAside: boolean;
}

const InputsArea = styled.section<InputsAreaProps>`
  padding-left: 10px;
  width: 100%;
  height: 500px;
  display: flex;
  gap: 10px;

  > * {
    border-radius: 15px;
    box-sizing: border-box;
    padding: 20px;
    color: ${({ theme }) => theme.white};
  }

  > aside {
    background-color: ${({ theme }) => theme.black};
    max-width: 300px;
    height: 100%;
    transition: width ease 300ms;
    position: relative;
    width: ${({showAside}) => showAside ? "300px" : "10px"};

    button {
      position: absolute;
      font-size: 20px;
      right: -5px;
      border-radius: 50%;
      border: none;
      background-color: ${({ theme }) => theme.black};
      color: ${({theme}) => theme.white};
      top: 50%;
      transform: translateY(-50%) rotateZ(${({showAside}) => showAside ? "180deg" : "0deg"});
    }
  }

  > textarea {
    font-size: 1.8rem;
    background-color: ${({ theme }) => theme.black};
    outline: none;
    border: none;
    resize: none;
    flex: 1;
    border-radius: 15px 0 0 15px;

    &::placeholder {
      color: ${({ theme }) => theme.slateblue};
    }
  }
`;

const FooterActions = styled.footer`
  flex: 1;
  max-height: 70px;
  padding: 0 20px;
  box-sizing: border-box;
  align-self: stretch;
  background-color: ${({ theme }) => theme.deepblue};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
