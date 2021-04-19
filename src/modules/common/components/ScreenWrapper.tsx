import React, { Fragment } from 'react';
import { RouterProps } from 'react-router';
import GlobalStyle from 'modules/common/general/globalStyles';
import Header from './Header';
import ScreenWrapperStyles from './styles/ScreenWrapperStyles';

interface Props extends RouterProps {
    children: JSX.Element | JSX.Element[];
}

const ScreenWrapper = (props: Props) => {
    return (
        <>
            <Header history={props.history} />
            <ScreenWrapperStyles>
                <GlobalStyle />
                {props.children}
            </ScreenWrapperStyles>
        </>
    );
};

export default ScreenWrapper;
