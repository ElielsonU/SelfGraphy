"use client";

import { GlobalStyle } from "@/components/globalstyle";
import { Header } from "@/components/standards/Header";
import { defaultTheme } from "@/styles/theme";
import styled, { ThemeProvider } from "styled-components";
import CameraIcon from "/public/icons/CameraIcon.svg";
import Image from "next/image";
import ShareIcon from "/public/icons/ShareIcon.svg";
import { Button } from "@/components/models/Button";

export default function Page() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header type="dark" />
      <Main>
        <ProfilePicture>
          <Image
            src={CameraIcon.src}
            alt="camera icon"
            width={200}
            height={200}
          />
        </ProfilePicture>
        <InfoSection>
          <span className="username">Username</span>
          <UniqueInfos>
            <span className="user-id">#000000000</span>
            <Button className="share-profile">
              Share
              <Image
                src={ShareIcon.src}
                alt="share icon"
                width={26}
                height={26}
              />
            </Button>
          </UniqueInfos>
          <CreditsRow>
            <span>
              Credits: <strong className="value">10</strong>
            </span>
            <span>
              Used credits: <strong className="value">20</strong>
            </span>
          </CreditsRow>
          <GallerySection>
            <span className="title">Gallery</span>
            <div className="item"/>
            <div className="item"/>
            <div className="item"/>
          </GallerySection>
        </InfoSection>
      </Main>
    </ThemeProvider>
  );
}

const Main = styled.main`
  background-color: ${({ theme }) => theme.gray};
  height: calc(100vh - 60px);
  padding: 0 60px;
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfilePicture = styled.section`
  padding: 40px 20px;
  width: 385px;
  height: 485px;
  background-color: ${({ theme }) => theme.black};
  border-radius: 15px;
  display: grid;
  place-items: center;

  > img {
    object-fit: contain;
  }
`;

const InfoSection = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
  height: 100%;
  box-sizing: border-box;
  padding-top: 15px;
  max-height: 485px;

  > .username {
    font-size: 2.8rem;
    color: ${({ theme }) => theme.white};
  }
`;

const UniqueInfos = styled.div`
  display: flex;
  width: 500px;
  justify-content: space-between;

  .user-id {
    font-size: 2.8rem;
    color: ${({ theme }) => theme.cyan};
  }

  .share-profile {
    font-size: 2rem;
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.deepblue};
    border: none;
    outline: none;
    padding: 8px 15px;
    border-radius: 15px;
    gap: 5px;
    color: ${({ theme }) => theme.white};
  }
`;

const CreditsRow = styled.div`
  display: flex;
  gap: 40px;
  color: ${({ theme }) => theme.white};
  font-size: 1.8rem;

  .value {
    color: ${({ theme }) => theme.cyan};
  }
`;

const GallerySection = styled.section`
  flex: 1;
  align-self: stretch;
  background-color: ${({ theme }) => theme.black};
  display: grid;
  grid-auto-flow: column;
  place-items: center;
  border-radius: 15px;
  box-sizing: border-box;
  padding: 50px 30px;
  gap: 30px;
  position: relative;

  > .title {
    font-size: 2rem;
    position: absolute;
    left: 12px;
    top: 14px;
    color: ${({theme}) => theme.white};
  }

  > .item {
    width: 100%;
    height: 100%;
    background-color: ${({theme}) => theme.blue};
  }
`;
