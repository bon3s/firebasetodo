import React from 'react';
import { RouterProps } from 'react-router';
import { HeaderStyles } from './styles/HeaderStyles';
import Logo from 'assets/img/firebase.png';
interface Props extends RouterProps {}

const Header = (props: Props) => {
    return (
        <HeaderStyles>
            <div className="header">
                <img src={Logo} alt="" />
                <h1>ForgetMeNot</h1>
            </div>
        </HeaderStyles>
    );
};

export default Header;
