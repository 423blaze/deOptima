import styled from "styled-components"
import { ObjectStyle } from "./objectStyle";

//Layout
export const StyledLayout = styled.div``;

//Nav
export const StyledNav = styled.nav`
    ${ObjectStyle.flex};
    width:100%;
    height:var(--nav-height);
    position:fixed;
    backdrop-filter: blur(5px);
    box-shadow: 0 5px 10px #0a0812, 0 1px 0px #2b2a30;
    z-index:100;
`;
export const StyledLogoImg = styled.img`
    max-width:180px;
    width:100%;
    height:auto;
`;
export const NavMarginAuto = styled.div`
    ${ObjectStyle.flexBetween};
    width:90%;
    margin-left:80px;
    margin-right:80px;
`;
export const StyledNavLink = styled.div`
    ${ObjectStyle.flex};
    max-width:100%;
    a{
        margin-left:0px;
        padding:10px 20px;
        font-size: var(--fz-md);
        font-weight: 400;
    }
`;

//welcome
export const StyledWelcome = styled.div`
    ${ObjectStyle.flexBetween};
    -webkit-box-pack: center;
    -webkit-box-align: center;
    min-height: 100vh;
    height: 100vh;
`;
export const StyledWelcomeNet = styled.img`
    width: 100%;
    position:absolute;  
    height:auto;
    transform: translate(-90px, -100px);
`;
export const StyledWelTitle = styled.h1`
    padding-bottom:28px;
    font-weight: 400;
    background: linear-gradient(102.21deg, rgba(109, 156, 246, 0.7) -11.46%, #FFFFFF 46.19%);
    -webkit-text-fill-color: transparent;
    background-clip: text;
    mix-blend-mode: normal;
`;
export const StyledWelNavy = styled.h4`
    color:var(--welcomeText);
`;
export const StyledWelText = styled.p`
    padding-bottom:36px;
`;
export const StyledWelImg = styled.img`
    max-width:650px;
    width:100%;
    height:auto;
`;
export const StyledInputBtn = styled.div`
    ${ObjectStyle.flexBetween};
    border-radius: 40px;
    background: linear-gradient(269deg, rgba(24, 38, 74, .8) 22.75%, rgba(15, 22, 49, .8) 93.35%);
    max-width:460px;
    border: 1px solid rgb(28 39 81);
    position: relative;
    z-index: 1000; 
`;
export const StyledWelInputBug = styled.div`
    position:absolute;
    transform: translate(25px, 10px); 
    p{
        color: #ff4f4f;
        font-size:var(--fz-md);
    }
`;
export const StyledBtnLoding = styled.button`
    ${ObjectStyle.flex};
    padding: 10px;
    font-size: var(--fz-sm);
    font-weight: 600;
    border:none;
    border-radius:40px;
    margin: 3px 5px 3px 0px;
    transition: .3s;
    background: #233bb9;
    color: #FFF;
    cursor: url('pointer.png'), auto;
    &:hover{
        background: #3f57da;
        color: var(--white);
        border-color: rgba(8, 8, 8, 0.4);
    }
`;
export const StyledBtnLodingIcon = styled.img`
    width: 28px;
    height: 28px;
    animation-name: Loding;
    animation-duration: 4s;
    animation-iteration-count: infinite;
    @keyframes Loding {
        0%   {transform: rotate(0deg);}
        100%   {transform: rotate(360deg);}
    }
`;
export const StyledBtnSuccess = styled.button`
    ${ObjectStyle.flex};
    padding: 16px;
    font-size: var(--fz-sm);
    font-weight: 600;
    border:none;
    border-radius:40px;
    margin: 3px 5px 3px 0px;
    transition: .3s;
    background: var(--green);
    color: #FFF;
    cursor: url('pointer.png'), auto;
`;
export const BtnError = styled.button`
    ${ObjectStyle.flex};
    padding: 16px;
    font-size: var(--fz-sm);
    font-weight: 600;
    border:none;
    border-radius:40px;
    margin: 3px 5px 3px 0px;
    transition: .3s;
    background: var(--red);
    color: #FFF;
    cursor: url('pointer.png'), auto; 
`;
//about
export const StyledAbout = styled.div`
    ${ObjectStyle.flexBetween};
    width:100%;
    height:100vh;
    min-height:100vh;
`;
export const SyltedAboutRight = styled.div`
    max-width: 600px;
    width: 100%;
`;
export const StyledAboutTitle = styled.h4`
    color:var(--white);
`;
export const StyledAboutText = styled.p`
    margin-top:10px;
`;
export const StyledAboutImg = styled.img`
    width:100%;
    height: auto;
    transform: translate(-200px, 0px);
`;
export const StyledAboutIconGroup = styled.div`
    ${ObjectStyle.flexWrap};
    margin-top:30px;
    gap: 50px;
`;
export const StyledAboutIconMap = styled.div`
    max-width: 250px;
    height: 150px;
    gap:20px
`;
export const StyledAboutIcon = styled.div`
    width:40px;
    height:40px;
    border-radius:5px;
    background:#12224b;
    padding: 7px;
    border:1px solid #080c20;
    box-shadow: 0 0px 22px #131c43, 0 0px 10px #0d1128;
`;
export const StyledAboutIconTitle = styled.h5`
    margin-top:20px;
`;
export const StyledAboutIconText = styled.p``;

