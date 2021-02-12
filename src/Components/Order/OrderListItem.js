import React, { useRef } from 'react';
import styled from 'styled-components';
import trashImage from '../../image/trash.svg';
import { totalPriceItems, formatCurrency } from '../Functions/secondaryFunction';

const OrderItemStyled = styled.li`
    display: flex;
    margin: 15px 0;
    flex-wrap: wrap;
    cursor: pointer;
`;

const ItemName = styled.span`
    flex-grow: 1;
`;

const ItemPrise = styled.span`
    margin-left: 20px;
    margin-right: 10px;
    min-width: 65px;
    text-align: right;
`;

const TrashButton = styled.button`
    width: 24px;
    height: 24px;
    border-color: transparent;
    background-color: transparent;
    background-image: url(${trashImage});
    background-position: center;
    background-size: cover;
    background-repeat: np-repeat;
    cursor: pointer;
`;

const Toppings = styled.div`
    color: #9a9a9a;
    font-size: 14px;
    width: 100%;
`;

export const OrderListItem = ({ order, index, deleteItem, setOpenItem }) => {
    const topping = order.topping.filter(item => item.checked)
        .map(item => item.name).join(', ');

    const refDeleteButton = useRef(null);

    return (
        <OrderItemStyled onClick={(e) => e.target !== refDeleteButton.current && setOpenItem({ ...order, index })}>
            <ItemName>{order.name} {order.choice}</ItemName>
            <span>{order.count}</span>
            <ItemPrise>{formatCurrency(totalPriceItems(order))}</ItemPrise>
            <TrashButton ref={refDeleteButton} onClick={() => { deleteItem(index) }} />
            {topping && <Toppings>Допы: {topping}</Toppings>}
        </OrderItemStyled>

    )
};