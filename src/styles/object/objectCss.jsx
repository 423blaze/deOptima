import { css } from "styled-components";

export const ObjectCss = css`
    .flex {
        display: flex;
        align-items: center;
    }
    .flexCenter {
        display: flex;
        justify-content: Center;
        align-items: center;
    }
    .flexBetween {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .flexAround {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .flexColum {
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    .flexColumBet {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-between;
    }
    .flexColumBetStart {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        justify-content: space-between;
    }
    .flexWrap {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
    }
    .textLeft {
        text-align: left;
    }
    .smallBtn {
        border-color: rgba(8, 8, 8, 0.4);
        border: 1px solid;
        padding: 5px 15px;
        color: #080808CC;
        font-size: var(--fz-xxs);
        font-weight: 500;
        border-radius: 20px;
        transition: .3s;
    }
    .smallBtn:hover {
        background: #080808F2;
        color: var(--white);
        border: 1px solid;
    }
    .bigBtn {
        border-color: rgba(8, 8, 8, 0.4);
        padding: 16px 28px;
        color: #080808CC;
        font-size: var(--fz-sm);
        font-weight: bold;
        border: 1px solid;
        border-radius: 10px;
        margin: 10px 10px 10px 0px;
        transition: .3s;
    }
    .bigBtn:hover {
        background: #080808F2;
        color: var(--white);
        border: 1px solid;
    }
    .bigBtnDark {
        padding: 16px 28px;
        font-size: var(--fz-sm);
        font-weight: 500;
        border: 1px solid;
        border-radius: 10px;
        margin: 10px 10px 10px 0px;
        transition: .3s;
        background: #080808F2;
        color: #FFF;
    }
    .bigBtnDark:hover {
        background: transparent;
        color: var(--white);
        border: 1px solid;
        color: #080808F2;
        border-color: rgba(8, 8, 8, 0.4);
    }
    .BtnWhite {
        padding: 16px 28px;
        font-size: var(--fz-sm);
        font-weight: bold;
        border-radius: 10px;
        margin: 10px 10px 10px 0px;
        transition: .3s;
        background: #FFF;
        color: #080808F2;
    }
    .BtnWhite:hover {
        background: #080808F2;
        color: var(--white);
        color: #FFF;
        border-color: rgba(8, 8, 8, 0.4);
    }
    .opaBtn {
        font-size: var(--fz-xxl);
        color: #080808;
        transition: 0.3s;
    }
    .opaBtn:hover {
        color: var(--orange);
    }
    .yellowTitle {
        color: var(--orange);
        font-size: var(--fz-lg);
        font-weight: 600;
    }
    .navMarginAuto{
        width:80%;
        margin-left:auto;
        margin-right:auto;
    }
    .marginAuto{
        margin-left:auto;
        margin-right:auto;
    }
`
