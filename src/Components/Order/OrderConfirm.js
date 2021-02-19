import React, { useContext } from 'react';
import styled from 'styled-components';
import { Overlay, OrderTitle, Total, TotalPrice } from '../Style/GlobalStyle';
import { ButtonCheckout } from '../Style/ButtonChekout';
import { totalPriceItems, formatCurrency, projection } from '../Functions/secondaryFunction';
import { Context } from '../Functions/context';

const Modal = styled.div`
    background-color: white;
    width: 600px;
    padding: 30px;
`;

const Text = styled.h3`
    text-align: center;
    margin-bottom: 30px;
`;

const rulesData = {
    name: ['name'],
    price: ['price'],
    count: ['count'],
    topping: ['topping', arr => arr.filter(obj => obj.checked).map(obj => obj.name),
        arr => arr.length ? arr : 'no toppings'],
    choice: ['choice', item => item ? item : 'no choices'],
}

const sendOrder = (dataBase, orders, authentication) => {
    const newOrder = orders.map(projection(rulesData));
    const data = new Date();

    dataBase.ref('orders').push().set({
        nameClient: authentication.displayName,
        email: authentication.email,
        dataOrder: data.getDate() + ":" + (data.getMonth() + 1) + ":" + data.getFullYear() + " " + data.getHours() + ":" + data.getMinutes() + ":" + data.getMinutes(),
        order: newOrder
    });

}

export const OrderConfirm = () => {
    const { firebaseDatabase } = useContext(Context);
    const { orders: { orders, setOrders } } = useContext(Context);
    const { auth: { authentication } } = useContext(Context);
    const { orderConfirm: { setOpenOrderConfirm } } = useContext(Context);
    const dataBase = firebaseDatabase();
    const total = orders.reduce((result, order) => totalPriceItems(order) + result, 0);

    return (
        <Overlay>
            <Modal>
                <OrderTitle>{authentication.displayName}</OrderTitle>
                <Text>Осталось только подтверлить ваш заказ</Text>
                <Total>
                    <span>Итого</span>
                    <TotalPrice>{formatCurrency(total)}</TotalPrice>
                </Total>
                <ButtonCheckout
                    onClick={() => {
                        sendOrder(dataBase, orders, authentication);
                        setOrders([]);
                        setOpenOrderConfirm(false);
                    }}>
                    Подтвердить
                </ButtonCheckout>
            </Modal>
        </Overlay>
    )
}