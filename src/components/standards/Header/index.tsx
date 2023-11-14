import styled, { useTheme } from "styled-components";
import { Button } from "../../models/Button";
import { useRouter } from "next/navigation";
import WhiteLogo from "/public/icons/WhiteLogo.svg";
import DarkLogo from "/public/icons/DarkLogo.svg";
import SettingsIcon from "/public/icons/Settings.svg";
import HelpIcon from "/public/icons/Help.svg";
import UserIcon from "/public/icons/UserIcon.svg";
import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  type: "light" | "dark" | "wellcome";
}

export const Header = ({ type }: HeaderProps) => {
  const theme = useTheme();
  const router = useRouter();

  return (
    <StyledHeader type={type}>
      <section className="header-section">
        <Link href={"/"} className="site-title">
          <img
            src={type == "dark" ? DarkLogo.src : WhiteLogo.src}
            alt="logo"
            width={34}
          />

          <h1>
            Self<strong>Graphy</strong>
          </h1>
        </Link>

        <div className="header-buttons">
          {type == "wellcome" && <h2 className="wellcome">Wellcome</h2>}
          {type == "light" && (
            <>
              <Button
                fontSize="2.3rem"
                color={theme.deepblue}
                onClick={() => router.push("/join?type=signup")}
              >
                Sign Up
              </Button>
              <Button
                fontSize="2.3rem"
                color={theme.cyan}
                $backgroundcolor={theme.deepblue}
                onClick={() => router.push("/join?type=signup")}
              >
                Login
              </Button>
            </>
          )}

          {type == "dark" && (
            <IconsContainer>
              <Image
                src={HelpIcon.src}
                alt="help icon"
                width={30}
                height={30}
              />
              <Image
                src={SettingsIcon.src}
                alt="settings icon"
                width={30}
                height={30}
              />
              <Link href="/profile">
                <Image
                  src={UserIcon.src}
                  alt="user icon"
                  width={30}
                  height={30}
                />
              </Link>
            </IconsContainer>
          )}
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
  padding: 10px 60px;
  background-color: ${({ theme, type }) =>
    type == "dark" ? theme.deepblue : theme.cyan};

  .header-section {
    max-width: 1160px;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .site-title {
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;

    > h1 {
      font-size: 3rem;
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
    text-shadow: 4px 4px 4px ${({ theme }) => theme.black}40;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  height: 35px;
`;
