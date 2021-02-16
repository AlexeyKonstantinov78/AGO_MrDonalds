import React from 'react';
import styled from 'styled-components';
//import dbMenu from '../DBMenu';
import { ListItem } from './ListItem';
import { Banner } from './Banner';
import { useFetch } from '../Hooks/useFetch';

const MenuStyled = styled.main`
    background-color: #ccc;
    margin-top: 80px;
    margin-left: 380px;
`;

const Section = styled.section`
    padding: 30px;
`;

export const Menu = ({ setOpenItem }) => {

    const res = useFetch();
    const dbMenu = res.response;

    return (
        <MenuStyled>
            <Banner />
            {dbMenu ?
                <>
                    <Section>
                        <h2>Бургеры</h2>
                        <ListItem
                            itemList={dbMenu.burger}
                            setOpenItem={setOpenItem}
                        />
                    </Section>
                    <Section>
                        <h2>Закуски / напитки</h2>
                        <ListItem
                            itemList={dbMenu.other}
                            setOpenItem={setOpenItem}
                        />
                    </Section>
                </> : res.error ?
                    <div>Sorry</div> :
                    <div>Loading...</div>
            }
        </MenuStyled>
    )
};