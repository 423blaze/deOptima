import React from "react";
import { motion } from "framer-motion";
import { StyledDiv, StyledReview, StyledReviewAvatarText, StyledReviewBg, StyledReviewBgImg, StyledReviewCard, StyledReviewCardDiv, StyledReviewIcon, StyledReviewM, StyledReviewText, StyledText, StyledTextSmall } from "../../styles/object/objectDiv";
import { ReviewM } from "../../config";
import ReviewBg from '../../images/RebiewBg.png';

export const Review = () => {
    return <StyledReview className="container">
        <motion.div
            initial={{ opacity: 0, y: 0, x: 0, }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            transition={{ delay: 0, duration: .8 }}
        >
            <StyledReviewBg>
                <StyledReviewBgImg src={ReviewBg} />
            </StyledReviewBg>
            <StyledReviewM>
                {
                    ReviewM.map((item, index) => {
                        return <StyledReviewCard key={index}>
                            <StyledReviewCardDiv>
                                <StyledReviewIcon>{item.icon}</StyledReviewIcon>
                                <StyledDiv>{item.text}</StyledDiv>
                                <StyledReviewAvatarText>
                                    {item.avatar}
                                    <StyledReviewText>
                                        <StyledText>{item.name}</StyledText>
                                        <StyledTextSmall>{item.job}</StyledTextSmall>
                                    </StyledReviewText>
                                </StyledReviewAvatarText>
                            </StyledReviewCardDiv>
                        </StyledReviewCard>
                    })
                }
            </StyledReviewM>
        </motion.div>
    </StyledReview>
}