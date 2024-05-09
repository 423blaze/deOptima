import React, { useState } from "react";
import { delay, motion } from "framer-motion";
import { BtnBlue, StyledBlueFilterDown, StyledBlueFilterTop, StyledInput, StyledInputBtn, StyledWelText, StyledWelImg, StyledWelTitle, StyledWelcome, StyledWelInputBug, StyledBtnLoding, StyledBtnSuccess, BtnError, StyledBtnLodingIcon, StyledWelcomeNet, StyledText } from "../../styles/object/objectDiv";
import { FaX } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import welcomeImg from '../../images/welcomeImg.png'
import WelNet from '../../images/WelNet.png'
import InputLoding from '../../images/InputLoding.png'

export const Welcome = () => {
    const [correctEmail, setCorrectEmail] = useState("hayate")
    const [flag, setFlag] = useState(false)
    const [loading, setLoading] = useState(true)
    const [email, setEmail] = useState({ email: '' })
    const [temp, setTemp] = useState(false)
    const handleChange = (e) => {
        setEmail({ ...email, [e.target.name]: e.target.value })
        setTemp(false)
    }
    const set = () => {
        setLoading(false)
    }
    const set1 = () => {
        setFlag(false)
    }
    const submit = () => {
        if (email.email == '') {
            setTemp(true)
        }
        else if (email.email == correctEmail) {
            setFlag(true)
            delay(2000)
            setTimeout(set, 2000)
        }
        else {
            setFlag(true)
            delay(2000)
            setTimeout(set, 2000)
            setTimeout(set1, 2000)
        }
    }
    const handleClick = () => {
        setFlag(false);
        setLoading(true);
    }

    return <StyledWelcome className="container">
        <StyledWelcomeNet src={WelNet} />
        <motion.div
            initial={{ opacity: 0, y: 0, x: -200, }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            transition={{ delay: 0, duration: .5 }}
            className="col-6"
        >
            <StyledWelTitle>
                Revolutionize
                your DevOps journey with DevOptima
            </StyledWelTitle>
            <StyledWelText>
                Empower groups to boost innovation with efficient development,
                automated operations, and stable scaling.
            </StyledWelText>
            <StyledInputBtn>
                <StyledInput onChange={handleChange} name='email' type="email" placeholder="Your business email..." onClick={handleClick} autoComplete="hayate" />
                {loading && flag && <StyledBtnLoding><StyledBtnLodingIcon src={InputLoding} /></StyledBtnLoding>}
                {!loading && flag && <StyledBtnSuccess><FaCheck /></StyledBtnSuccess>}
                {!loading && !flag && <BtnError><FaX /></BtnError>}
                {loading && !flag && <BtnBlue onClick={() => submit()} >Free trial</BtnBlue>}
            </StyledInputBtn>
            <StyledWelInputBug>
                {
                    temp &&
                    <StyledText>Email is a required field</StyledText>
                }
            </StyledWelInputBug>
            <StyledBlueFilterTop />
        </motion.div>
        <motion.div
            initial={{ opacity: 0, y: 0, x: 200, }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            transition={{ delay: .3, duration: .6 }}
            className="col-6"
        >
            <StyledBlueFilterDown />
            <StyledWelImg src={welcomeImg} />
        </motion.div>
    </StyledWelcome>
}