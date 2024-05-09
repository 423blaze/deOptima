import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Layout } from "./componets";
import { GlobalStyle } from "./styles/global";
import { theme } from "./styles/theme";
import { About, Job, Review, Welcome } from "./componets/section";
import { Contact } from "./componets/section/contact";

const StyledPage = styled.div`

`

export const Pages = () => {
    return <StyledPage>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Layout>
                <Welcome />
                <About />
                <Job />
                <Review />
                <Contact />
            </Layout>
        </ThemeProvider>
    </StyledPage>
}