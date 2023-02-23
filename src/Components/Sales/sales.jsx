import { useState } from "react";
import { BsFillBarChartFill, BsCartFill, BsPhone } from "react-icons/bs";
import { MdInsertInvitation } from "react-icons/md";
import "./sale.css";

function Sales() {
  const [sales, setSales] = useState([
    {
      head: "Total Income",
      amount: "$2,700",
      icon: <BsFillBarChartFill />,
    },
    {
      head: "Total orders",
      amount: 20,
      icon: <BsCartFill />,
    },
    {
      head: "Available Products",
      amount: 15,
      icon: <BsPhone />,
    },
    {
      head: "Refferals",
      amount: 6,
      icon: <MdInsertInvitation />,
    },
  ]);
  return (
    <div className="sales__one">
      {sales.map((item, index) => {
        return (
          <div className="sales__two" key={index}>
            <div className="sales__icons">{item.icon}</div>
            <p>{item.head}</p>
            <h3>{item.amount}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Sales;
