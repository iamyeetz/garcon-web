import './App.css';
import Header from './components/Header'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Item from './pages/Item'
import MenuItems from './pages/MenuItems'
import OrderStatus from './pages/OrderStatus'
import Cart from './pages/Cart'
import {Route,Routes} from 'react-router-dom'
import {BrowserRouter} from 'react-router-dom';
import {OrderProvider} from './contexts/OrderContext';
import {useState} from 'react';
function App() {

  return (
    <div className="App">
         <OrderProvider>
          <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/menu" element={<Menu />}/>
            <Route path="/orderstatus" element={<OrderStatus />}/>
            <Route path="/menu/menuitems" element={<MenuItems />}/>
            <Route path="/menu/menuitems/item" element={<Item />}/>
            <Route path="/cart" element={<Cart />}/>
          </Routes>
          </BrowserRouter>
          </OrderProvider>
    </div>
  );
}

export default App;
