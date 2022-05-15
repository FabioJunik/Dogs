import styled from "styled-components";

export const Container = styled.div`
    margin-bottom: 1rem;
`;

export const InputStyled = styled.input`
    border: 1px solid #eee;
    display: block;
    width: 100%;
    font-size: 1rem;
    padding: .8rem;
    border-radius: .4rem;
    background-color: #eee;
    transition: .2s;

    :hover, :focus{
        outline: none;
        border-color: #fb1;
        background-color: #fff;
        box-shadow: 0 0 0 3px #fea;
    }
`;

export const Label = styled.label`
    display: block;
    font-size: 1rem;
    line-height: 1;
    padding-bottom: .5rem;
`;

export const Error = styled.p`
    color: red;
    margin-top: 0.87rem;
`;