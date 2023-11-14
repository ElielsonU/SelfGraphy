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
  const title = type == "signup" ? "Sign Up" : "Login";
  const theme = useTheme();

  return (
    <FormSection className={type}>
      <h2 className="form-title">{title}</h2>

      {type == "signup" ? (
        <Form className="signup" action="/home">
          <JoinInput>
            Username
            <input type="text" required />
          </JoinInput>

          <JoinInput>
            Email
            <input type="email" required />
          </JoinInput>

          <JoinInput>
            Password
            <input type="password" required />
          </JoinInput>

          <JoinInput>
            Repeat your password
            <input type="password" required />
          </JoinInput>

          <Button
            $backgroundcolor={theme.cyan}
            height="60px"
            color={theme.white}
            fontSize="3rem"
          >
            Register
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
              I already have an account:{" "}
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
            Password
            <input type="password" required />
          </JoinInput>

          <Button
            $backgroundcolor={theme.black}
            height="60px"
            color={theme.cyan}
            fontSize="3rem"
          >
            Login
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
              I don't have an account:{" "}
              <Link href="/join?type=signup">Sign Up</Link>
            </span>
          </SocialJoin>
        </Form>
      )}
    </FormSection>
  );
};

const FormSection = styled.section`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 30px 0;
  gap: 50px;

  .form-title {
    font-size: 3.6rem;
    font-weight: 900;
    color: ${({ theme }) => theme.white};
  }

  &.signup {
    justify-content: space-between;
    gap: 20px;
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
