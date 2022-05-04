import React, { useEffect, useState } from "react";
import "./Orders.css";
import { useStateValue } from "../StateProvider";
import {
  query,
  collection,
  onSnapshot,
  orderBy,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";
import Order from "./Order";
import { db } from "../firebase";

function Orders() {
  const [{ user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      const userRef = collection(db, "/users/" + user?.uid + "/orders");
      const q = query(userRef, orderBy("created", "desc"));
      onSnapshot(q, (snapshot)=> {
          setOrders(
              snapshot.docs.map((doc)=> ({
                  id: doc.id,
                  data: doc.data(),
              }))
          );
      })
    };
    if(user){
        getOrders();
    }
    else{
        setOrders([]);
    }
    
  }, [user]);
  return (
    <div className="orders text-white">
      <h3>Your Orders</h3>
       {
        orders?.map((order)=> (
            <Order order={order} />
        ))
       }
    </div>
  );
}

export default Orders;
