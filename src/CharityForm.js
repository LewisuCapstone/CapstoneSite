import React, { useState } from "react";

/*This form includes the fields specified in Discord, with the email field as the username. 
It also includes basic validation for required fields. The handleSubmit function 
logs the form data to the console for demonstration purposes, but we can replace it 
with our own code to submit the data to our server or API. */

export function CharityForm() {
  const [charityName, setCharityName] = useState("");
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
      charityName,
      email,
      password,
      city,
      state,
      zipCode,
      phone,
      description
    };
    console.log(formData); // We can replace this with our own code to submit the form data to our server or API.
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="charityName">Charity Name:</label>
      <input
        type="text"
        id="charityName"
        value={charityName}
        onChange={(event) => setCharityName(event.target.value)}
        required
      />

      <label htmlFor="email">Email (Username):</label>
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

export default CharityForm;