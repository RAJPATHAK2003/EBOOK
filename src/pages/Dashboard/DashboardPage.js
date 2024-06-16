import { useEffect } from "react";
import {DashbaordCard} from "./components/DashboardCard";
import {DashbaordEmpty} from "./components/DashboardEmpty";
import { useState } from "react";
export const DashbaordPage = () => {
  let [orders,setOrder]=useState([]);

  useEffect(()=>{
    async function fetchdata(){
      const response=await fetch(`http://localhost:8000/orders?user.name=RAJ PATHAK`,{
        method:"GET",
        headers: {"Content-Type": "application/json"}
      })
      const data=await response.json();
      setOrder(data);
    }
    fetchdata();
  },[])
    return (
      <main>
        <section>
          <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">My Dashboard</p>
        </section>
        <section>

          {orders && orders.map((order)=>(
              <DashbaordCard key={order.id} order={order}/>
          ))}
        </section>
        <section>
           {!orders && <DashbaordEmpty/>}
        </section>
      </main>
    )
  }