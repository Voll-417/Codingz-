import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Booking_a_consultation = () => {

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [phone,setPhone] = useState('')
    const [date,setDate] = useState(new Date())


    const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") setName(value);
    if (name === "email") setEmail(value);
    if (name === "phone") setPhone(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Details:", {name,email, phone,date});
    alert("Consultation Booked Successfully!");
  };

  return (
    <div className="sasa">
    <div className="row justify-content-center p-4">
      <div className="col-md-6 card shadow">
        
            <h2 className="text-2xl font-bold text-center mb-4">Book a Consultation</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="w-full p-2 border rounded form-control"
                onChange={handleChange}
                />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full p-2 border rounded form-control"
                onChange={handleChange}
                />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                className="w-full p-2 border rounded form-control"
                onChange={handleChange}
                />
              <DatePicker
                selected={date}
                onChange={(newDate) => setDate(newDate)}
                showTimeSelect
                dateFormat="Pp"
                className="w-full p-2 border rounded form-control"
                />
                <br />
              <button
                type="submit"
                className="btn btn-info my-3 px-5"
                >
                Confirm Booking
              </button>
            </form>
          </div>
    </div>
  </div>
  );
};

export default Booking_a_consultation 
