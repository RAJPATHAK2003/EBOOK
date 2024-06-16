import { OrderSuccess } from "./components/OrderSuccess";
import { OrderFail } from "./components/OrderFailure";
import { useLocation } from "react-router";
export const OrderPage = () => {
  let {state}=useLocation();
    return (
      <main><OrderSuccess data={state.data}/></main>
    )
  }