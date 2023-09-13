import { useState } from "react";
import { ThemeProvider, styled, useTheme } from "styled-components";

const baseTheme = {
    background: "#fff",
    color: '#222',
    borderColor: 'red',
};

const darkTheme = {
    background: '#222',
    color: '#fff',
};

const Container = styled.div`
    color: ${(props) => props.theme.color};
    background-color: ${(props) => props.theme.background};
`

const Button = styled.button`
    padding: 10px;
    background-color: ${(props) => props.theme.color};
    color: ${(props) => props.theme.background};
`

const ThemeDemo = () => {
    const [theme, setTheme] = useState('dark');
    const changeTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    const getTheme = (t) => {
        if (t === 'light') return baseTheme;
        if (t === 'dark') return darkTheme;
    };

    return (
        <ThemeProvider theme={getTheme(theme)}>
            <Container>
                <p>This is sample paragraph</p>
                <Button onClick={changeTheme}>
                    Change Theme
                </Button>
            </Container>
        </ThemeProvider>
    )

}

export default ThemeDemo;