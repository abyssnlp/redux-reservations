import React, { useState } from "react";
import { Customer, addFoodToCustomer } from "../features/customerSlice";
import { useDispatch } from "react-redux";

interface CustomerCardProps {
  customer: Customer;
  index: number;
}

const CustomerCard = ({ customer, index }: CustomerCardProps) => {
  const dispatch = useDispatch();

  const [customerFood, setCustomerFood] = useState("");

  return (
    <div className="customer-food-card-container">
      <p>{customer.name}</p>
      <div className="customer-foods-container">
        <div className="customer-food">
          {customer.food.map((food) => {
            return <p>{food}</p>;
          })}
        </div>
        <div className="customer-food-input-container">
          <input onChange={(e) => setCustomerFood(e.target.value)} />
          <button
            onClick={() => {
              dispatch(
                addFoodToCustomer({ id: customer.id, food: customerFood })
              );
              setCustomerFood("");
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;
