import styled from "styled-components"

interface HeaderProps {
    type: "light" | "dark"
}

export const Header = ({
    type
}: HeaderProps) => {
    return (
        <StyledHeader type={type}>
            <section className="header-section">
                <div className="site-title">
                    <img src="./imgs/logo.png" alt="logo" width={30}/>
                    
                    <h1>Self<strong>Graphy</strong></h1>
                </div>
            </section>
        </StyledHeader>
    )
}

const StyledHeader = styled.header<HeaderProps>`
    display: flex;
    justify-content: center;
    height: 60px;
    padding: 10px 30px;

    .header-section {
        max-width: 1160px;
        width: 100%;
        display: flex;
    }

    .site-title {
        display: flex;
        align-items: center;

        > h1 {
            font-size: 3.2rem;
            strong {
                ${({theme}) => theme}
            }
        }
    }  
`