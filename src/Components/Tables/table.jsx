import { useEffect, useState } from "react";
import "./table.css";

function Table() {
  // UseState
  const [Pending, setPending] = useState("Pending");
  const [Success, setSuccess] = useState("Success");
  const [Failed, setFailed] = useState("Failed");
  const [condition, setCondition] = useState(false);

  //   Lists Od data To be Map
  const [orders, setOrders] = useState([
    {
      id: "#201830",
      item: "Airpods",
      status: Success,
    },
    {
      id: "#201720",
      item: "Phone Case",
      status: Failed,
    },
    {
      id: "#572230",
      item: "Beats 2 Pro",
      status: Pending,
    },
    {
      id: "#923230",
      item: "Mag Safe",
      status: Failed,
    },
    {
      id: "#201830",
      item: "Laptop",
      status: Failed,
    },
  ]);

  //   Function For Changing Status to Pending
  const change = (id) => {
    setOrders(
      orders.map((order, i) => {
        if (i == id) {
          return { ...order, status: "Pending" };
        } else {
          return order;
        }
      })
    );
  };

  const changeSucess = (id) => {
    setTimeout(() => {
      setOrders(
        orders.map((order, i) => {
          if (i == id) {
            return { ...order, status: "Success" };
          } else {
            return order;
          }
        })
      );
    }, 5000);
  };

  return (
    <div className="table__one">
      <table className="table__two">
        <thead className="table__three">
          <tr className="table__four">
            <td>Order</td>
            <td>ID</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody className="table__five">
          {orders.map((items, i) => {
            return (
              <tr key={i}>
                <td>{items.item}</td>
                <td>{items.id}</td>
                <td>
                  <button
                    onClick={() => {
                      change(i);
                      changeSucess(i);
                      setCondition((prev) => !prev);
                    }}
                    className={
                      items.status == "Pending"
                        ? "pending"
                        : "" || items.status == "Failed"
                        ? "failed"
                        : "success"
                    }
                  >
                    {items.status}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
