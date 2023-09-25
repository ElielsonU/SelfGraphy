"use client";
import { GlobalStyle } from "@/components/globalstyle";
import { Header } from "@/components/standards";
import styled from 'styled-components';

const Desciption = styled.div`
    width: 481px;
    height: 390px;
    display: flex;
    flex-direction: column;
    

`;

const Main = styled.main`
    display: flex;
`;

const Botao = styled.button`
    width: 481px;
    height: 70px;
    background-color: #5BC0BE;
    border: none;
    border-radius: 12.07px;
    color: black;
    font-size: 3.5rem;
    margin: 0;
    padding: 0;
`;

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Header type="light"/>
      <Main>
        <>
          <Desciption>
            <h2>Create your own autobiography with
our services. Here, without any knowledge about how to make a biography, you can have a professional work, made with AIs customized to you. The best part is: you can do all of this just speaking, we implemented a way to help people that have certain deficiencies creating your autobiography. An addiotional is: we can restore your old photos here and place it on your autobiography automatic, giving more originality to your project</h2>
            <h2><a href="*">How to use it?</a></h2>
            <Botao>Start Now!</Botao>
          </Desciption>
          <img  src="/imgs/mão.png"/>
        </>
      </Main>
    </>
  );
}

''