//job
export const StyledJob = styled.div`
    width:100%;
    min-height: 100vh;
    height: 100vh;
    -webkit-box-pack: center;
    -webkit-box-align: center;
`;
export const StyledJobTitle = styled.h4`
    color:var(--white);
    text-align:center;
`;
export const StyledJobText = styled.p`
    color:var(--white);
    text-align:center;
`;
export const StyldJObCardGroup = styled.div`
    ${ObjectStyle.flexCenter};
    flex-wrap: wrap;
    gap:50px;
    margin-top:50px;
`;
export const StyldJObCard = styled.div`
    max-width: 380px;
    width:100%;
    height: 460px;
    padding:5px;
    background: linear-gradient(390deg, #0a0812, #19224f);
    border: 1px solid #080c20;
    border-radius:20px;
    box-shadow: 0 0px 5px #131c43, 0 0px 10px #0d1128;
    transition: .3s;
    &:hover{
        transform: translate(0px, -20px);
    }
`;
export const StyledJobTiText = styled.div`
    padding:10px 15px;
`;
export const StyldJObCardTitle = styled.h5`
    padding:5px 12px;
    font-size:20px;
`;
export const StyldJObCardText = styled.p`
    color:#9da2af;
    padding:5px 12px;
    font-size:18px;
    font-weight:100;
`;
export const StyledMiddleBlueFilter = styled.div`
    position: absolute;
    height: 400px;
    width: 400px;
    border-radius:50%;
    transform: translate(500px, 0px);
    --tw-blur: blur(200px);
    filter: blur(150px);
    background: rgba(20, 28, 72, .6);
    z-index:10;
`;

//review
export const StyledReview = styled.div`
    ${ObjectStyle.flex}
    width:100%;
    min-height: 100vh;
    height: 100vh;
    justify-content: center;
    -webkit-box-pack: center;
    -webkit-box-align: center;
`;
export const StyledReviewBg = styled.div`
    justify-content: center;
    display: flex;
    align-items: center;
`;
export const StyledReviewBgImg = styled.img`
    width: 100%;
    position: absolute;
`;
export const StyledReviewM = styled.div`
    ${ObjectStyle.flexCenter};  
    gap: 130px;
    transform: translate(0px, -120px);
`;
export const StyledReviewCard = styled.div`
    width: 50%;
`;
export const StyledReviewCardDiv = styled.div`
    max-width: 400px;
`;
export const StyledReviewIcon = styled.div`
    ${ObjectStyle.flexCenter}
    width:50px;
    height:50px;
    border-radius: 15px;
    background: #12224b;
    padding: 7px;
    border: 1px solid #080c20;
    box-shadow: 0 0px 22px #131c43, 0 0px 10px #0d1128;
`;
export const StyledReviewAvatarText = styled.div`
    ${ObjectStyle.flex}
    margin-top:20px;
`;
export const StyledReviewText = styled.div`
    margin-left:20px;
`;
export const StyledReviewMText = styled.div`
    ${ObjectStyle.flex}
`;
//contact
export const StyledContact = styled.div`
    ${ObjectStyle.flexColum}
    width:100%;
    min-height: 100vh;
    height: 100vh;
    justify-content: center;

`;
export const StyledContactTitle = styled.h4`
    color: var(--white);
    padding-bottom: 28px;
    background: linear-gradient(102.21deg, rgba(109, 156, 246, 0.7) -11.46%, #FFFFFF 46.19%);   
    background-clip: text;
`;
export const StyledContactText = styled.p`
    text-align:center;
    color:var(--gray);
`;
export const StyledContactBtnGroup = styled.div`
    ${ObjectStyle.flex}
    margin-top:50px;
`;
export const StyledFooterBlueFilterLeft = styled.div`
    position: absolute;
    height: 400px;
    width: 400px;
    border-radius: 50%;
    transform: translate(-800px, 400px);
    filter: blur(150px);
    background: rgba(20, 28, 72, .6);
    z-index: 10;
`;
export const StyledFooterBlueFilterRight = styled.div`
    position: absolute;
    height: 400px;
    width: 400px;
    border-radius: 50%;
    transform: translate(400px, 400px);
    filter: blur(150px);
    background: rgba(20, 28, 72, .6);
    z-index: 10;
`;

