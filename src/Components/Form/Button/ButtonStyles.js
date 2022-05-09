import styled from "styled-components";

export const ButtonStyled = styled.button`

    font-size: 1rem;
    font-family: var(--type-first);
    border: none;
    border-radius: .4rem;
    background-color: #fb1;
    color: #764701;
    padding: .8rem 1.2rem;
    box-sizing: border-box;
    transition: .1s;
    cursor: pointer;

    :hover, :focus{
        outline: none;
        box-shadow: 0 0 0 3px #fea, 0 0 0 4px #fb1;
    }

    :disabled{
        opacity: .5;
        cursor: wait;
    }
`;