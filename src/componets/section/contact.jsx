import React from "react";
import { motion } from "framer-motion";
import { BtnBlue, BtnDarkBlue, StyledContact, StyledContactBtnGroup, StyledContactText, StyledContactTitle, StyledDiv, StyledFooterBlueFilterLeft, StyledFooterBlueFilterRight } from "../../styles/object/objectDiv";

export const Contact = () => {
    return <StyledContact>
        <StyledDiv>
            <StyledFooterBlueFilterLeft />
            <StyledFooterBlueFilterRight />
        </StyledDiv>
        <motion.div
            initial={{ opacity: 0, y: 0, x: 200, }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            transition={{ delay: 0, duration: .8 }}
        >
            <StyledContactTitle>Ready to dlevate your DevOps strategy?</StyledContactTitle>
            <StyledContactText>Join the multitude of companies benefiting from optimized DevOps practices.<br />
                Contact us to discover how DevOptima can help your business.
            </StyledContactText>
        </motion.div>
        <StyledContactBtnGroup>
            <motion.div
                initial={{ opacity: 0, y: 0, x: -300, }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
            >          <BtnBlue>Contact us</BtnBlue>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 0, x: -200, }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                transition={{ delay: .2, duration: .8 }}>
                <BtnDarkBlue>Try for free</BtnDarkBlue>
            </motion.div>
        </StyledContactBtnGroup>
    </StyledContact>
}