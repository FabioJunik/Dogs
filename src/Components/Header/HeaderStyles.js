import styled from "styled-components";
import {ReactComponent as Dogs} from '../../Assets/dogs.svg';
import  {ReactComponent as User} from '../../Assets/usuario.svg';


export const Container = styled.header`
    width: 100%;
    position: fixed;
    top: 0;
    background-color: #fff;
    box-shadow: 0px 1px 1px rgba(0 , 0, 0, .1) ;
    z-index: 100;
`;

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4rem;
    span{color: #333;}
`;

export const Logo = styled(Dogs)`
`;

export const UserIcon = styled(User)`
    width: 14px;
    height: 17px;
    margin-left: .5rem;
`;