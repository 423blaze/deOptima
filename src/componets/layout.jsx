import React from "react";
import { Nav } from "./nav";
import { Footer } from "./footer";
import { StyledLayout } from "../styles/object/objectDiv";

export const Layout = ({ children }) => {
    return (
        <StyledLayout>
            <Nav />
            {children}
            <Footer />
        </StyledLayout>
    )
}