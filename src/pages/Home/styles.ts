import styled, { css } from "styled-components";

const widthSmallerThan600px = 'max-width: 600px'
interface Card {
    color: string
}

export const Grid = styled.div`
    display: grid;  
    
    // Initlaly grid will have 8 columns with 1 fractional unit space each
    grid-template-columns: repeat(8, 1fr);  
    background-color: var(--app-bg-color);

    width: 100vw;
    height: 100vh;

    gap: 0.5rem;

    // If screen is small than 600 px make 2 columns of grid and 6 rows with size 1fr each
    @media (${widthSmallerThan600px}) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(6, 1fr);
    }
`

const Box = css<Card>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    color: white;
    font-size: 1.5rem;
    font-weight: bold;

    background-color: ${props => props.color};
`

export const Box1 = styled.div`
    // Inherirt styles from Box
    ${Box}

    grid-column: span 4;
    grid-row: span 4;

    @media (${widthSmallerThan600px}) {
        grid-column: span 2;
        grid-row: 1;  
    }
`

export const Box2 = styled.div`
    ${Box}
    grid-column: span 4;
    grid-row: span 2;

    @media (${widthSmallerThan600px}) {
        grid-column: span 2;
        grid-row: 3;  
    }
`

export const Box3 = styled.div`
    ${Box}
    grid-column: span 2;
    grid-row: span 2;

    @media (${widthSmallerThan600px}) {
        grid-column: span 1;
        grid-row: 2;  
    }
`
export const Box4 = styled.div`
    ${Box}
    grid-column: span 2;
    grid-row: span 2;

    @media (${widthSmallerThan600px}) {
        grid-column: span 1;
        grid-row: 2;  
    }
`

export const Box5 = styled.div`
    ${Box}
    grid-column: 1 / span 3;

    @media (${widthSmallerThan600px}) {
        grid-column: span 1;
        grid-row: 5;  
    }
`

export const Box6 = styled.div`
    ${Box}
    grid-column: 1 / span 3;
    grid-row: span 2;

    @media (${widthSmallerThan600px}) {
        grid-column: span 1; 
        grid-row: 6;  
    }
`

export const Box7 = styled.div`
    ${Box}
    grid-column: 4 / span 2;
    grid-row: 5 / span 3;

    @media (${widthSmallerThan600px}) {
        grid-column: span 2;
        grid-row: 4;  
    }
`

export const Box8 = styled.div`
    ${Box}
    grid-column: 6 / span 3;
    grid-row: 5 / span 2;

    @media (${widthSmallerThan600px}) {
        grid-column: span 1; 
        grid-row: 5;  
    }
`

export const Box9 = styled.div`
    ${Box}
    grid-column: 6 / span 3;

    @media (${widthSmallerThan600px}) {
        grid-column: span 1;
        grid-row: 6; 
    }
`