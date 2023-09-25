import styled from "styled-components";
import { Button } from "../models/Button";

interface HeaderProps {
  type: "light" | "dark";
}

export const Header = ({ type }: HeaderProps) => {


  return (
    <StyledHeader type={type}>
      <section className="header-section">
        <div className="site-title">
          <img src="./imgs/logo.png" alt="logo" width={30} />

          <h1>
            Self<strong>Graphy</strong>
          </h1>
        </div>

        <div className="header-buttons">
            <Button fontSize="2.3rem">Sign Up</Button>
            <Button>Login</Button>
        </div>
      </section>
    </StyledHeader>
  );
};

const StyledHeader = styled.header<HeaderProps>`
  display: flex;
  justify-content: center;
  height: 60px;
  align-items: center;
  padding: 10px 30px;
  background-color: ${({ theme }) => theme.cyan};

  .header-section {
    max-width: 1160px;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .site-title {
    display: flex;
    align-items: center;

    > h1 {
      font-size: 3.2rem;
      color: ${({ theme, type }) =>
        type == "light" ? theme.white : theme.cyan};
      strong {
        color: ${({ theme, type }) =>
          type == "light" ? theme.deepblue : theme.white};
      }
    }
  }

  .header-buttons {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;
