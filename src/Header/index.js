import React from 'react';
import {Container, Logo, MainWrap, StyledMoment, SubWrap} from "./elements";
import LogoSrc from '../assets/logo.png';

import {Typography} from "@material-ui/core";

const Header = () => {
    return (
        <Container>
            <MainWrap>
                <Logo src={LogoSrc} />
                <Typography>실시간 운행보드</Typography>
            </MainWrap>
            <SubWrap>
                <StyledMoment
                    format='YYYY년 MM월 DD일'
                    interval={30000}
                />
            </SubWrap>
        </Container>
    );
}

export default Header;