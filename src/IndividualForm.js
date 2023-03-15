/* The code is similar to the CharityForm and BusinessForm, but with the 
field names changed to match the fields for creating an individual account, 
and with the email field being used as the username. */

import React, { useState } from "react";

export function IndividualForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      firstName: firstName,
      lastName: lastName,
      username: email, // email is used as the username
      password: password,
      city: city,
      state: state,
      zipCode: zipCode,
      phone: phone,
    };
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name:</label>
      <input
        type="text"
        id="firstName"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
        required
      />

      <label htmlFor="lastName">Last Name:</label>
      <input
        type="text"
        id="lastName"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
        required
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        required
      />

      <label htmlFor="city">City:</label>
      <input
        type="text"
        id="city"
        value={city}
        onChange={(event) => setCity(event.target.value)}
        required
      />

      <label htmlFor="state">State:</label>
      <input
        type="text"
        id="state"
        value={state}
        onChange={(event) => setState(event.target.value)}
        required
      />

      <label htmlFor="zipCode">Zip Code:</label>
      <input
        type="text"
        id="zipCode"
        value={zipCode}
        onChange={(event) => setZipCode(event.target.value)}
        required
      />

      <label htmlFor="phone">Phone:</label>
      <input
        type="text"
        id="phone"
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
        required
      />

      <button type="submit">Create Account</button>
    </form>
  );
}

export default IndividualForm;
