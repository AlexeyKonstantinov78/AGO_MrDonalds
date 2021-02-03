import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
    position: fixed;
    display: flex;
    justyfy-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    z-index: 20;
`;

const Modal = styled.div`
    position: absolute;
    left: 30%;
    background-color: #fff;
    width: 600px;
    height: 600px;
`;

const Banner = styled.div`
    width: 100%;
    height: 200px;
    background-image: url(${({ img }) => img});
    background-size: cover;
    background-position: center;
    margin-bottom:20px;
`;

const Item = styled.div`
    padding: 0 30px;
    font-size: 30px;
    font-family: Pacifico;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`;

const Add = styled.button`
    position: absolute;
    font-size: 21px;
    background-color: #299B01;
    width: 250px;
    height: 65px;
    left: 175px;
    top: 80%;
`;

export const ModalItem = ({ openItem, setOpenItem }) => {

    function closeModal(e) {
        if (e.target.id === 'overlay') {
            setOpenItem(null);
        }
    }

    if (!openItem) return null;

    return (
        <Overlay id="overlay" onClick={closeModal}>

            <Modal>
                <Banner img={openItem.img} />
                <Item>
                    <div>{openItem.name}</div>
                    <div>{openItem.price.toLocaleString('ru-RU',
                        { style: 'currency', currency: 'RUB' })}</div>
                </Item>
                <Add>Добавить</Add>
            </Modal>

        </Overlay>
    )
};