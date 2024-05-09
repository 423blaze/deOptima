import React from "react";
import { motion } from "framer-motion";
import { StyldJObCard, StyldJObCardGroup, StyldJObCardText, StyldJObCardTitle, StyledJob, StyledJobText, StyledJobTiText, StyledJobTitle, StyledMiddleBlueFilter, SytyledNextLine } from "../../styles/object/objectDiv";
import { JobM } from "../../config";

export const Job = () => {
    return <StyledJob className="container">
        <motion.div
            initial={{ opacity: 0, y: 100, x: 0, }}
            // animate={{ opacity: 1, y: 0, x: 0, }} 
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            transition={{ delay: 0, duration: .8 }}
        >
            <StyledMiddleBlueFilter />
            <StyledJobTitle>
                Innovative solutions <SytyledNextLine />
                for operational excellence
            </StyledJobTitle>
            <StyledJobText>
                Tailored DevOps expertise driving your business momentum.<br />
                personalized solutions for growth and evolution.
            </StyledJobText>
        </motion.div>
        <motion.div
            initial={{ opacity: 0, y: 100, x: 0, }} animate={{ opacity: 1, y: 0, x: 0, }} transition={{ delay: .8, duration: 1 }}
        >
            <StyldJObCardGroup>
                {
                    JobM.map((item, index) => {
                        return (
                            <motion.div
                                initial={{ opacity: 0, y: 0, x: 200, }}
                                // animate={{ opacity: 1, y: 0, x: 0, }} 
                                whileInView={{ opacity: 1, y: 0, x: 0 }}
                                transition={{ delay: 0, duration: index }}
                                key={index}
                            >
                                <StyldJObCard >
                                    {item.img}
                                    <StyledJobTiText>
                                        <StyldJObCardTitle>{item.title}</StyldJObCardTitle>
                                        <StyldJObCardText>{item.text}</StyldJObCardText>
                                    </StyledJobTiText>
                                </StyldJObCard>
                            </motion.div>
                        )
                    })
                }
            </StyldJObCardGroup>
        </motion.div >
    </StyledJob >
}