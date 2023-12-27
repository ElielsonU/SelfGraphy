import { Button } from "@/components/models/Button";
import Image from "next/image";
import Link from "next/link";
import styled, { useTheme } from "styled-components";
import FacebookLogo from "/public/icons/FacebookLogo.svg";
import GoogleLogo from "/public/icons/GoogleLogo.svg";

interface JoinFormProps {
  type?: "login" | "signup" | string;
}

export const JoinForm = ({ type }: JoinFormProps) => {
  const title = type == "signup" ? "Cadastre-se" : "Entrar";
  const theme = useTheme();

  return (
    <FormSection className={type}>
      <h2 className="form-title">{title}</h2>

      {type == "signup" ? (
        <Form className="signup" action="/home">
          <JoinInput>
            Nome do usuário
            <input type="text" required />
          </JoinInput>

          <JoinInput>
            Email
            <input type="email" required />
          </JoinInput>

          <JoinInput>
            Senha
            <input type="password" required />
          </JoinInput>

          <JoinInput>
            Confirme sua senha
            <input type="password" required />
          </JoinInput>

          <Button
            $backgroundcolor={theme.cyan}
            height="60px"
            color={theme.white}
            fontSize="3rem"
          >
            Registrar
          </Button>

          <SocialJoin>
            <Button className="social-button">
              <Image
                src={GoogleLogo.src}
                alt="logo do google"
                width={36}
                height={36}
              />
              Google
            </Button>

            <Button
              $backgroundcolor={theme.gray}
              color={theme.white}
              className="social-button"
            >
              <Image
                src={FacebookLogo.src}
                alt="logo do facebook"
                width={36}
                height={36}
              />
              Facebook
            </Button>
            <span className="suggestion">
              Eu já tenho uma conta:{" "}
              <Link href="/join?type=login">Login</Link>
            </span>
          </SocialJoin>
        </Form>
      ) : (
        <Form className="login" action="/home">
          <JoinInput>
            Email
            <input type="email" required />
          </JoinInput>

          <JoinInput>
            Senha
            <input type="password" required />
          </JoinInput>

          <Button
            $backgroundcolor={theme.black}
            height="60px"
            color={theme.cyan}
            fontSize="3rem"
          >
            Entrar
          </Button>

          <SocialJoin>
            <Button className="social-button">
              <Image
                src={GoogleLogo.src}
                alt="logo do google"
                width={36}
                height={36}
              />
              Google
            </Button>

            <Button
              $backgroundcolor={theme.gray}
              color={theme.white}
              className="social-button"
            >
              <Image
                src={FacebookLogo.src}
                alt="logo do facebook"
                width={36}
                height={36}
              />
              Facebook
            </Button>
            <span className="suggestion">
              Ainda não tenho uma conta:{" "}
              <Link href="/join?type=signup">Registre-se</Link>
            </span>
          </SocialJoin>
        </Form>
      )}
    </FormSection>
  );
};

const FormSection = styled.section`
  width: 50%;
  min-width: 400px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 30px 0;
  gap: 50px;
  z-index: 1;

  .form-title {
    font-size: 3.6rem;
    font-weight: 900;
    color: ${({ theme }) => theme.white};
  }

  &.signup {
    justify-content: space-between;
    gap: 20px;
  }

  @media (max-width: 800px) {
    max-width: none;
    width: 500px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 350px;
  flex: 1;

  &.login {
    gap: 40px;
  }

  &.signup {
    justify-content: space-between;
  }
`;

const JoinInput = styled.label`
  font-size: 2.6rem;
  gap: 3px;
  width: 100%;
  color: ${({ theme }) => theme.white};
  font-weight: 300;
  display: flex;
  flex-direction: column;
  border: 0;

  > input {
    font-size: inherit;
    width: 100%;
    box-sizing: border-box;
    padding: 2px 5px;
    font-size: 2.4rem;
    border-radius: 5px;
    border: 0;

    &:focus {
      outline: none;
    }
  }

  > a {
    font-size: 1.6rem;
    font-weight: 800;
    color: ${({ theme }) => theme.linkblue};
  }
`;

const SocialJoin = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  row-gap: 6px;
  flex-wrap: wrap;
  font-size: 1.4rem;

  > .social-button {
    justify-content: space-between;
    gap: 10px;
  }

  > .suggestion {
    width: 100%;
    color: ${({ theme }) => theme.white};

    a {
      color: ${({ theme }) => theme.linkblue};
    }
  }
`;
