import React, { useContext } from 'react';
import styled from 'styled-components';
import { ButtonCheckout } from '../Style/ButtonChekout';
import { OrderListItem } from './OrderListItem';
import { totalPriceItems, formatCurrency } from '../Functions/secondaryFunction';
import { Context } from '../Functions/context';
import { OrderTitle, Total, TotalPrice } from '../Style/GlobalStyle';

const OrderStyled = styled.section`
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 80px;
    left: 0;
    background: #fff;
    width: 380px;
    height: calc(100% - 80px);
    box-shadow: 3px 4px 5px rgba(0,0,0, .25);
    padding: 20px;
`;

const OrderContent = styled.div`
    flex-grow: 1;
`;

const OrderList = styled.ul`

`;

const EmtyList = styled.p`
    text-align: center;
`;

export const Order = () => {
    const {
        auth: { authentication, logIn },
        orders: { orders, setOrders },
        orderConfirm: { setOpenOrderConfirm },
    } = useContext(Context);

    const deleteItem = index => {
        const newOrders = [...orders];
        newOrders.splice(index, 1);
        setOrders(newOrders);
    }

    const total = orders.reduce((result, order) => totalPriceItems(order) + result, 0);

    const totalCounter = orders.reduce((result, order) => order.count + result, 0);

    return (
        <OrderStyled>
            <OrderTitle>ВАШ ЗАКАЗ</OrderTitle>
            <OrderContent>
                {orders.length ?
                    <OrderList>
                        {orders.map((order, index) => <OrderListItem
                            key={index}
                            order={order}
                            deleteItem={deleteItem}
                            index={index}
                        />)}
                    </OrderList> :
                    <EmtyList>Список заказов пуст</EmtyList>}
            </OrderContent>
            {orders.length ?
                <>
                    <Total>
                        <span>Итого</span>
                        <span>{totalCounter}</span>
                        <TotalPrice>{formatCurrency(total)}</TotalPrice>
                    </Total>
                    <ButtonCheckout onClick={() => {
                        if (authentication) {
                            setOpenOrderConfirm(true)
                        } else {
                            logIn()
                        }
                    }}>Оформить</ButtonCheckout>
                </> : null
            }
        </OrderStyled>
    )
};