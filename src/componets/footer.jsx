import React from "react";
import { StyledFooter, StyledFooterCommunity, StyledFooterCommunityM, StyledFooterCommunityTitle, StyledFooterLogo, StyledFooterOther, StyledFooterOtherLegal, StyledFooterOtherLegalM, StyledFooterOtherLegalTitle, StyledFooterPrint, StyledFooterResources, StyledFooterResourcesM, StyledFooterResourcesTitle, StyledLink, StyledTextSmall, } from "../styles/object/objectDiv";
import { FooterCommunity, FooterLegal, FooterResources } from "../config";
import footerLogo from '../images/logo.png'

export const Footer = () => {
    return <StyledFooter>
        <StyledFooterPrint>
            <StyledFooterLogo src={footerLogo} />
            <StyledTextSmall>Devoptima 2023 © All rights reserved</StyledTextSmall>
        </StyledFooterPrint>
        <StyledFooterOther>
            <StyledFooterResources>
                <StyledFooterResourcesTitle>Resources</StyledFooterResourcesTitle>
                {
                    FooterResources.map((item, index) => {
                        return <StyledFooterResourcesM key={index}>
                            <StyledLink>{item.name}</StyledLink>
                        </StyledFooterResourcesM>
                    })
                }
            </StyledFooterResources>
            <StyledFooterCommunity>
                <StyledFooterCommunityTitle>Community</StyledFooterCommunityTitle>
                {
                    FooterCommunity.map((item, index) => {
                        return <StyledFooterCommunityM key={index}>
                            {item.icon}
                            <StyledLink>{item.name}</StyledLink>
                        </StyledFooterCommunityM>
                    })
                }
            </StyledFooterCommunity>
            <StyledFooterOtherLegal>
                <StyledFooterOtherLegalTitle>Legal</StyledFooterOtherLegalTitle>
                {
                    FooterLegal.map((item, index) => {
                        return <StyledFooterOtherLegalM key={index}>
                            <a>{item.name}</a>
                        </StyledFooterOtherLegalM>
                    })
                }
            </StyledFooterOtherLegal>
        </StyledFooterOther>
    </StyledFooter>

}