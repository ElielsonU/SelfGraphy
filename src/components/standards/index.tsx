import styled, { useTheme } from "styled-components";
import { Button } from "../models/Button";

interface HeaderProps {
  type: "light" | "dark" | "wellcome";
}

export const Header = ({ type }: HeaderProps) => {
  const theme = useTheme();

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
          {type == "wellcome" 
          ?<h2 className="wellcome">Wellcome</h2>
          : <>
            <Button fontSize="2.3rem" color={theme.deepblue}>
              Sign Up
            </Button>
            <Button fontSize="2.3rem" color={theme.cyan} bgcolor={theme.deepblue}>
              Login
            </Button>
          </>}
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
        type == "dark" ? theme.cyan : theme.white};
      strong {
        color: ${({ theme, type }) =>
          type == "dark" ? theme.white : theme.deepblue};
      }
    }
  }

  .header-buttons {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .wellcome {
    color: ${({ theme }) => theme.white};
    font-size: 3.2rem;
  }
`;
