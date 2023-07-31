import React from 'react'
import { useDispatch } from 'react-redux'
import { removeReservation } from '../features/reservationSlice';

interface ReservationCardProps {
  name: string,
  index: number
}

export const ReservationCard = ({name, index}: ReservationCardProps) => {

  const dispatch = useDispatch();

  return (
    <div onClick={() => {
      dispatch(removeReservation(index))
    }} className="reservation-card-container">{name}</div>
  )
}
