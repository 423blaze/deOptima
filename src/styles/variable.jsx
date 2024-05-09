import { css } from "styled-components"

export const variable = css`
    :root {
        --max-width: 1100px;
        --border-radius: 12px;
        --font-mono: ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono",
        "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro",
        "Fira Mono", "Droid Sans Mono", "Courier New", monospace;

        --foreground-rgb: 0, 0, 0;
        --background-start-rgb: 214, 219, 220;
        --background-end-rgb: 255, 255, 255;

        --nav-bg:transparent;
        --nav-scroll-bg:#f1f1f1cc;
        
        --welcomeTitle:#ffe515;
        --welcomeText:#6585a8;

        --footer-bg:#0a0812;
        
        --dark: #080808;
        --white: #FFF;
        --gray:#c9c9c9;       
        --red:#be6aa7;
        --green:#4db29a; 
        --blue:#233bb9;

        --font-sans: 'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui,
        sans-serif;
        --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

        --fz-xxs: 12px;
        --fz-xs: 14px;
        --fz-sm: 16px;
        --fz-md: 18px;
        --fz-lg: 20px;
        --fz-xl: 22px;
        --fz-xxl: 24px;
        --fz-xxxl: 36px;
        --fz-heading: 60px;

        --nav-height:100px;
        --nav-scroll-height: 70px;
        
        --border-radius: 4px;

        --footer-height:300px;
    }
`;
