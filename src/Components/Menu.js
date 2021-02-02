import React from 'react';
import styled from 'styled-components';
import dbMenu from './DBMenu';
import { ListItem } from './ListItem';
import banner from '../image/banner.png';

const MenuStyled = styled.main`
    background-color: #ccc;
    margin-top: 80px;
`;

const Section = styled.section`
    padding: 30px;
`;

const DivBanner = styled.div`
    height: 210px;
`;

const Img = styled.img`
    height: 210px;
    width: 100%;
`;

export const Menu = () => (
    <MenuStyled>
        <DivBanner>
            <Img src={banner} />
        </DivBanner>
        <Section>
            <h2>Бургеры</h2>
            <ListItem itemList={dbMenu.burger} />
        </Section>
        <Section>
            <h2>Закуски / напитки</h2>
            <ListItem itemList={dbMenu.other} />
        </Section>
    </MenuStyled>
);