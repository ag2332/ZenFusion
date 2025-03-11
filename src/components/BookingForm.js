import React from "react";
import { useState } from "react";
import mainImg from "../images/form-image.jpg";
import Grid12 from "./atoms/Grid12";
import GridImage from "./atoms/GridImage";
import GridForm from "./atoms/GridForm";
import FormRow from "./atoms/FormRow";

const BookingForm = (props) => {
  const [occasion, setOccasion] = useState("");
  const [guests, setGuests] = useState("");
  const [date, setDate] = useState("");
  const [times, setTimes] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSumbit = (e) => {
    e.preventDefault();
    props.submitForm(e);
  };

  const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
  };

  return (
    <Grid12>
      <GridForm>
        <form onSubmit={handleSumbit} className="form">
          <h2 className="grid-heading">
            Please complete the booking form
          </h2>
          <p className="info-booking">
            Please note that we require a minimum of 24 hours notice for all
            bookings
          </p>
          <FormRow>
            <label htmlFor="book-name">Name:</label>
            <input
              id="book-name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="name"
              required
            />
          </FormRow>
          <FormRow>
            <label htmlFor="book-email">Email:</label>
            <input
              id="book-email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              required
            />
          </FormRow>
          <FormRow>
            <label htmlFor="book-date">Choose Date:</label>
            <input
              id="book-date"
              value={date}
              onChange={(e) => handleChange(e.target.value)}
              type="date"
              required
            />
          </FormRow>
          <FormRow>
            <label htmlFor="book-time">Choose Time:</label>
            <select
              id="book-time"
              value={times}
              onChange={(e) => setTimes(e.target.value)}
              type="time"
              required
            >
              <option value="">Select a Time</option>
              {props.availableTimes.availableTimes.map((availableTimes) => {
                return <option key={availableTimes}>{availableTimes}</option>;
              })}
            </select>
          </FormRow>
          <FormRow>
            <label htmlFor="book-guests">Number of Guests:</label>
            <input
              id="book-guests"
              min="1"
              value={guests}
              onChange={(e) => {
                setGuests(e.target.value);
              }}
              type={"number"}
              placeholder={0}
              max={10}
              required
            ></input>
          </FormRow>
          <FormRow>
            <label htmlFor="book-occasion">Occasion:</label>
            <select
              id="book-occasion"
              key={occasion}
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
              required
              type="occasion"
            >
              <option value="">Select an Option</option>
              <option>Lunch</option>
              <option>Dinner</option>
              <option>Drinks</option>
              <option>* Birthday *</option>
              <option>* Anniversary *</option>
            </select>
          </FormRow>
          <div className="grid-button">
            <input className="form-button"
              aria-label="On Click"
              type={"submit"}
              value={"Reserve"}
            ></input>
          </div>
        </form>
      </GridForm>
      <GridImage>
        <img src={mainImg} alt="" />
      </GridImage>
    </Grid12>
  );
};

export default BookingForm;
