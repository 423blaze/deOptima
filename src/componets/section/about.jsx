import React from "react";
import { motion } from "framer-motion";
import { StyledAbout, StyledAboutText, StyledAboutImg, StyledAboutTitle, StyledAboutBlueFilter, StyledAboutIconGroup, StyledAboutIconMap, StyledAboutIcon, StyledAboutIconText, StyledAboutIconTitle, SyltedAboutRight, } from "../../styles/object/objectDiv";
import { AboutM } from "../../config";
import about from '../../images/aboutImg.png'

export const About = () => {
    return <StyledAbout className="container">
        <motion.div
            initial={{ opacity: 0, y: 0, x: -200, }}
            transition={{ delay: 0, duration: .6 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            className="col-6"

        >
            <StyledAboutBlueFilter />
            <StyledAboutImg src={about} />
        </motion.div>
        <motion.div
            initial={{ opacity: 0, y: 0, x: 200, }}
            transition={{ delay: 0, duration: .8 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            className="col-6"

        >
            <SyltedAboutRight>
                <StyledAboutTitle>What is DevOptima?</StyledAboutTitle>
                <StyledAboutText>
                    At DevOptima,We are a team of passionate DevOps experts
                    committed to transforming the way businesses approach software
                    developement and operations.
                </StyledAboutText>
                <StyledAboutIconGroup>
                    {
                        AboutM.map((item, index) => {
                            return (
                                <motion.div
                                    initial={{ opacity: 0, y: 0, x: 400, }}
                                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                                    transition={{ delay: 0, duration: index * 0.2 }} key={index}
                                >
                                    <StyledAboutIconMap>
                                        <StyledAboutIcon>{item.icon}</StyledAboutIcon>
                                        <StyledAboutIconTitle>{item.title}</StyledAboutIconTitle>
                                        <StyledAboutIconText>{item.text}</StyledAboutIconText>
                                    </StyledAboutIconMap>
                                </motion.div>
                            )
                        })
                    }
                </StyledAboutIconGroup>
            </SyltedAboutRight>
        </motion.div>
    </StyledAbout>
}


