import styled from "styled-components";
import {Container} from './Container';
import { IoMoonOutline, IoMoon } from "react-icons/io5";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HeaderEl = styled.header`
    box-shadow: var(--shadow);
    background-color: var(--colors-ui-base);

`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
`;

const Title = styled(Link).attrs({
    to: '/'
})`
    color: var(--colors-text);
    font-size: var(--fs-sm);
    text-decoration: none;
    font-weight: var(--fw-bold);
`;

const ModeSwitcher = styled.div`
    color: var(--colors-text);
    font-size: var(--fs-sm);
    /* font-weight: var(--fw-bold); */
    cursor: pointer;
    text-transform: capitalize;
`;


function Header() {
    const [theme, setTheme] = useState('light')

    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

    useEffect(() => {
        document.body.setAttribute('data-theme', theme)
    }, [theme])

    return (
        <HeaderEl>
            <Container>
                <Wrapper>
                    <Title>LOL KEK BRO</Title>
                    <ModeSwitcher onClick={toggleTheme}>
                        {theme === 'light' ? (
                            <IoMoon size="14px" />
                        ) : (
                            <IoMoonOutline size="14px" />
                        )} 
                        <span style={{ marginLeft: '0.75rem' }}> {theme} Theme</span>
                    </ModeSwitcher>
                </Wrapper>
            </Container>
        </HeaderEl>
    )
}

export default Header;