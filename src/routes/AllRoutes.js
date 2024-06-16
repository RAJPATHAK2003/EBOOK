import { Route,Routes } from "react-router";

import { HomePage } from "../pages/Home/HomePage";
import { ProductList } from "../pages/Products/ProductList";
import { ProductDetail } from "../pages/ProductDetail";
import { Login, OrderPage,PageNotFound} from "../pages";
import { Registers } from "../pages";
import { CartPage } from "../pages";
import { DashbaordPage } from "../pages/Dashboard/DashboardPage";

 export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/products" element={<ProductList/>}/>
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Registers />} />
        <Route path="orderinfo" element={<OrderPage/>} />
        <Route path="dashboardinfo" element={<DashbaordPage/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </>
  )
}


