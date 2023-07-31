import React, { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./app/store";
import { ReservationCard } from "./components/ReservationCard";
import { addReservation } from "./features/reservationSlice";
import CustomerCard from "./components/CustomerCard";

function App() {
  const [reservationNameInput, setReservationNameInput] = useState("");

  const reservations = useSelector(
    (state: RootState) => state.reservations.value
  );

  const customers = useSelector((state: RootState) => state.customers.value);

  const dispatch = useDispatch();

  const handleAddReservation = () => {
    if (!reservationNameInput) return;
    dispatch(addReservation(reservationNameInput));
    setReservationNameInput("");
  };

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.map((name, ix) => {
                return <ReservationCard name={name} index={ix} />;
              })}
            </div>
          </div>
          <div className="reservation-input-container">
            <input
              value={reservationNameInput}
              onChange={(e) => setReservationNameInput(e.target.value)}
            />
            <button onClick={handleAddReservation}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          {customers.map((customer, ix) => {
            return <CustomerCard customer={customer} index={ix} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
