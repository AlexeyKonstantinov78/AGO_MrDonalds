import React from 'react';
import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';
import { GlobalStyle } from './Components/Style/GlobalStyle';
import { NavBar } from './Components/NavBar/NavBar';
import { Menu } from './Components/Menu/Menu';
import { ModalItem } from './Components/Modal/ModalItem';
import { Order } from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';
import { useAuth } from './Components/Hooks/useAuth';
import { useTitle } from './Components/Hooks/useTitle';
import { OrderConfirm } from './Components/Order/OrderConfirm';
import { useOrderConfirm } from './Components/Hooks/useOrderConfirm';

const firebaseConfig = {
  apiKey: "AIzaSyANX64l06cDKMhUKCc0oDRZR0-MbHDmdts",
  authDomain: "mrdonalds-d2c0c.firebaseapp.com",
  databaseURL: "https://mrdonalds-d2c0c-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mrdonalds-d2c0c",
  storageBucket: "mrdonalds-d2c0c.appspot.com",
  messagingSenderId: "117523592614",
  appId: "1:117523592614:web:c0d49005826caeeffecb67"
};

firebase.initializeApp(firebaseConfig);

function App() {

  const auth = useAuth(firebase.auth);
  const openItem = useOpenItem();
  const orders = useOrders();
  const orderConfirm = useOrderConfirm();

  useTitle(openItem.openItem);

  // применим рект патерн JSX спрейт атрибут передать все свойства обекта

  return (
    <>
      <GlobalStyle />
      <NavBar {...auth} />
      <Order
        {...orders}
        {...openItem}
        {...auth}
        {...orderConfirm}
      />
      <Menu {...openItem} />
      {openItem.openItem && <ModalItem {...openItem} {...orders} />}
      {orderConfirm.openOrderConfirm &&
        <OrderConfirm {...orders} {...auth} {...orderConfirm}
          firebaseDatabase={firebase.database} />}
    </>
  );
}

export default App;
