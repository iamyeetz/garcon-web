import {createContext,useState} from 'react'
 const OrderContext = createContext(null)
export function OrderProvider({children}) {
    const [orders,setOrders] = useState([]);
    return(
    <OrderContext.Provider value={{orders,setOrders}}>{children}</OrderContext.Provider>
    )
}

export default OrderContext;