import { css } from "styled-components"

export const ObjectStyle = {
    flex: css`
        display: flex;
        align-items: center;
    `,
    flexCenter: css`
        display: flex;
        justify-content: Center;
        align-items: center;
    `,
    flexBetween: css`
        display: flex;
        justify-content: space-between;
        align-items: center;
    `,
    flexAround: css`
        display: flex;
        justify-content: space-around;
        align-items: center;
    `,
    flexColum: css`
        display: flex;
        align-items: center;
        flex-direction: column;
    `,
    flexColumBet: css`
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-between;
    `,
    flexColumBetStart: css`
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        justify-content: space-between;
    `,
    flexWrap: css`
        display: flex;
        flex-wrap: wrap;
        align-items: center;
    `,
    flexWrapBetween: css`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    `,
    textLeft: css`
        text-align: left;
    `,
    textRight: css`
        text-align: right;
    `,
    textCenter: css`
        text-align: center;
    `,
}