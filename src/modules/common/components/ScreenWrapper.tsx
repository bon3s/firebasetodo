import React, { Fragment } from 'react';
import { RouterProps } from 'react-router';
import GlobalStyle from 'modules/common/general/globalStyles';
import Header from './Header';

interface Props extends RouterProps {
    children: JSX.Element | JSX.Element[];
}

const ScreenWrapper = (props: Props) => {
    return (
        <>
            <GlobalStyle />
            <Header history={props.history} />
            {props.children}
        </>
    );
};

export default ScreenWrapper;