//Footer
export const StyledFooter = styled.footer`
    ${ObjectStyle.flexBetween}
    width:100%;
    height:var(--footer-height);
    position: absolute;
    padding:50px 100px;
    background:var(--footer-bg);
    box-shadow: 0 -1px 2px #161229;
    z-index: 100;
`;
export const StyledFooterPrint = styled.div`
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    height:100%;
`;
export const StyledFooterLogo = styled.img`
    width:150px;
`;
export const StyledFooterOther = styled.div`
    display: flex;
    justify-content: space-between;
    width:50%;
`;
export const StyledFooterResources = styled.div``;
export const StyledFooterResourcesM = styled.div`
    ${ObjectStyle.flex}
`;
export const StyledFooterResourcesTitle = styled.p`
    margin-bottom:20px;
`;
export const StyledFooterCommunity = styled.div``;
export const StyledFooterCommunityM = styled.div`
    ${ObjectStyle.flex}
`;
export const StyledFooterCommunityTitle = styled.p`
    margin-bottom:20px;
`;
export const StyledFooterOtherLegal = styled.div``;
export const StyledFooterOtherLegalM = styled.div`
    ${ObjectStyle.flex}
`;
export const StyledFooterOtherLegalTitle = styled.p`
    margin-bottom:20px;
`;

//other
export const StyledBlueFilterTop = styled.div`
    position: absolute;
    height: 600px;
    width: 600px;
    border-radius:800px;
    filter: blur(200px);
    background: rgba(20, 28, 72, .6);
    transform: translate(-250px, -900px);
`;
export const StyledBlueFilterDown = styled.div`
    position: absolute;
    height: 400px;
    width: 600px;
    border-radius: 600px;
    filter: blur(200px);
    background: rgba(20, 28, 72, .6);
`;
export const StyledAboutBlueFilter = styled.div`
    position: absolute;
    height: 200px;
    width: 200px;
    background: rgb(42 64 183 / 70%);
    border-radius: 50%;
    filter: blur(150px);
    transform: translate(440px, -200px);
    z-index:10;
`;
export const BtnDarkBlue = styled.button`
    padding: 15px 36px;
    margin: 3px 5px 3px 20px;
    background:#243BB933;
    border-radius: 40px;
    border:1px solid rgb(36, 59, 185);
    font-size: var(--fz-sm);
    font-weight: 600;
    transition: .3s;
    color: var(--white);
    cursor: url('pointer.png'), auto;
    &:hover{
        background: #172165;
        color: var(--white);
        border-color: rgba(8, 8, 8, 0.4);
        border:1px solid rgb(36, 59, 185);
    }
`;
export const StyledInput = styled.input`
    padding:18px 70px 18px 40px;
    background: transparent;
    border:none;
    outline: none;
    color:var(--gray);
    font-size:var(--fz-sm);
    
`;
export const BtnBlue = styled.button`
    background: #233bb9;
    margin: 3px 5px 3px 0px;
    padding: 15px 36px;
    border:none;
    border-radius:40px;
    font-size: var(--fz-sm);
    font-weight: 600;
    transition: .3s;
    color: #FFF;
    cursor: url('pointer.png'), auto;
    &:hover{
        background: #3f57da;
        color: var(--white);
        border-color: rgba(8, 8, 8, 0.4);
    }
`;
export const StyledTextSmall = styled.h6``;
export const StyledDiv = styled.div``;
export const SytyledNextLine = styled.br``;
export const StyledText = styled.p``;
export const StyledLink = styled.a``;
