/* The code is similar to the previous CharityForm, but with the field names 
changed to match the fields for creating a business account, 
and with the email field being used as the username. */

import React, { useState } from "react";

export function BusinessForm() {
  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      businessName: businessName,
      username: email, // email is used as the username
      password: password,
      city: city,
      state: state,
      zipCode: zipCode,
      phone: phone,
      description: description,
    };
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="businessName">Business Name:</label>
      <input
        type="text"
        id="businessName"
        value={businessName}
        onChange={(event) => setBusinessName(event.target.value)}
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

      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        required
      />

      <button type="submit">Create Account</button>
    </form>
  );
}

export default BusinessForm;