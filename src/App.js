import React from 'react';
import { GlobalStyle } from './Components/GlobalStyle';
import { NavBar } from './Components/NavBar';
import { Menu } from './Components/Menu';
import { ModalItem } from './Components/ModalItem';
import { Order } from './Components/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';

function App() {

  const openItem = useOpenItem();
  const orders = useOrders();

  // применим рект патерн JSX спрейт атрибут передать все свойства обекта

  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Order {...orders} />
      <Menu {...openItem} />
      {openItem.openItem && <ModalItem {...openItem} {...orders} />}
    </>
  );
}

export default App;
